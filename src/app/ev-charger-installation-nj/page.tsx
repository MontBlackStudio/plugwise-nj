import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const PAGE_URL = "https://plugwisenj.com/ev-charger-installation-nj";

export const metadata: Metadata = {
  title: "EV Charger Installation in NJ — Level 2 Quotes from Photos | PlugWise NJ",
  description:
    "Get Level 2 EV charger installation quotes in New Jersey from your photos. PlugWise NJ connects homeowners with independent licensed electricians. Compare cost factors, permits, and rebate options.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "PlugWise NJ",
    title: "EV Charger Installation in New Jersey — Level 2 Quotes from Photos",
    description:
      "Request Level 2 EV charger installation quotes in New Jersey from your photos. PlugWise NJ connects homeowners with independent licensed electricians.",
  },
  twitter: {
    card: "summary",
    title: "EV Charger Installation in NJ — Level 2 Quotes from Photos",
    description:
      "Level 2 EV charger installation quotes in New Jersey from your photos. PlugWise NJ connects homeowners with independent licensed electricians.",
  },
};

const faqs = [
  {
    q: "How do photo-based EV charger quotes work?",
    a: "You share photos of your electrical panel and the spot where you want the charger. PlugWise NJ uses those photos to help scope the job — panel capacity, run distance, and install conditions — so independent licensed electricians can prepare quotes that reflect your actual home, often without an upfront in-person visit.",
  },
  {
    q: "How long does a Level 2 charger installation take?",
    a: "Many residential Level 2 installations are completed in a single visit once the charger, parts, and any required permit are in place. The exact time depends on the run distance, whether the work is indoor or outdoor, and whether a panel upgrade or trenching is needed.",
  },
  {
    q: "Will I need an electrical panel upgrade?",
    a: "Not always. Whether a panel upgrade is needed depends on your panel's capacity and existing load. Sharing a photo of your panel helps a licensed electrician assess available capacity and include any upgrade in the quote if it's required.",
  },
  {
    q: "What's the difference between Level 1 and Level 2 charging?",
    a: "Level 1 charging uses a standard 120V household outlet and adds range slowly. Level 2 charging uses a 240V circuit — similar to a large appliance — and charges much faster, which is why most homeowners install a dedicated Level 2 circuit for daily charging.",
  },
  {
    q: "Are the electricians licensed in New Jersey?",
    a: "PlugWise NJ connects homeowners with independent licensed electricians where available. Electrical work, permits, and inspections are handled by those independent professionals, not by PlugWise NJ.",
  },
  {
    q: "Do you install EV chargers in detached garages or outdoors?",
    a: "Detached garages, driveways, and outdoor locations are common Level 2 installations. These can involve weatherproof equipment, conduit, or trenching depending on the distance from your panel, which a licensed electrician will account for in the quote.",
  },
];

const hardwired = [
  "Fixed, direct connection to the circuit",
  "Supports higher continuous amperage",
  "Often preferred for outdoor or higher-power setups",
  "Clean, permanent installation",
];

const nema = [
  "Works with plug-in (portable) Level 2 chargers",
  "Flexible — the charger can be unplugged or moved",
  "Can be a good fit when you already have a compatible charger",
  "Requires a properly rated 240V outlet and circuit",
];

const permits = [
  "New Jersey requires an electrical permit for Level 2 charger installs",
  "Work is inspected by your local authority having jurisdiction (AHJ)",
  "Installations follow National Electrical Code and NJ requirements",
  "A licensed electrician pulls the permit and coordinates inspection",
];

const costFactors = [
  { t: "Panel Capacity", d: "Available amperage determines whether an upgrade is needed." },
  { t: "Run Distance", d: "Longer runs from the panel mean more labor and materials." },
  { t: "Indoor vs Outdoor", d: "Outdoor installs may need weatherproofing or conduit." },
  { t: "Hardwired vs Plug-in", d: "The connection type affects parts and labor." },
  { t: "Trenching / Conduit", d: "Underground runs to detached structures add complexity." },
  { t: "Permit & Inspection", d: "NJ permits and inspection are part of a compliant install." },
];

