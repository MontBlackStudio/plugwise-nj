// Shared, framework-agnostic types + validation for the EV charger quote lead.
// IMPORTANT: keep this file free of server-only imports (no `node:fs`, etc.) so it
// can be imported by both the client form and the server route handler.

export type QuoteLead = {
  zip: string;
  evModel: string;
  chargerPurchased: string;
  installLocation: string;
  utilityProvider: string;
  panelAmperage: string;
  distance: string;
  timeline: string;
  email: string;
  phone: string;
};

// Every field the form submits. Order is stable for storage/inspection.
export const QUOTE_FIELDS = [
  "zip",
  "evModel",
  "chargerPurchased",
  "installLocation",
  "utilityProvider",
  "panelAmperage",
  "distance",
  "timeline",
  "email",
  "phone",
] as const;

// Required server-side. `panelAmperage` is intentionally optional because the UI
// labels it "if known" — requiring it would contradict the visible form copy.
export const REQUIRED_FIELDS: (keyof QuoteLead)[] = [
  "zip",
  "evModel",
  "chargerPurchased",
  "installLocation",
  "utilityProvider",
  "distance",
  "timeline",
  "email",
  "phone",
];

const FIELD_LABELS: Record<keyof QuoteLead, string> = {
  zip: "ZIP code",
  evModel: "EV brand / model",
  chargerPurchased: "whether your charger is purchased",
  installLocation: "install location",
  utilityProvider: "utility provider",
  panelAmperage: "panel amperage",
  distance: "distance from panel to install spot",
  timeline: "preferred timeline",
  email: "email address",
  phone: "phone number",
};

export const EMPTY_LEAD: QuoteLead = {
  zip: "",
  evModel: "",
  chargerPurchased: "",
  installLocation: "",
  utilityProvider: "",
  panelAmperage: "",
  distance: "",
  timeline: "",
  email: "",
  phone: "",
};

export type ValidationResult =
  | { ok: true; lead: QuoteLead }
  | { ok: false; error: string };

// Lightweight, dependency-free format checks.
const ZIP_RE = /^\d{5}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 120;

const ALLOWED_VALUES: Partial<Record<keyof QuoteLead, readonly string[]>> = {
  evModel: [
    "Tesla Model 3 / Y / S / X",
    "Ford Mustang Mach-E / F-150 Lightning",
    "Chevrolet Bolt / Equinox EV",
    "Hyundai Ioniq 5 / 6",
    "Kia EV6 / EV9",
    "Rivian R1T / R1S",
    "Other / Not sure",
  ],
  chargerPurchased: ["Yes", "No", "Not sure"],
  installLocation: ["Garage", "Driveway", "Outdoor", "Condo", "Commercial"],
  utilityProvider: ["PSE&G", "JCP&L", "Atlantic City Electric", "Rockland", "Not sure"],
  distance: ["Under 15 ft", "15–30 ft", "30–50 ft", "50–75 ft", "Over 75 ft"],
  timeline: ["ASAP", "2 weeks", "30 days", "Researching"],
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function hasValidLength(value: string): boolean {
  return value.length <= MAX_FIELD_LENGTH;
}

/**
 * Validates and normalizes an untrusted payload into a QuoteLead.
 * Returns the first human-readable problem so the UI can show one clear message.
 */
export function validateLead(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "Invalid request. Please try again." };
  }

  const raw = input as Record<string, unknown>;
  const lead: QuoteLead = { ...EMPTY_LEAD };
  for (const field of QUOTE_FIELDS) {
    lead[field] = asString(raw[field]);
    if (!hasValidLength(lead[field])) {
      return { ok: false, error: `${FIELD_LABELS[field]} is too long.` };
    }
  }

  // Bot honeypot. Real UI leaves this absent/empty; generic spam bots may fill it.
  if (asString(raw.website)) {
    return { ok: false, error: "Invalid request. Please try again." };
  }

  // Required, non-empty fields.
  for (const field of REQUIRED_FIELDS) {
    if (!lead[field]) {
      return { ok: false, error: `Please provide your ${FIELD_LABELS[field]}.` };
    }
  }

  for (const [field, allowed] of Object.entries(ALLOWED_VALUES) as [keyof QuoteLead, readonly string[]][]) {
    if (lead[field] && !allowed.includes(lead[field])) {
      return { ok: false, error: `Please choose a valid ${FIELD_LABELS[field]}.` };
    }
  }

  // Format checks.
  if (!ZIP_RE.test(lead.zip)) {
    return { ok: false, error: "Please enter a valid 5-digit ZIP code." };
  }
  if (!EMAIL_RE.test(lead.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (lead.phone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Please enter a valid phone number." };
  }

  return { ok: true, lead };
}
