import { promises as fs } from "node:fs";
import path from "node:path";
import { validateLead, type QuoteLead } from "@/lib/quoteLead";

// We write to the local filesystem (dev only) and use node:fs, so pin the Node runtime.
export const runtime = "nodejs";

type LeadRecord = QuoteLead & {
  createdAt: string;
  userAgent: string | null;
  source: string | null;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const WEBHOOK_TIMEOUT_MS = 8_000;
const rateLimit = new Map<string, RateLimitEntry>();

async function appendLocalLead(record: LeadRecord): Promise<void> {
  const dir = path.join(process.cwd(), ".data");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(
    path.join(dir, "quote-leads.jsonl"),
    JSON.stringify(record) + "\n",
    "utf8",
  );
}

function isAllowedWebhookUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:") return true;
    return (
      process.env.NODE_ENV !== "production" &&
      parsed.protocol === "http:" &&
      ["localhost", "127.0.0.1"].includes(parsed.hostname)
    );
  } catch {
    return false;
  }
}

function checkRateLimit(request: Request): boolean {
  const now = Date.now();
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const key = forwardedFor || userAgent;
  const current = rateLimit.get(key);

  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return false;
  }

  current.count += 1;
  return true;
}

async function deliverWebhook(url: string, record: LeadRecord): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(record),
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`webhook responded ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = validateLead(body);
  if (!result.ok) {
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  }

  const record: LeadRecord = {
    ...result.lead,
    createdAt: new Date().toISOString(),
    // Basic, non-sensitive request metadata. We deliberately do not store IP.
    userAgent: request.headers.get("user-agent"),
    source: request.headers.get("referer"),
  };

  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  const isProduction = process.env.NODE_ENV === "production";

  if (!checkRateLimit(request)) {
    return Response.json(
      { ok: false, error: "Too many quote requests. Please try again shortly." },
      { status: 429 },
    );
  }

  if (webhookUrl && !isAllowedWebhookUrl(webhookUrl)) {
    console.error("[quote] QUOTE_WEBHOOK_URL must be HTTPS in production.");
    return Response.json(
      { ok: false, error: "Lead capture is not configured yet. Please try again shortly." },
      { status: 503 },
    );
  }

  // Production guard: the local JSONL file is a dev-only convenience, NOT the
  // production architecture (serverless filesystems are ephemeral). In production
  // a real sink (webhook/email) must be configured, otherwise fail explicitly.
  if (isProduction && !webhookUrl) {
    console.error(
      "[quote] No QUOTE_WEBHOOK_URL configured in production — refusing to silently drop a lead.",
    );
    return Response.json(
      {
        ok: false,
        error: "Lead capture is not configured yet. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  // If a webhook is configured, it is the source of truth for delivery.
  if (webhookUrl) {
    try {
      await deliverWebhook(webhookUrl, record);
    } catch (err) {
      console.error(
        "[quote] Webhook delivery failed:",
        err instanceof Error ? err.message : "unknown error",
      );
      return Response.json(
        { ok: false, error: "We couldn't submit your request. Please try again." },
        { status: 502 },
      );
    }
  }

  // Local development storage (append-only JSONL). Skipped in production.
  if (!isProduction) {
    try {
      await appendLocalLead(record);
    } catch (err) {
      console.error(
        "[quote] Failed to write local lead file:",
        err instanceof Error ? err.message : "unknown error",
      );
      // If there is no webhook fallback in dev, surface the failure.
      if (!webhookUrl) {
        return Response.json(
          { ok: false, error: "We couldn't save your request. Please try again." },
          { status: 500 },
        );
      }
    }
  }

  return Response.json({ ok: true });
}
