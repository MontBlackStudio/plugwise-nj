import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import FaqSection from "@/components/FaqSection";

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
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
    },
    {
      "@type": "Service",
      "@id": "https://plugwisenj.com/#service",
      name: "EV Charger Installation Quote Coordination",
      provider: { "@id": "https://plugwisenj.com/#organization" },
      description:
        "PlugWise NJ helps homeowners request Level 2 EV charger installation quotes from photos. Electrical work is performed by independent licensed electricians. Availability varies by location.",
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      serviceType: "EV Charger Installation Quote Coordination",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does EV charger installation cost in NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Level 2 installs in New Jersey range from roughly $800 to $2,500 depending on panel capacity, the run distance to your install spot, indoor vs. outdoor work, and whether trenching or a panel upgrade is needed. We scope these from your photos so quotes reflect your actual home.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a permit to install a Level 2 charger in New Jersey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. NJ requires an electrical permit and inspection for Level 2 charger installations. Licensed electricians in our network handle the permit process and coordinate inspection so the work is up to code.",
          },
        },
        {
          "@type": "Question",
          name: "Does PSE&G offer EV charger rebates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PSE&G has run EV charger incentive programs for eligible residential customers. Program terms and amounts change over time — always verify current eligibility and details directly with the utility before relying on a specific amount.",
          },
        },
        {
          "@type": "Question",
          name: "NEMA 14-50 vs. hardwired Level 2 charger — what’s best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A NEMA 14-50 outlet offers flexibility and works with plug-in chargers, while a hardwired install supports higher continuous amperage and is often recommended for outdoor or higher-power setups. The right choice depends on your charger, panel, and location.",
          },
        },
        {
          "@type": "Question",
          name: "Can I install an EV charger outside?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Level 2 chargers are rated for outdoor use. Outdoor installs may require weatherproof enclosures, conduit, or trenching depending on the run, which a licensed electrician will account for in the quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can condos or apartments install EV chargers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often yes, though it typically requires coordination with your HOA or property management and may involve shared metering or dedicated circuits. We can help you understand the options for multi-unit and shared-parking situations.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main>
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M15 9.5a3 3 0 0 0-3-1.5c-1.7 0-3 1-3 2.2 0 2.8 6 1.4 6 4.3 0 1.3-1.4 2.3-3 2.3a3.2 3.2 0 0 1-3-1.6" />
                  <path d="M12 6.5v11" />
                </svg>
                Rebates &amp;
                <br />
                Incentives
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
            <a href="#cost" className="mobile-nav-link">Cost &amp; Rebates</a>
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
              Get a Level 2<br />
              EV Charger Installed<br />
              in <span className="blue">New Jersey</span>
            </h1>
            <p className="hero-sub">
              Compare cost, permit requirements, rebates, and get connected with qualified NJ electricians.
            </p>
            <div className="cta-row">
              <a href="#quote" className="btn btn-primary">
                Get My EV Charger Quote
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#cost" className="btn btn-outline">Check Cost &amp; Rebate Options</a>
            </div>
            <div className="trust-row">
              <div className="trust-item">
                <span className="ic">
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                    <path d="M9.5 12l2 2 3.5-3.5" />
                  </svg>
                </span>
                Qualified NJ Electricians
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="M14.5 9.5a3 3 0 0 0-2.8-1.5c-1.6 0-2.7 1-2.7 2.1 0 2.6 5.6 1.3 5.6 4 0 1.2-1.3 2.1-2.8 2.1a3 3 0 0 1-2.8-1.5" />
                  </svg>
                </span>
                Rebates &amp; Incentives
              </div>
              <div className="trust-item">
                <span className="ic">
                  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="6" width="18" height="14" rx="2" />
                    <circle cx="12" cy="13" r="3.2" />
                  </svg>
                </span>
                Quotes from Your Photos
              </div>
            </div>
            <div className="callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9.5 12l2 2 3.5-3.5" />
              </svg>
              Built for NJ homeowners comparing EV charger installation costs.
            </div>
            <div className="lock-note">
              <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Your information is safe and never shared.
            </div>
          </div>

          {/* QUOTE FORM — client component for interactivity */}
          <QuoteForm />
        </div>
      </header>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how">
        <div className="wrap">
          <div className="sec-head">
            <h2>How it works</h2>
            <p>Simple steps. Transparent process.</p>
          </div>
          <div className="hiw-grid">
            <div className="hiw-step">
              <div className="hiw-badge">1</div>
              <div className="hiw-vis">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="6" y="2" width="12" height="20" rx="2.5" />
                  <path d="M12 14V8M9.5 10.5L12 8l2.5 2.5" />
                </svg>
              </div>
              <h4>Upload Photos</h4>
              <p>Share photos of your electrical panel and install location.</p>
            </div>
            <div className="hiw-arrow" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
            <div className="hiw-step">
              <div className="hiw-badge">2</div>
              <div className="hiw-vis">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 7h6M9 11h4" />
                  <circle cx="13" cy="15.5" r="2.5" />
                  <path d="M15 17.5l2 2" />
                </svg>
              </div>
              <h4>We Check Factors</h4>
              <p>We evaluate your panel, distance, capacity, and permits to scope the job.</p>
            </div>
            <div className="hiw-arrow" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
            <div className="hiw-step">
              <div className="hiw-badge">3</div>
              <div className="hiw-vis">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
                </svg>
              </div>
              <h4>Licensed Electricians Quote You</h4>
              <p>You receive competitive quotes from qualified NJ electricians.</p>
            </div>
            <div className="hiw-arrow" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
            <div className="hiw-step">
              <div className="hiw-badge">4</div>
              <div className="hiw-vis">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="6" y="2" width="12" height="20" rx="2.5" />
                  <path d="M12.5 7l-2.5 4h3l-2.5 4" />
                </svg>
              </div>
              <h4>Install + Permit &amp; Rebate Guidance</h4>
              <p>Professional installation with permit handling and rebate support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST + REBATES ============ */}
      <section className="info-section" id="cost">
        <div className="wrap">
          <div className="info-grid">
            {/* Cost Factors */}
            <div className="panel">
              <h3 className="panel-title">What Affects the Cost?</h3>
              <p className="panel-sub">Every home is different. Key factors include:</p>
              <div className="factor-grid">
                <div className="factor">
                  <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="6" y="3" width="12" height="18" rx="2" />
                    <path d="M10 7h4M10 11h4M11 15l-1 3h4l-1-3" />
                  </svg>
                  <h5>Panel Capacity</h5>
                  <p>Adequate amperage is critical for safe, reliable charging.</p>
                </div>
                <div className="factor">
                  <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 7l18 0M3 7v4M21 7v4M7 7v3M11 7v3M15 7v3M19 7v3" />
                  </svg>
                  <h5>Distance</h5>
                  <p>Greater distance means more labor and materials.</p>
                </div>
                <div className="factor">
                  <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 11l8-6 8 6" />
                    <path d="M6 10v9h12v-9" />
                    <path d="M10 19v-4h4v4" />
                  </svg>
                  <h5>Indoor vs Outdoor</h5>
                  <p>Indoor installs are often simpler; outdoor may require upgrades.</p>
                </div>
                <div className="factor">
                  <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="7" y="9" width="10" height="11" rx="2" />
                    <path d="M10 9V6a2 2 0 0 1 4 0v3M12 13v3" />
                  </svg>
                  <h5>Hardwired vs Plug-in</h5>
                  <p>Hardwired is standard for Level 2. Plug options may be available.</p>
                </div>
                <div className="factor">
                  <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 16h16M6 16v-3a6 6 0 0 1 12 0v3" />
                    <path d="M9 20h6" />
                  </svg>
                  <h5>Trenching / Conduit</h5>
                  <p>Underground runs increase time and complexity.</p>
                </div>
                <div className="factor">
                  <svg className="icon ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 3h7l4 4v14H7z" />
                    <path d="M14 3v4h4" />
                    <path d="M9.5 13l1.5 1.5 3-3" />
                  </svg>
                  <h5>Permit &amp; Inspection</h5>
                  <p>NJ requires permits and inspections for EV charger installs.</p>
                </div>
              </div>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
                We evaluate these factors from your photos to give you accurate quotes upfront.
              </div>
            </div>

            {/* Rebates */}
            <div className="panel">
              <h3 className="panel-title green">Rebates &amp; Incentives in NJ</h3>
              <p className="panel-sub">Programs change. Verify eligibility and current details.</p>
              <div className="rebate">
                <div className="rebate-logo" style={{ color: "#E8761F" }}>PSE&amp;G</div>
                <div>
                  <h5>PSE&amp;G EV Incentive Program</h5>
                  <p>Up to $350 for eligible Level 2 charger installs.</p>
                  <a href="https://nj.pseg.com/home/products_and_services/electricvehicles" target="_blank" rel="noopener noreferrer">Learn more →</a>
                </div>
              </div>
              <div className="rebate">
                <div className="rebate-logo" style={{ color: "#1F7A3D", fontStyle: "italic" }}>JCP&amp;L</div>
                <div>
                  <h5>JCP&amp;L Drive Green Program</h5>
                  <p>Up to $350 for eligible Level 2 charger installs.</p>
                  <a href="https://www.jcp-l.com/products-and-services/electric-vehicles" target="_blank" rel="noopener noreferrer">Learn more →</a>
                </div>
              </div>
              <div className="rebate">
                <div className="rebate-logo" style={{ color: "#0A4C8C", fontSize: 10 }}>Atlantic City<br />Electric</div>
                <div>
                  <h5>Atlantic City Electric EV Charger Program</h5>
                  <p>Check EV charger incentive eligibility.</p>
                  <a href="https://www.atlanticcityelectric.com/products-and-services/electric-vehicles" target="_blank" rel="noopener noreferrer">Learn more →</a>
                </div>
              </div>
              <div className="rebate">
                <div className="rebate-logo" style={{ color: "#1B8A4B", fontSize: 10 }}>NJ Clean<br />Energy</div>
                <div>
                  <h5>NJ Clean Energy Program</h5>
                  <p>Statewide incentives may be available.</p>
                  <a href="https://njcleanenergy.com/electrical-vehicles" target="_blank" rel="noopener noreferrer">Learn more →</a>
                </div>
              </div>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                We are not affiliated with these utilities or programs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHARGERS ============ */}
      <section className="chargers dark">
        <div className="wrap">
          <div className="sec-head center">
            <h2>Popular Level 2 Chargers Our Installer Network Supports</h2>
            <p>We can help you get quotes on the most trusted chargers.</p>
          </div>
          <div className="charger-grid">
            {[
              {
                name: "Tesla\nWall Connector",
                feats: ["Up to 48A / 11.5 kW", "Wi-Fi Connected", "Sleek, Compact Design"],
                icon: <><rect x="7" y="3" width="10" height="18" rx="3" /><path d="M12 7v5M10 16h4" /></>,
              },
              {
                name: "ChargePoint\nHome Flex",
                feats: ["Up to 50A / 12 kW", "Smart App Control", "Adjustable Cable"],
                icon: <><rect x="8" y="3" width="8" height="18" rx="4" /><circle cx="12" cy="9" r="2" /></>,
              },
              {
                name: "Wallbox\nPulsar Plus",
                feats: ["Up to 48A / 11.5 kW", "Compact & Powerful", "Wi-Fi & Bluetooth"],
                icon: <><rect x="7" y="5" width="10" height="14" rx="5" /><circle cx="12" cy="12" r="3" /></>,
              },
              {
                name: "Emporia\nEV Charger",
                feats: ["Up to 48A / 11.5 kW", "Energy Monitoring", "Cost Effective"],
                icon: <><rect x="7" y="4" width="10" height="16" rx="2" /><path d="M12 8v4M9 16h6" /></>,
              },
              {
                name: "NEMA 14-50\nOutlet Install",
                feats: ["Level 2 via Adapter", "Flexible Solution", "Ideal for Some EVs"],
                icon: <><circle cx="12" cy="12" r="8" /><path d="M9 9v2M15 9v2M9.5 15h5" /></>,
              },
            ].map((c) => (
              <div className="charger-card" key={c.name}>
                <h4>{c.name.replace("\n", "\n")}</h4>
                <div className="charger-img">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{c.icon}</svg>
                </div>
                <ul className="charger-feats">
                  {c.feats.map((f) => (
                    <li key={f}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="charger-foot">
            <span>Not sure which charger is right for you? We&apos;ll help you choose.</span>
            <a href="#quote" className="btn-ghost-light">Get My Recommendation</a>
          </div>
        </div>
      </section>

      {/* ============ FAQ + ELECTRICIAN (client) ============ */}
      <FaqSection />

      {/* ============ TRUST STRIP ============ */}
      <div className="trust-strip">
        <div className="wrap">
          <div className="strip-grid">
            <div className="strip-item">
              <span className="ic">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
              </span>
              <div><h5>100% Private</h5><p>Your info is never shared.</p></div>
            </div>
            <div className="strip-item">
              <span className="ic">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9.5 12l2 2 3.5-3.5" />
                </svg>
              </span>
              <div><h5>Verified &amp; Screened</h5><p>NJ Electricians</p></div>
            </div>
            <div className="strip-item">
              <span className="ic">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 3h10v18H7z" />
                  <path d="M10 7h4M10 11h4M10 15h2" />
                </svg>
              </span>
              <div><h5>Permit &amp; Code</h5><p>Guidance Included</p></div>
            </div>
            <div className="strip-item">
              <span className="ic">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
                </svg>
              </span>
              <div><h5>5-Star Experience</h5><p>Our goal is your satisfaction</p></div>
            </div>
          </div>
        </div>
      </div>
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
              <h5>For Homeowners</h5>
              <ul>
                <li><a href="#quote">Get a Quote</a></li>
                <li><a href="#cost">Cost Factors</a></li>
                <li><a href="#cost">Rebates &amp; Incentives</a></li>
                <li><a href="#how">How It Works</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>For Electricians</h5>
              <ul>
                <li><a href="#">Join Our Network</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Requirements</a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="foot-col foot-area">
              <h5>Service Area</h5>
              <p className="lead">Proudly serving homeowners across New Jersey.</p>
              <p className="foot-counties">
                Bergen • Hudson • Essex • Union
                <br />
                Middlesex • Morris • Monmouth
                <br />
                Mercer • and nearby areas
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
