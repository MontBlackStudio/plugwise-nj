"use client";

import { useState } from "react";

type PillGroupProps = {
  options: string[];
  seg?: boolean;
};

function PillGroup({ options, seg }: PillGroupProps) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={`opt-group${seg ? " seg" : ""}`}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`opt${active === opt ? " active" : ""}`}
          onClick={() => setActive(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

type UploadBoxProps = { label: string };

function UploadBox({ label }: UploadBoxProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <label className={`upload${fileName ? " filled" : ""}`}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
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

export default function QuoteForm() {
  return (
    <div className="quote-card" id="quote">
      <div className="quote-head">
        <h3>Get Your Personalized Quote</h3>
        <p>Takes 2 minutes</p>
      </div>
      <form className="quote-body" onSubmit={(e) => e.preventDefault()}>
        <div className="step">
          <div className="step-head">
            <span className="step-num">1</span>
            <label className="step-label" htmlFor="zip">ZIP code</label>
          </div>
          <input className="field" id="zip" inputMode="numeric" placeholder="Enter your ZIP code" />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">2</span>
            <label className="step-label" htmlFor="ev">EV brand / model</label>
          </div>
          <select className="field" id="ev" defaultValue="">
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
          <PillGroup options={["Yes", "No", "Not sure"]} seg />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">4</span>
            <span className="step-label">Install location</span>
          </div>
          <PillGroup options={["Garage", "Driveway", "Outdoor", "Condo", "Commercial"]} />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">5</span>
            <span className="step-label">Utility provider</span>
          </div>
          <PillGroup options={["PSE&G", "JCP&L", "Atlantic City Electric", "Rockland", "Not sure"]} />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">6</span>
            <label className="step-label" htmlFor="amp">Panel amperage (if known)</label>
          </div>
          <input className="field" id="amp" inputMode="numeric" placeholder="e.g. 200" />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">7</span>
            <label className="step-label" htmlFor="dist">Distance from panel to install spot</label>
          </div>
          <select className="field" id="dist" defaultValue="">
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
          <PillGroup options={["ASAP", "2 weeks", "30 days", "Researching"]} seg />
        </div>

        <div className="step">
          <div className="step-head">
            <span className="step-num">11</span>
            <span className="step-label">Contact info</span>
          </div>
          <div className="pair">
            <input className="field" type="email" placeholder="Email address" aria-label="Email address" />
            <input className="field" type="tel" placeholder="Phone number" aria-label="Phone number" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Get My EV Charger Quote</button>
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
