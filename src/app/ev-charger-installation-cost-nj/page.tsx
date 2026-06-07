import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const PAGE_URL = "https://plugwisenj.com/ev-charger-installation-cost-nj";

export const metadata: Metadata = {
  title: "EV Charger Installation Cost in New Jersey | PlugWise NJ",
  description:
    "What drives Level 2 EV charger installation cost in NJ — panel capacity, distance from the panel, permits and inspection, and outdoor or detached-garage installs. See typical scenarios and get a quote from photos.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "PlugWise NJ",
    title: "EV Charger Installation Cost in New Jersey",
    description:
      "Understand the real cost drivers behind Level 2 EV charger installation in New Jersey — panel capacity, distance, permits, and outdoor installs — then get a quote scoped from your photos.",
  },
  twitter: {
    card: "summary",
    title: "EV Charger Installation Cost in New Jersey | PlugWise NJ",
    description:
      "Level 2 EV charger installation cost drivers in NJ — panel capacity, distance, permits, outdoor installs — plus a photo-based quote path.",
  },
};

const scenarios = [
  {
    tier: "Simple",
    range: "$400–$900",
    sub: "Charger near the panel, adequate capacity, clean garage install",
    points: [
      "Charger mounts within a short run of the panel",
      "Existing service has spare capacity — no upgrade",
      "Indoor garage wall with easy access",
      "Hardwire or NEMA 14-50 on a new dedicated circuit",
    ],
  },
  {
    tier: "Standard",
    range: "$900–$1,800",
    sub: "Moderate distance, conduit routing, permit and inspection",
    featured: true,
    points: [
      "Longer run with surface conduit or fishing through walls",
      "New dedicated 240V circuit and breaker",
      "Permit pulled and inspection coordinated",
      "Some weatherproofing if partly outdoors",
    ],
  },
  {
    tier: "Complex",
    range: "$1,800–$4,000+",
    sub: "Panel upgrade, trenching, detached garage, or utility-side work",
    points: [
      "Panel or service upgrade to add capacity",
      "Trenching to a detached garage or far wall",
      "Outdoor-rated equipment and weatherproofing",
      "Possible utility-side coordination",
    ],
  },
];

// Cost-driver matrix. `level` maps to a color-coded impact pill.
const drivers = [
  { d: "Panel capacity / service upgrade", impact: "High", level: "high", note: "A full panel or service upgrade is the single biggest cost swing." },
  { d: "Trenching to a detached structure", impact: "High", level: "high", note: "Underground runs to a detached garage add real labor and materials." },
  { d: "Distance from panel to charger", impact: "Medium", level: "med", note: "More wire, conduit, and labor as the run gets longer." },
  { d: "Outdoor install / weatherproofing", impact: "Medium", level: "med", note: "Outdoor-rated enclosures and conduit add to the scope." },
  { d: "Charger type & circuit size", impact: "Low–Med", level: "med", note: "Hardwired vs. plug-in and 40A vs. 60A change parts more than brand." },
  { d: "Permits & inspection", impact: "Required", level: "low", note: "Permit fees and inspection are part of compliant NJ work." },
  { d: "Wall finish & routing", impact: "Variable", level: "var", note: "Finished walls and tricky cable paths mean more labor." },
];

const riskRaises = [
  "Older 100A (or smaller) main service",
  "Breaker panel already full — no open slots",
  "Heavy existing loads (electric range, dryer, central AC)",
  "Targeting a higher-output 60A charger circuit",
];

const riskLowers = [
  "200A service with available capacity",
  "Open breaker spaces in the panel",
  "Modest existing electrical load",
  "A 40A circuit covers your daily charging",
  "A load-management device to share an existing circuit",
];

const phoneGuess = [
  "Guesses at your panel capacity sight-unseen",
  "Can't see the run from panel to parking spot",
  "Misses outdoor, trenching, or wall-finish work",
  "A vague range that changes once they arrive",
  "Surprise change-orders on install day",
];

const photoQuote = [
  "Scoped from a photo of your actual panel",
  "Run distance read from your install-spot photo",
  "Outdoor and trenching flagged up front",
  "Fewer surprises and clearer expectations",
  "Compare independent licensed NJ electricians",
];

