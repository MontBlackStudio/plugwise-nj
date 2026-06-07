"use client";

import { useState } from "react";
import { EMPTY_LEAD, validateLead, type QuoteLead } from "@/lib/quoteLead";

type PillGroupProps = {
  label: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
  seg?: boolean;
};

function PillGroup({ label, options, value, onSelect, seg }: PillGroupProps) {
  return (
    <div className={`opt-group${seg ? " seg" : ""}`} role="group" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`opt${value === opt ? " active" : ""}`}
          aria-pressed={value === opt}
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

type UploadBoxProps = { label: string };

function UploadBox({ label }: UploadBoxProps) {
  // Files are not uploaded/stored yet — this remains a visual affordance only.
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <label className={`upload${fileName ? " filled" : ""}`}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        aria-label={label}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setFileName(file.name);
        }}
      />
      <span className="up-main">
        <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 16V4M8 8l4-4 4 4" />
          <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </svg>
        {fileName ? "Photo added" : "Upload Photo"}
      </span>
      <span className="up-sub">{fileName ?? `${label} — JPG, PNG (Max 10MB)`}</span>
    </label>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<QuoteLead>(EMPTY_LEAD);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const update = (key: keyof QuoteLead, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  function resetForm() {
    setForm(EMPTY_LEAD);
    setStatus("idle");
    setErrorMsg("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side validation mirrors the server for instant feedback.
    const result = validateLead(form);
    if (!result.ok) {
      setStatus("error");
      setErrorMsg(result.error);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(result.lead),
      });
      const data: { ok?: boolean; error?: string } = await res
        .json()
        .catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  // ── Success state ──────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="quote-card" id="quote">
        <div className="quote-head">
          <h3>Request received</h3>
          <p>Thanks for reaching out</p>
        </div>
        <div className="quote-body quote-success" role="status" aria-live="polite">
          <span className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12l4 4 10-10" />
            </svg>
          </span>
          <h4>Your quote request is in</h4>
          <p>
            We&apos;ll review the details you shared and follow up by email or phone. Independent licensed NJ electricians coordinate the install.
          </p>
          <button type="button" className="success-reset" onClick={resetForm}>
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  // ── Form state ─────────────────────────────────────────────────
  const submitting = status === "submitting";

  return (
    <div className="quote-card" id="quote">
      <div className="quote-head">
        <h3>Get Your Personalized Quote</h3>
        <p>Takes 2 minutes</p>
      </div>
      <form className="quote-body" onSubmit={handleSubmit} noValidate>
        <div className="step">
          <div className="step-head">
            <span className="step-num">1</span>
            <label className="step-label" htmlFor="zip">ZIP code</label>
          </div>
          <input
            className="field"
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="Enter your ZIP code"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
          />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">2</span>
            <label className="step-label" htmlFor="ev">EV brand / model</label>
          </div>
          <select
            className="field"
            id="ev"
            name="evModel"
            value={form.evModel}
            onChange={(e) => update("evModel", e.target.value)}
          >
            <option value="" disabled>Select your EV</option>
            <option>Tesla Model 3 / Y / S / X</option>
            <option>Ford Mustang Mach-E / F-150 Lightning</option>
            <option>Chevrolet Bolt / Equinox EV</option>
            <option>Hyundai Ioniq 5 / 6</option>
            <option>Kia EV6 / EV9</option>
            <option>Rivian R1T / R1S</option>
            <option>Other / Not sure</option>
          </select>
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">3</span>
            <span className="step-label">Charger already purchased?</span>
          </div>
          <PillGroup
            label="Charger already purchased?"
            options={["Yes", "No", "Not sure"]}
            value={form.chargerPurchased}
            onSelect={(v) => update("chargerPurchased", v)}
            seg
          />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">4</span>
            <span className="step-label">Install location</span>
          </div>
          <PillGroup
            label="Install location"
            options={["Garage", "Driveway", "Outdoor", "Condo", "Commercial"]}
            value={form.installLocation}
            onSelect={(v) => update("installLocation", v)}
          />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">5</span>
            <span className="step-label">Utility provider</span>
          </div>
          <PillGroup
            label="Utility provider"
            options={["PSE&G", "JCP&L", "Atlantic City Electric", "Rockland", "Not sure"]}
            value={form.utilityProvider}
            onSelect={(v) => update("utilityProvider", v)}
          />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">6</span>
            <label className="step-label" htmlFor="amp">Panel amperage (if known)</label>
          </div>
          <input
            className="field"
            id="amp"
            name="panelAmperage"
            inputMode="numeric"
            placeholder="e.g. 200"
            value={form.panelAmperage}
            onChange={(e) => update("panelAmperage", e.target.value)}
          />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">7</span>
            <label className="step-label" htmlFor="dist">Distance from panel to install spot</label>
          </div>
          <select
            className="field"
            id="dist"
            name="distance"
            value={form.distance}
            onChange={(e) => update("distance", e.target.value)}
          >
            <option value="" disabled>Select distance</option>
            <option>Under 15 ft</option>
            <option>15–30 ft</option>
            <option>30–50 ft</option>
            <option>50–75 ft</option>
            <option>Over 75 ft</option>
          </select>
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">8</span>
            <span className="step-label">Upload a photo of your electrical panel</span>
          </div>
          <UploadBox label="Panel photo" />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">9</span>
            <span className="step-label">Upload a photo of install location</span>
          </div>
          <UploadBox label="Install location photo" />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">10</span>
            <span className="step-label">Preferred timeline</span>
          </div>
          <PillGroup
            label="Preferred timeline"
            options={["ASAP", "2 weeks", "30 days", "Researching"]}
            value={form.timeline}
            onSelect={(v) => update("timeline", v)}
            seg
          />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">11</span>
            <span className="step-label">Contact info</span>
          </div>
          <div className="pair">
            <input
              className="field"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email address"
              aria-label="Email address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <input
              className="field"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Phone number"
              aria-label="Phone number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
        </div>

        {status === "error" && errorMsg ? (
          <div className="form-error" role="alert">
            <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h.01" />
            </svg>
            <span>{errorMsg}</span>
          </div>
        ) : null}

        <button
          type="submit"
          className="submit-btn"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? (
            <>
              <span className="btn-spinner" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            "Get My EV Charger Quote"
          )}
        </button>
        <div className="privacy">
          <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          By submitting, you agree to our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </div>
      </form>
    </div>
  );
}
