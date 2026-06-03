"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does EV charger installation cost in NJ?",
    a: "Most Level 2 installs in New Jersey range from roughly $800 to $2,500 depending on panel capacity, the run distance to your install spot, indoor vs. outdoor work, and whether trenching or a panel upgrade is needed. We scope these from your photos so quotes reflect your actual home.",
  },
  {
    q: "Do I need a permit to install a Level 2 charger in New Jersey?",
    a: "Yes. NJ requires an electrical permit and inspection for Level 2 charger installations. Licensed electricians in our network handle the permit process and coordinate inspection so the work is up to code.",
  },
  {
    q: "Does PSE&G offer EV charger rebates?",
    a: "PSE&G has run EV charger incentive programs for eligible residential customers. Program terms and amounts change over time — always verify current eligibility and details directly with the utility before relying on a specific amount.",
  },
  {
    q: "NEMA 14-50 vs. hardwired Level 2 charger — what's best?",
    a: "A NEMA 14-50 outlet offers flexibility and works with plug-in chargers, while a hardwired install supports higher continuous amperage and is often recommended for outdoor or higher-power setups. The right choice depends on your charger, panel, and location.",
  },
  {
    q: "Can I install an EV charger outside?",
    a: "Yes. Many Level 2 chargers are rated for outdoor use. Outdoor installs may require weatherproof enclosures, conduit, or trenching depending on the run, which a licensed electrician will account for in the quote.",
  },
  {
    q: "Can condos or apartments install EV chargers?",
    a: "Often yes, though it typically requires coordination with your HOA or property management and may involve shared metering or dedicated circuits. We can help you understand the options for multi-unit and shared-parking situations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <h3 className="col-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
                  <button className="faq-q" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                    {faq.q}
                    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`faq-a${openIndex === i ? " open" : ""}`}>
                    <div className="faq-a-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="faq-all">View all FAQs →</a>
          </div>

          {/* Electrician CTA */}
          <div className="elec-card">
            <div className="elec-photo" />
            <div className="elec-inner">
              <h3>Are you a licensed NJ electrician?</h3>
              <p>Join our trusted installer network.</p>
              <ul className="elec-list">
                <li>
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Get quality leads in your service area
                </li>
                <li>
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  We handle marketing &amp; homeowner pre-qualification
                </li>
                <li>
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  You focus on what you do best: great installs
                </li>
                <li>
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Grow your business with a steady pipeline of jobs
                </li>
              </ul>
              <div className="elec-actions">
                <a href="#" className="btn btn-primary">Join Our Installer Network</a>
                <a href="#" className="elec-link">Learn more about partnering with us →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