const faqs = [
  {
    q: "How much does EV charger installation cost in NJ?",
    a: "As a broad, educational guide, many New Jersey Level 2 installs run from a few hundred dollars for a simple install near the panel to several thousand when a panel upgrade, trenching, or a detached garage is involved. These are common market ranges, not a PlugWise price or guarantee — your final cost depends on site-specific electrical conditions and local permit requirements. The only way to know your number is a quote based on your actual panel and install location.",
  },
  {
    q: "What makes a Level 2 charger installation more expensive?",
    a: "The biggest cost drivers are a panel or service upgrade, a long run from the panel, trenching to a detached structure, and outdoor weatherproofing. Charger brand matters far less than these conditions. A photo of your panel and install spot lets an electrician scope these accurately instead of guessing.",
  },
  {
    q: "Does a Tesla Wall Connector cost more to install?",
    a: "Installation labor for a Tesla Wall Connector is broadly similar to other hardwired Level 2 chargers — the cost is driven by your panel, run distance, and install conditions, not the brand. The main difference is the price of the unit itself. The same photo-based scoping applies to any Level 2 charger.",
  },
  {
    q: "Do I need a panel upgrade for a home EV charger?",
    a: "Not always. It depends on your service size, how full your panel is, and your existing loads. Many homes with 200A service and spare capacity need no upgrade, while older or fully loaded panels might. Sharing a photo of your panel helps a licensed electrician judge this and include any upgrade in the quote.",
  },
  {
    q: "Can rebates lower my EV charger installation cost?",
    a: "Possibly. New Jersey utilities such as PSE&G have offered make-ready programs that may help with eligible electrical work, but eligibility, amounts, and terms change and are decided by the utility — not by PlugWise. We can't promise a rebate will reduce your cost. See our PSE&G EV charger rebate guide and confirm current terms directly with your utility.",
  },
  {
    q: "Can PlugWise give me a quote from photos?",
    a: "Yes. Share photos of your electrical panel and the spot where you want the charger, plus a few details, and we scope the job so independent licensed NJ electricians can prepare quotes that reflect your actual home — often without an upfront in-person visit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://plugwisenj.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "EV Charger Installation NJ",
          item: "https://plugwisenj.com/ev-charger-installation-nj",
        },
        { "@type": "ListItem", position: 3, name: "EV Charger Installation Cost in NJ", item: PAGE_URL },
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

export default function EvChargerInstallationCostNj() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="cost-page">
        {/* ============ HERO ============ */}
        <header className="hero cost-hero">
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
              <div className="nav-secure cost-nav-link">
                <Link href="/ev-charger-installation-nj">EV Charger Installation NJ →</Link>
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#quote" className="mobile-nav-link primary">Get Quote</a>
              <a href="#drivers" className="mobile-nav-link">Cost Drivers</a>
              <a href="#scenarios" className="mobile-nav-link">Scenarios</a>
              <a href="#panel" className="mobile-nav-link">Panel Risk</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          </nav>

          <div className="cost-hero-inner">
            <span className="cost-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9.5 12l2 2 3.5-3.5" />
              </svg>
              NJ Level 2 charger installation
            </span>
            <h1>
              EV Charger Installation Cost in{" "}
              <span className="blue">New Jersey</span>
            </h1>
            <p className="cost-hero-sub">
              What you pay depends on your <strong>panel capacity</strong>, the{" "}
              <strong>distance</strong> from your panel to the charger, the{" "}
              <strong>charger type</strong>, <strong>outdoor</strong> and weatherproofing needs,{" "}
              <strong>trenching</strong>, and <strong>permits</strong>. Here is how those drivers
              move the number — and how to get a real quote from photos.
            </p>

            <div className="cost-strip">
              {scenarios.map((s) => (
                <a className="cost-strip-item" href="#scenarios" key={s.tier} aria-label={`${s.tier} install, ${s.range}`}>
                  <span className="cost-strip-tier">{s.tier}</span>
                  <span className="cost-strip-range">{s.range}</span>
                </a>
              ))}
            </div>

            <div className="cost-note" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              <span>
                PlugWise NJ coordinates quotes from independent licensed electricians — we don&apos;t
                set prices. The ranges on this page are broad market education, not a PlugWise quote.
                Exact pricing requires a site-specific electrical review.
              </span>
            </div>

            <div className="cta-row cost-cta-row">
              <a href="#quote" className="btn btn-primary">
                Get a quote from photos
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <Link href="/pseg-ev-charger-rebate" className="btn btn-outline">See PSE&amp;G rebate guide</Link>
            </div>
          </div>
        </header>

        {/* ============ WHAT AFFECTS COST — DRIVER MATRIX ============ */}
        <section id="drivers">
          <div className="wrap">
            <div className="sec-head">
              <h2>What affects EV charger installation cost in NJ</h2>
              <p>The same handful of conditions explain most of the price difference between two homes.</p>
            </div>
            <div className="cost-matrix">
              <div className="cost-matrix-head" aria-hidden="true">
                <span>Cost driver</span>
                <span>Impact</span>
                <span>Why it moves the price</span>
              </div>
              {drivers.map((row) => (
                <div className="cost-matrix-row" key={row.d}>
                  <span className="cost-driver">{row.d}</span>
                  <span className={`cost-impact cost-impact-${row.level}`}>{row.impact}</span>
                  <span className="cost-driver-note">{row.note}</span>
                </div>
              ))}
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Most of these are visible in a photo of your panel and install spot — which is exactly
              how a photo quote stays accurate.{" "}
              <Link href="/level-2-ev-charger-installation-nj" className="cost-inline-link">
                New to Level 2? Start with our installation guide →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ SIMPLE / STANDARD / COMPLEX SCENARIOS ============ */}
        <section className="info-section" id="scenarios">
          <div className="wrap">
            <div className="sec-head">
              <h2>Simple vs. standard vs. complex installs</h2>
              <p>Typical scenarios to set expectations — not guaranteed prices.</p>
            </div>
            <div className="cost-scenarios">
              {scenarios.map((s) => (
                <div className={`cost-scenario${s.featured ? " featured" : ""}`} key={s.tier}>
                  {s.featured ? <span className="cost-scenario-flag">Most common</span> : null}
                  <span className="cost-tier">{s.tier} install</span>
                  <span className="cost-range">{s.range}</span>
                  <p className="cost-scenario-sub">{s.sub}</p>
                  <ul className="svc-list">
                    {s.points.map((p) => (
                      <li key={p}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="cost-caveat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              <span>
                These are broad, educational market ranges — <strong>not a PlugWise quote or
                guarantee</strong>. Your final price depends on site-specific electrical conditions
                and local permit requirements. Get a quote scoped from your actual panel and install
                location.
              </span>
            </div>
            <p className="cost-link-row">
              <Link href="/tesla-wall-connector-installation-nj" className="cost-inline-link">
                Installing a Tesla Wall Connector? See our Tesla Wall Connector installation guide →
              </Link>
            </p>
          </div>
        </section>

        {/* ============ PANEL CAPACITY & UPGRADE RISK METER ============ */}
        <section id="panel">
          <div className="wrap">
            <div className="sec-head">
              <h2>Panel capacity and panel-upgrade risk</h2>
              <p>A panel or service upgrade is the biggest single cost swing — here is what tips the odds.</p>
            </div>
            <div className="cost-risk">
              <div className="cost-risk-meter">
                <span className="cost-risk-label-row">
                  <span>Lower upgrade risk</span>
                  <span>Higher upgrade risk</span>
                </span>
                <div className="cost-risk-track" aria-hidden="true">
                  <span className="cost-risk-zone z-low">Low</span>
                  <span className="cost-risk-zone z-med">Moderate</span>
                  <span className="cost-risk-zone z-high">High</span>
                </div>
                <p className="cost-risk-help">
                  A panel upgrade can add meaningfully to a complex install. Whether you need one is
                  about your service size, spare capacity, and existing loads — not the charger brand.
                </p>
              </div>
              <div className="cost-risk-cols">
                <div className="cost-risk-col raises">
                  <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 14l5-5 5 5" />
                    </svg>
                    Raises your risk
                  </h3>
                  <ul>
                    {riskRaises.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="cost-risk-col lowers">
                  <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 10l5 5 5-5" />
                    </svg>
                    Lowers your risk
                  </h3>
                  <ul>
                    {riskLowers.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="6" y="3" width="12" height="18" rx="2" />
                <path d="M10 7h4M10 11h4M11 15l-1 3h4l-1-3" />
              </svg>
              A clear photo of your panel and its labeling lets a licensed electrician judge upgrade
              risk before quoting — no guesswork.
            </div>
          </div>
        </section>

        {/* ============ DISTANCE ============ */}
        <section className="info-section" id="distance">
          <div className="wrap">
            <div className="sec-head">
              <h2>Distance from panel to charger location</h2>
              <p>Every extra foot of run adds wire, conduit, and labor.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                A charger a few feet from the panel is quick to wire. As the run grows — across a
                garage, up through finished walls, or out to a driveway — material and labor climb,
                and the routing path matters as much as the raw footage.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Short runs near the panel are the cheapest path to Level 2 charging
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Longer runs may need surface conduit or fishing cable through walls
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Heavier-gauge wire is sometimes used on long runs to limit voltage drop
                </li>
              </ul>
              <div className="area-tags cost-dist-tags">
                <span className="area-tag">Under 15 ft</span>
                <span className="area-tag">15–30 ft</span>
                <span className="area-tag">30–50 ft</span>
                <span className="area-tag">50–75 ft</span>
                <span className="area-tag">Over 75 ft</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OUTDOOR / TRENCHING / DETACHED ============ */}
        <section id="outdoor">
          <div className="wrap">
            <div className="sec-head">
              <h2>Outdoor installs, trenching, and detached garages</h2>
              <p>Getting power outside or to a separate structure is where complex installs earn their name.</p>
            </div>
            <div className="info-grid">
              <div className="panel">
                <h3 className="panel-title">Outdoor &amp; weatherproofing</h3>
                <p className="panel-sub">Exposed installs need equipment and methods rated for the elements.</p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Outdoor-rated charger or a weatherproof enclosure
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Conduit and weatherproof fittings for exposed runs
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    A GFCI-protected, code-compliant exterior circuit
                  </li>
                </ul>
              </div>
              <div className="panel">
                <h3 className="panel-title">Trenching to a detached garage</h3>
                <p className="panel-sub">Underground runs to a separate structure add the most labor.</p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Trenching and burying conduit at code depth
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Possibly a sub-panel in the detached structure
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Restoring driveway, walkway, or landscaping over the trench
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PERMITS & INSPECTION ============ */}
        <section className="info-section" id="permits">
          <div className="wrap">
            <div className="sec-head">
              <h2>Permits and inspection in New Jersey</h2>
              <p>A compliant Level 2 install is permitted and inspected work — budget for it.</p>
            </div>
            <div className="panel">
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  New Jersey requires an electrical permit for Level 2 charger installs
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Work is inspected by your local authority having jurisdiction (AHJ)
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Permit fees vary by municipality and are part of a compliant quote
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  A licensed electrician pulls the permit and coordinates inspection
                </li>
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11l3 3 8-8" />
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                </svg>
                See the permit and code overview on our{" "}
                <Link href="/ev-charger-installation-nj" className="cost-inline-link">
                  EV charger installation in NJ
                </Link>{" "}
                hub.
              </div>
            </div>
          </div>
        </section>

        {/* ============ UTILITY PROGRAMS & NET COST ============ */}
        <section id="rebates">
          <div className="wrap">
            <div className="sec-head">
              <h2>How PSE&amp;G, JCP&amp;L &amp; utility programs may affect your net cost</h2>
              <p>Incentives can change your out-of-pocket — but they are decided by the utility, not by PlugWise.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                New Jersey utilities such as PSE&amp;G and JCP&amp;L have offered EV charger programs
                for eligible residential customers. Some are structured as make-ready help toward
                eligible electrical work rather than cash back on the charger. Eligibility, amounts,
                and program terms change over time and are set by each utility — so we don&apos;t
                quote utility figures or promise any program will lower your cost.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Confirm current eligibility, amounts, and terms directly with your utility
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Think in terms of net cost: installation price minus any incentive you actually qualify for
                </li>
              </ul>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                PlugWise NJ is not affiliated with PSE&amp;G, JCP&amp;L, or any utility or rebate program.
              </div>
              <p className="cost-link-row">
                <Link href="/pseg-ev-charger-rebate" className="cost-inline-link">
                  Read our PSE&amp;G EV charger rebate guide →
                </Link>
              </p>
              <p className="cost-link-row">
                <Link href="/jcpl-ev-charger-rebate" className="cost-inline-link">
                  Read our JCP&amp;L EV charger rebate guide →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ============ PHOTO QUOTE VS PHONE GUESS ============ */}
        <section className="info-section" id="why-photos">
          <div className="wrap">
            <div className="sec-head">
              <h2>Why a quote from photos beats a phone guess</h2>
              <p>You can&apos;t price what you can&apos;t see. Photos turn a guess into a real scope.</p>
            </div>
            <div className="cost-compare">
              <div className="cost-col bad">
                <h3>
                  <span className="cost-col-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                  </span>
                  Phone or generic online estimate
                </h3>
                <ul>
                  {phoneGuess.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="cost-col good">
                <h3>
                  <span className="cost-col-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  PlugWise photo quote
                </h3>
                <ul>
                  {photoQuote.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA / QUOTE FORM ============ */}
        <section className="cost-quote-section" id="quote-section">
          <div className="wrap">
            <div className="cost-quote-layout">
              <div className="cost-quote-copy">
                <h2>Get your EV charger installation quote from photos</h2>
                <p>
                  Skip the phone guesswork. Share a couple of photos and a few details, and we&apos;ll
                  scope your Level 2 install so independent licensed NJ electricians can quote your
                  actual home — drivers, distance, permits and all.
                </p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Quotes scoped from your real panel and install location
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Independent licensed electricians — permit &amp; inspection handled by them
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    No charge to request a quote, no obligation
                  </li>
                </ul>
              </div>
              <div className="cost-quote-wrap">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>EV charger installation cost FAQ</h2>
              <p>Straight answers to the cost questions NJ homeowners ask most.</p>
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

        {/* ============ DISCLAIMER ============ */}
        <section id="disclaimer">
          <div className="wrap">
            <div className="cost-disclaimer">
              <span className="cost-disclaimer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v5M12 16h.01" />
                </svg>
              </span>
              <div>
                <h3>About these cost ranges</h3>
                <p>
                  All figures on this page are broad, educational market ranges for general guidance —
                  not a PlugWise quote, estimate, or guarantee. Actual cost depends on site-specific
                  electrical conditions and local permit requirements. PlugWise NJ coordinates quotes
                  from independent licensed electricians/contractors where available and is not
                  affiliated with any utility or rebate program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA BAND ============ */}
        <section className="chargers dark">
          <div className="wrap">
            <div className="charger-foot svc-cta">
              <span>Stop guessing at the price — get a quote scoped from your photos.</span>
              <a href="#quote" className="btn btn-primary">Get My EV Charger Quote</a>
            </div>
            <div className="charger-foot cost-cta-sub">
              <Link href="/ev-charger-installation-nj" className="btn-ghost-light">
                EV Charger Installation in NJ
              </Link>
              <Link href="/pseg-ev-charger-rebate" className="btn-ghost-light">
                PSE&amp;G Rebate Guide
              </Link>
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
                PlugWise is a lead generation and quote coordination platform. Electrical work is
                performed by independent licensed electricians. Cost ranges are educational only.
                Availability varies by location.
              </p>
            </div>
            <div className="foot-col">
              <h5>On This Page</h5>
              <ul>
                <li><a href="#drivers">Cost Drivers</a></li>
                <li><a href="#scenarios">Install Scenarios</a></li>
                <li><a href="#panel">Panel Upgrade Risk</a></li>
                <li><a href="#why-photos">Photo Quotes</a></li>
                <li><a href="#quote">Get a Quote</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Explore</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ev-charger-installation-nj">EV Charger Installation NJ</Link></li>
                <li><Link href="/pseg-ev-charger-rebate">PSE&amp;G Rebate Guide</Link></li>
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