const areas = [
  "Brick",
  "Old Bridge",
  "Red Bank",
  "Bridgewater",
  "Westfield",
  "Middletown",
  "Howell",
  "Monmouth County",
  "Union County",
  "Somerset County",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://plugwisenj.com/#organization",
      name: "PlugWise NJ",
      url: "https://plugwisenj.com",
      description:
        "PlugWise NJ is a quote coordination platform that helps New Jersey homeowners request Level 2 EV charger installation quotes and connect with independent licensed installation providers where available.",
      areaServed: { "@type": "State", name: "New Jersey" },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "EV Charger Installation Quote Coordination in New Jersey",
      provider: { "@id": "https://plugwisenj.com/#organization" },
      description:
        "PlugWise NJ helps New Jersey homeowners request Level 2 EV charger installation quotes from photos and connects them with independent licensed electricians where available.",
      areaServed: { "@type": "State", name: "New Jersey" },
      serviceType: "EV Charger Installation Quote Coordination",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://plugwisenj.com" },
        { "@type": "ListItem", position: 2, name: "EV Charger Installation NJ", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function EvChargerInstallationNj() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="service-hub-page">
        {/* ============ HERO ============ */}
        <header className="hero">
          <nav className="topnav" aria-label="Main navigation">
            <div className="topnav-inner">
              <Link href="/" className="brand" aria-label="PlugWise NJ home">
                <span className="brand-bolt">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
                  </svg>
                </span>
                <span className="brand-name">PlugWise</span>
                <span className="nj-pill">NJ</span>
              </Link>
              <div className="brand-sub">
                New Jersey
                <br />
                EV Charger Quotes
              </div>
              <div className="nav-items">
                <span className="nav-item">
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  </svg>
                  Licensed
                  <br />
                  Electricians
                </span>
                <span className="nav-item">
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 11l3 3 8-8" />
                    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                  </svg>
                  Permit &amp; Code
                  <br />
                  Guidance
                </span>
                <span className="nav-item">
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="6" width="18" height="14" rx="2" />
                    <circle cx="12" cy="13" r="3.2" />
                    <path d="M8 6l1.5-2h5L16 6" />
                  </svg>
                  Quotes from
                  <br />
                  Your Photos
                </span>
              </div>
              <div className="nav-secure">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                Secure. Private. No Spam.
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#quote" className="mobile-nav-link primary">Get Quote</a>
              <a href="#how" className="mobile-nav-link">How It Works</a>
              <a href="#cost" className="mobile-nav-link">Cost</a>
              <a href="#areas" className="mobile-nav-link">Service Area</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          </nav>

          <div className="hero-grid">
            {/* NJ MAP */}
            <svg className="hero-map" viewBox="0 0 240 360" aria-hidden="true">
              <g>
                <path className="nj-inner" d="M88 60 L150 78 M150 78 L120 150 M120 150 L165 130 M120 150 L88 200 M88 200 L150 250 M88 200 L70 220 M120 150 L100 250 M100 250 L130 330" />
                <path className="nj-outline" d="M78 28 L132 40 L150 78 L142 102 L168 124 L168 156 L156 182 L166 214 L150 252 L154 294 L138 334 L120 336 L112 302 L88 270 L96 242 L70 214 L80 178 L56 152 L62 122 L44 98 L58 64 L52 38 Z" />
                <circle className="nj-dot" cx="150" cy="78" r="3.5" />
                <circle className="nj-dot" cx="120" cy="150" r="3" />
                <circle className="nj-dot" cx="138" cy="334" r="3.5" />
              </g>
            </svg>

            {/* LEFT COLUMN */}
            <div className="hero-left">
              <h1>
                EV Charger Installation<br />
                Quotes in <span className="blue">New Jersey</span>
              </h1>
              <p className="hero-sub">
                Get Level 2 EV charger installation quotes from your photos. PlugWise NJ connects New Jersey homeowners with independent licensed electricians where available.
              </p>
              <div className="cta-row">
                <a href="#quote" className="btn btn-primary">
                  Get My EV Charger Quote
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="#cost" className="btn btn-outline">See What Affects Cost</a>
              </div>
              <div className="trust-row">
                <div className="trust-item">
                  <span className="ic">
                    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="6" width="18" height="14" rx="2" />
                      <circle cx="12" cy="13" r="3.2" />
                    </svg>
                  </span>
                  Quotes from Your Photos
                </div>
                <div className="trust-item">
                  <span className="ic">
                    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                      <path d="M9.5 12l2 2 3.5-3.5" />
                    </svg>
                  </span>
                  Independent Licensed Electricians
                </div>
                <div className="trust-item">
                  <span className="ic">
                    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 11l3 3 8-8" />
                      <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                    </svg>
                  </span>
                  Permit &amp; Code Guidance
                </div>
                <div className="trust-item">
                  <span className="ic">
                    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 11l8-6 8 6" />
                      <path d="M6 10v9h12v-9" />
                    </svg>
                  </span>
                  Serving Homeowners Across NJ
                </div>
              </div>
              <div className="callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9.5 12l2 2 3.5-3.5" />
                </svg>
                Built for NJ homeowners comparing Level 2 EV charger installation options.
              </div>
              <div className="lock-note">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                Your information is safe and never shared.
              </div>
            </div>

            {/* QUOTE FORM — shared client component */}
            <QuoteForm />
          </div>
        </header>

        {/* ============ HOW PHOTO QUOTES WORK ============ */}
        <section id="how">
          <div className="wrap">
            <div className="sec-head">
              <h2>How quotes from photos work</h2>
              <p>Scope your Level 2 installation without an upfront in-home visit.</p>
            </div>
            <div className="svc-steps">
              <div className="svc-step">
                <div className="svc-num">1</div>
                <h3>Share your photos</h3>
                <p>Upload photos of your electrical panel and where you want the charger installed.</p>
              </div>
              <div className="svc-step">
                <div className="svc-num">2</div>
                <h3>We scope the job</h3>
                <p>We review panel capacity, run distance, and install conditions to scope your Level 2 installation.</p>
              </div>
              <div className="svc-step">
                <div className="svc-num">3</div>
                <h3>Compare matched quotes</h3>
                <p>Receive quotes from independent licensed NJ electricians and compare your options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COST FACTORS ============ */}
        <section className="info-section" id="cost">
          <div className="wrap">
            <div className="sec-head">
              <h2>What affects EV charger installation cost in NJ</h2>
              <p>Every home is different. These are the main factors a quote accounts for.</p>
            </div>
            <div className="panel">
              <div className="factor-grid">
                {costFactors.map((f) => (
                  <div className="factor" key={f.t}>
                    <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4l3 2" />
                    </svg>
                    <h5>{f.t}</h5>
                    <p>{f.d}</p>
                  </div>
                ))}
              </div>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
                Most of these factors can be assessed from your photos, so quotes reflect your actual home.{" "}
                <Link href="/#cost" className="svc-back">Compare cost &amp; rebate details on the home page →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HARDWIRED VS NEMA 14-50 ============ */}
        <section id="options">
          <div className="wrap">
            <div className="sec-head">
              <h2>Level 2 charger options: hardwired vs NEMA 14-50</h2>
              <p>Two common ways to set up Level 2 charging at home.</p>
            </div>
            <div className="info-grid">
              <div className="panel">
                <h3 className="panel-title">Hardwired Level 2</h3>
                <p className="panel-sub">A permanent connection wired directly to the circuit.</p>
                <ul className="svc-list">
                  {hardwired.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3 className="panel-title">NEMA 14-50 outlet</h3>
                <p className="panel-sub">A 240V outlet that works with plug-in chargers.</p>
                <ul className="svc-list">
                  {nema.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              The right choice depends on your charger, panel, and install location — a licensed electrician will recommend the best option for your home.
            </div>
          </div>
        </section>

        {/* ============ PERMITS & INSPECTION ============ */}
        <section className="info-section" id="permits">
          <div className="wrap">
            <div className="sec-head">
              <h2>Permits and inspection in New Jersey</h2>
              <p>Level 2 charger installs are permitted and inspected work in NJ.</p>
            </div>
            <div className="panel">
              <ul className="svc-list">
                {permits.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11l3 3 8-8" />
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                </svg>
                Electricians in our network handle permits and coordinate inspection as part of the job.
              </div>
            </div>
          </div>
        </section>

        {/* ============ REBATES (HIGH LEVEL) ============ */}
        <section id="rebates">
          <div className="wrap">
            <div className="sec-head">
              <h2>Rebates and incentives</h2>
              <p>New Jersey homeowners may qualify for utility EV charger programs.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                Utilities such as PSE&amp;G and JCP&amp;L have offered EV charger incentive programs for eligible residential customers. Programs and eligibility change over time — always verify current details directly with your utility before relying on a specific amount.
              </p>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                PlugWise NJ is not affiliated with any utility or rebate program.
              </div>
              <p className="svc-link-row">
                <Link href="/#cost" className="svc-back">See current rebate program links on the home page →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ============ SERVICE AREA ============ */}
        <section className="info-section" id="areas">
          <div className="wrap">
            <div className="sec-head">
              <h2>Service area across New Jersey</h2>
              <p>Helping homeowners request EV charger installation quotes statewide.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                PlugWise NJ helps homeowners request EV charger installation quotes across New Jersey, including Brick, Old Bridge, Red Bank, Bridgewater, Westfield, Middletown, and Howell, as well as Monmouth County, Union County, and Somerset County. Availability varies by location.
              </p>
              <div className="area-tags">
                {areas.map((a) => (
                  <span className="area-tag" key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>EV charger installation FAQ</h2>
              <p>Common questions about Level 2 installation in New Jersey.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div className="faq-item open" key={faq.q}>
                  <h3 className="faq-q">{faq.q}</h3>
                  <div className="faq-a open">
                    <div className="faq-a-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CROSS-LINK / CTA BAND ============ */}
        <section className="chargers dark">
          <div className="wrap">
            <div className="charger-foot svc-cta">
              <span>Ready to compare Level 2 EV charger installation quotes in New Jersey?</span>
              <a href="#quote" className="btn btn-primary">Get My EV Charger Quote</a>
            </div>
            <div className="charger-foot svc-cta-sub">
              <Link href="/" className="btn-ghost-light">Back to PlugWise NJ home</Link>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-about">
              <div className="brand">
                <span className="brand-bolt">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
                  </svg>
                </span>
                <span className="brand-name">PlugWise</span>
                <span className="nj-pill">NJ</span>
              </div>
              <p className="foot-tag">
                Smarter EV charger quotes
                <br />
                for New Jersey homeowners.
              </p>
              <p className="foot-desc">
                PlugWise is a lead generation and quote coordination platform. Electrical work is performed by independent licensed electricians. Availability varies by location.
              </p>
            </div>
            <div className="foot-col">
              <h5>On This Page</h5>
              <ul>
                <li><a href="#quote">Get a Quote</a></li>
                <li><a href="#how">How It Works</a></li>
                <li><a href="#cost">Cost Factors</a></li>
                <li><a href="#options">Charger Options</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Explore</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#cost">Cost &amp; Rebates</Link></li>
                <li><Link href="/#how">How It Works</Link></li>
                <li><Link href="/#faq">FAQs</Link></li>
              </ul>
            </div>
            <div className="foot-col foot-area">
              <h5>Service Area</h5>
              <p className="lead">Proudly serving homeowners across New Jersey.</p>
              <p className="foot-counties">
                Monmouth • Union • Somerset
                <br />
                Middlesex • and nearby areas
              </p>
              <svg className="foot-nj" viewBox="0 0 240 360" aria-hidden="true">
                <path
                  className="nj-outline"
                  style={{ strokeWidth: 5 }}
                  d="M78 28 L132 40 L150 78 L142 102 L168 124 L168 156 L156 182 L166 214 L150 252 L154 294 L138 334 L120 336 L112 302 L88 270 L96 242 L70 214 L80 178 L56 152 L62 122 L44 98 L58 64 L52 38 Z"
                />
              </svg>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} PlugWise NJ. All rights reserved.</span>
            <span className="serving">
              Serving all of New Jersey
              <svg viewBox="0 0 240 360" style={{ width: 14, height: 18 }} fill="none" stroke="currentColor" strokeWidth="8" aria-hidden="true">
                <path d="M78 28 L132 40 L150 78 L142 102 L168 124 L168 156 L156 182 L166 214 L150 252 L154 294 L138 334 L120 336 L112 302 L88 270 L96 242 L70 214 L80 178 L56 152 L62 122 L44 98 L58 64 L52 38 Z" />
              </svg>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
