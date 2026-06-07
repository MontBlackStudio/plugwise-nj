import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const PAGE_URL = "https://plugwisenj.com/level-2-ev-charger-installation-nj";

export const metadata: Metadata = {
  title: "Level 2 EV Charger Installation NJ | PlugWise NJ",
  description:
    "Level 2 home EV charger installation in New Jersey — a dedicated 240V circuit, panel capacity, hardwired vs. NEMA 14-50, outdoor installs, permits, and a quote scoped from your photos. Work by independent licensed electricians.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "PlugWise NJ",
    title: "Level 2 EV Charger Installation in New Jersey",
    description:
      "What a Level 2 home EV charger installation involves in New Jersey — 240V circuit, panel capacity, permits, and a photo-based quote from independent licensed electricians.",
  },
  twitter: {
    card: "summary",
    title: "Level 2 EV Charger Installation NJ | PlugWise NJ",
    description:
      "NJ Level 2 home EV charger installation — 240V circuit, panel capacity, hardwired vs. outlet, permits, and a quote from photos.",
  },
};

const compare = [
  {
    key: "l1",
    level: "Level 1",
    tag: "Standard outlet",
    volts: "120V",
    circuit: "Existing household outlet",
    points: [
      "Plugs into a regular 120V outlet",
      "Adds range slowly — best as a backup",
      "Often uses an existing outlet after electrical suitability is checked",
      "Best for very low daily mileage or backup charging",
    ],
  },
  {
    key: "l2",
    level: "Level 2",
    tag: "Recommended for home",
    featured: true,
    volts: "240V",
    circuit: "Dedicated 240V circuit",
    points: [
      "Runs on a dedicated 240V circuit",
      "Adds far more range per hour than Level 1",
      "Hardwired or via a 240V outlet",
      "The practical daily-driver home setup",
    ],
  },
];

const scope = [
  "A dedicated 240V circuit sized for your charger",
  "A new breaker in your electrical panel",
  "Appropriately rated wire and conduit for the run",
  "Mounting the charger, or a 240V outlet for plug-in units",
  "The connection (whip) between the circuit and charger",
  "An electrical permit pulled by a licensed electrician",
  "Inspection by your local authority having jurisdiction",
  "Any panel upgrade or load management, if capacity requires it",
];

const decision = [
  { c: "How it connects", hw: "Wired directly to the circuit", out: "Plugs into a 240V outlet (e.g. NEMA 14-50)" },
  { c: "Continuous output", hw: "Supports higher continuous amperage", out: "Limited by the outlet and circuit rating" },
  { c: "Flexibility", hw: "Permanent, fixed location", out: "Charger can be unplugged or moved" },
  { c: "Outdoor / high-power", hw: "Often the preferred choice", out: "Possible with properly rated equipment" },
  { c: "Good fit when", hw: "You want maximum power, cleanly installed", out: "You already have a compatible plug-in charger" },
];

const locations = [
  {
    t: "Attached garage",
    d: "The most common and usually lowest-complexity spot — short runs and easy mounting.",
    icon: <><path d="M4 11l8-6 8 6" /><path d="M6 10v9h12v-9" /><path d="M9 19v-4h6v4" /></>,
  },
  {
    t: "Driveway",
    d: "An exterior-rated install on the garage or house wall facing the parking spot.",
    icon: <><rect x="3" y="11" width="18" height="7" rx="1.5" /><path d="M6 11l1.5-4h9L18 11" /><path d="M7 18v2M17 18v2" /></>,
  },
  {
    t: "Outdoor wall",
    d: "Outdoor-rated equipment and weatherproofing for exposed locations.",
    icon: <><rect x="7" y="4" width="10" height="16" rx="2" /><path d="M12 8v4M9.5 16h5" /></>,
  },
  {
    t: "Detached garage",
    d: "May involve trenching and a sub-panel — typically the most involved scenario.",
    icon: <><path d="M3 10l6-5 6 5" /><path d="M5 9v8h8V9" /><path d="M15 13h6v8h-6" /></>,
  },
];

const send = [
  { t: "Electrical panel photo", d: "Open and labeled, if you can" },
  { t: "Install-spot photo", d: "Where the charger will go" },
  { t: "Panel amperage", d: "Main breaker rating, if known" },
  { t: "Approx. distance", d: "Panel to charger location" },
];

const faqs = [
  {
    q: "How much does Level 2 EV charger installation cost in NJ?",
    a: "It varies widely. A simple install near the panel with adequate capacity is modest, while a panel upgrade, a long run, trenching, or a detached garage can push the price up significantly. There is no single number — the final cost depends on a site-specific electrical review. See our New Jersey EV charger installation cost guide for the drivers and typical scenario ranges.",
  },
  {
    q: "Do I need a 240V outlet for a Level 2 charger?",
    a: "A Level 2 charger needs a 240V supply, but not necessarily an outlet. You can hardwire the charger directly to a dedicated 240V circuit, or have a 240V outlet (such as a NEMA 14-50) installed for a plug-in charger. Both are common — a licensed electrician will recommend the right approach for your charger and panel.",
  },
  {
    q: "Is hardwired better than a NEMA 14-50 outlet?",
    a: "Neither is universally better. Hardwiring supports higher continuous amperage and is often preferred for outdoor or higher-power setups, while a NEMA 14-50 outlet adds flexibility because the charger can be unplugged or moved. The best choice depends on your charger, panel capacity, and install location.",
  },
  {
    q: "Do I need a permit for Level 2 charger installation in New Jersey?",
    a: "Yes. New Jersey requires an electrical permit for Level 2 charger installations, and the work is inspected by your local authority having jurisdiction (AHJ). A licensed electrician pulls the permit and coordinates the inspection as part of a compliant install.",
  },
  {
    q: "Can I install a Level 2 charger outdoors?",
    a: "Yes. Many Level 2 chargers are rated for outdoor use. Outdoor installs may require a weatherproof enclosure, conduit, and a GFCI-protected, code-compliant circuit, and the distance from your panel can add conduit or trenching — which a licensed electrician accounts for in the quote.",
  },
  {
    q: "Do I need a panel upgrade for Level 2 charging?",
    a: "Not always. It depends on your service size, how full your panel is, and your existing loads. Many homes with 200A service and spare capacity need no upgrade, while older or fully loaded panels might. A photo of your panel helps a licensed electrician judge this before quoting.",
  },
  {
    q: "Can rebates reduce Level 2 installation cost?",
    a: "Sometimes. New Jersey utilities have offered EV charging programs that may help with eligible electrical work, but eligibility, amounts, and program status change and are decided by the utility — not by PlugWise, and we don't promise any program will lower your cost. See our PSE&G and JCP&L guides, and confirm current terms directly with your utility.",
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
        { "@type": "ListItem", position: 3, name: "Level 2 EV Charger Installation NJ", item: PAGE_URL },
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

export default function Level2EvChargerInstallationNj() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="level2-page">
        {/* ============ HERO ============ */}
        <header className="hero level2-hero">
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
              <div className="nav-secure level2-nav-link">
                <Link href="/ev-charger-installation-nj">EV Charger Installation NJ →</Link>
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#quote" className="mobile-nav-link primary">Get Quote</a>
              <a href="#compare" className="mobile-nav-link">L1 vs L2</a>
              <a href="#includes" className="mobile-nav-link">What&apos;s Included</a>
              <a href="#options" className="mobile-nav-link">Hardwired vs Outlet</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          </nav>

          <div className="level2-hero-inner">
            <span className="level2-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
              </svg>
              240V home charging
            </span>
            <h1>
              Level 2 EV Charger Installation in{" "}
              <span className="blue">New Jersey</span>
            </h1>
            <p className="level2-hero-sub">
              Level 2 is the practical home-charging upgrade: a dedicated <strong>240V circuit</strong>{" "}
              that charges much faster than a standard 120V outlet, installed by licensed electricians.
              Here is what the work involves — panel capacity, hardwired vs. outlet, permits, and cost
              drivers — plus a quote scoped from your photos.
            </p>

            <div className="level2-spec-strip">
              <div className="level2-spec">
                <span className="level2-spec-k">240V</span>
                <span className="level2-spec-v">Dedicated circuit</span>
              </div>
              <div className="level2-spec">
                <span className="level2-spec-k">Hardwired or 14-50</span>
                <span className="level2-spec-v">Two common setups</span>
              </div>
              <div className="level2-spec">
                <span className="level2-spec-k">Permitted &amp; inspected</span>
                <span className="level2-spec-v">NJ licensed electricians</span>
              </div>
            </div>

            <div className="level2-note" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9.5 12l2 2 3.5-3.5" />
              </svg>
              <span>
                Electrical work is performed by independent licensed electricians. Final scope and
                pricing require a site-specific electrical review.
              </span>
            </div>

            <div className="cta-row level2-cta-row">
              <a href="#quote" className="btn btn-primary">
                Get a Level 2 installation quote
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <Link href="/ev-charger-installation-cost-nj" className="btn btn-outline">
                See installation cost drivers
              </Link>
            </div>
          </div>
        </header>

        {/* ============ WHAT IS A LEVEL 2 CHARGER ============ */}
        <section id="what">
          <div className="wrap">
            <div className="sec-head">
              <h2>What is a Level 2 EV charger?</h2>
              <p>The home charging tier most New Jersey EV owners settle on.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                A Level 2 charger runs on a 240V circuit — the same class of supply as an electric
                range or dryer — instead of a standard 120V household outlet. That higher voltage is
                why Level 2 adds far more range per hour of charging than Level 1. How quickly your car
                actually charges still depends on your vehicle&apos;s onboard charger, its battery
                size, and the amperage of the circuit, so real-world times vary from car to car.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Uses a dedicated 240V circuit sized for the charger — often 40A, 50A, or 60A depending on the equipment and panel capacity
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Can be hardwired to the wall or plugged into a 240V outlet such as a NEMA 14-50
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Installed and connected by an independent licensed electrician, with a permit and inspection
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ LEVEL 1 VS LEVEL 2 ============ */}
        <section className="info-section" id="compare">
          <div className="wrap">
            <div className="sec-head">
              <h2>Level 1 vs. Level 2 charging at home</h2>
              <p>Why most daily drivers move past the standard wall outlet.</p>
            </div>
            <div className="level2-compare">
              {compare.map((c) => (
                <div className={`level2-compare-card ${c.key}${c.featured ? " featured" : ""}`} key={c.key}>
                  <div className="level2-compare-head">
                    <span className="level2-compare-level">{c.level}</span>
                    <span className="level2-compare-tag">{c.tag}</span>
                  </div>
                  <div className="level2-compare-spec">
                    <span className="level2-volt">{c.volts}</span>
                    <span className="level2-circuit">{c.circuit}</span>
                  </div>
                  <ul className="svc-list">
                    {c.points.map((p) => (
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
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Level 2 is much faster than Level 1, but exact charging times depend on your vehicle and
              the circuit amperage — there&apos;s no one-size-fits-all number.
            </div>
          </div>
        </section>

        {/* ============ WHAT A LEVEL 2 INSTALL INCLUDES ============ */}
        <section id="includes">
          <div className="wrap">
            <div className="sec-head">
              <h2>What a Level 2 installation includes</h2>
              <p>The typical pieces of a code-compliant home install — your exact scope depends on a site review.</p>
            </div>
            <ul className="level2-scope">
              {scope.map((item) => (
                <li className="level2-scope-item" key={item}>
                  <span className="level2-scope-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ PANEL CAPACITY & 240V CIRCUIT ============ */}
        <section className="info-section" id="panel">
          <div className="wrap">
            <div className="sec-head">
              <h2>Panel capacity and a dedicated 240V circuit</h2>
              <p>Your panel has to deliver a dedicated 240V circuit safely and to code.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                A Level 2 charger needs its own dedicated 240V circuit and breaker. Whether your
                existing panel can host that depends on your service size and how much capacity is
                already in use. Older or fully loaded panels may need an upgrade or a load-management
                device — which is the single biggest swing in a Level 2 install&apos;s cost.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  A new double-pole breaker feeds the dedicated 240V circuit
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Adequate spare capacity may avoid a panel upgrade entirely
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Load management / EVEMS can sometimes manage available capacity and help avoid a panel upgrade, subject to electrician review
                </li>
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="6" y="3" width="12" height="18" rx="2" />
                  <path d="M10 7h4M10 11h4M11 15l-1 3h4l-1-3" />
                </svg>
                Panel-upgrade risk is a major cost factor — see how it works in our{" "}
                <Link href="/ev-charger-installation-cost-nj" className="level2-inline-link">
                  EV charger installation cost guide
                </Link>
                .
              </div>
            </div>
          </div>
        </section>

        {/* ============ HARDWIRED VS NEMA 14-50 DECISION MATRIX ============ */}
        <section id="options">
          <div className="wrap">
            <div className="sec-head">
              <h2>Hardwired charger vs. NEMA 14-50 outlet</h2>
              <p>Two common ways to set up Level 2 — compared side by side.</p>
            </div>
            <div className="level2-matrix">
              <div className="level2-matrix-head" aria-hidden="true">
                <span></span>
                <span className="level2-mh hw">Hardwired</span>
                <span className="level2-mh out">NEMA 14-50 outlet</span>
              </div>
              {decision.map((row) => (
                <div className="level2-matrix-row" key={row.c}>
                  <span className="level2-matrix-c">{row.c}</span>
                  <span className="level2-matrix-v">
                    <span className="level2-matrix-tag hw" aria-hidden="true">Hardwired</span>
                    {row.hw}
                  </span>
                  <span className="level2-matrix-v">
                    <span className="level2-matrix-tag out" aria-hidden="true">NEMA 14-50</span>
                    {row.out}
                  </span>
                </div>
              ))}
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              There&apos;s no universally &ldquo;better&rdquo; option — a licensed electrician
              recommends the right setup for your charger, panel, and location.{" "}
              <Link href="/tesla-wall-connector-installation-nj" className="level2-inline-link">
                Installing a Tesla Wall Connector? See our Tesla install guide →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ INSTALL LOCATIONS ============ */}
        <section className="info-section" id="locations">
          <div className="wrap">
            <div className="sec-head">
              <h2>Garage, driveway, outdoor &amp; detached-garage installs</h2>
              <p>Where the charger goes shapes the run, the equipment, and the scope.</p>
            </div>
            <div className="level2-loc-grid">
              {locations.map((loc) => (
                <div className="level2-loc" key={loc.t}>
                  <span className="level2-loc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {loc.icon}
                    </svg>
                  </span>
                  <h3>{loc.t}</h3>
                  <p>{loc.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PERMITS & INSPECTION ============ */}
        <section id="permits">
          <div className="wrap">
            <div className="sec-head">
              <h2>Permits and inspection in New Jersey</h2>
              <p>A Level 2 install is permitted, inspected electrical work.</p>
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
                  A licensed electrician pulls the permit and coordinates inspection
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Installs follow the National Electrical Code and NJ requirements
                </li>
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11l3 3 8-8" />
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                </svg>
                More on permits and code on our{" "}
                <Link href="/ev-charger-installation-nj" className="level2-inline-link">
                  EV charger installation in NJ
                </Link>{" "}
                hub.
              </div>
            </div>
          </div>
        </section>

        {/* ============ COST DRIVERS ============ */}
        <section className="info-section" id="cost">
          <div className="wrap">
            <div className="sec-head">
              <h2>Cost drivers for Level 2 installation</h2>
              <p>Every home is different — these conditions move the price most.</p>
            </div>
            <div className="panel">
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Panel capacity and whether an upgrade or load management is needed
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Distance from the panel to the charger, and the routing path
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Indoor vs. outdoor, weatherproofing, and trenching to detached structures
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Hardwired vs. outlet, circuit amperage, and permit fees
                </li>
              </ul>
              <p className="level2-link-row">
                <Link href="/ev-charger-installation-cost-nj" className="level2-inline-link">
                  See the full Level 2 cost breakdown and typical scenarios →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ============ REBATES & PROGRAM CAVEATS ============ */}
        <section id="rebates">
          <div className="wrap">
            <div className="sec-head">
              <h2>Utility rebates and program caveats</h2>
              <p>Incentives can help — but they change, and they&apos;re decided by the utility.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                New Jersey utilities have offered EV charging programs that may help with eligible
                electrical work for some customers. Eligibility, amounts, and program status change
                over time and are set by each utility — so we don&apos;t quote utility figures or
                promise any program will lower your cost. Which program applies depends on your
                utility territory.
              </p>
              <div className="level2-rebate-links">
                <Link href="/pseg-ev-charger-rebate" className="level2-rebate-link">
                  <span className="level2-rebate-name">PSE&amp;G EV charger rebate guide</span>
                  <span className="level2-rebate-go">Read guide →</span>
                </Link>
                <Link href="/jcpl-ev-charger-rebate" className="level2-rebate-link">
                  <span className="level2-rebate-name">JCP&amp;L EV charger rebate guide</span>
                  <span className="level2-rebate-go">Read guide →</span>
                </Link>
              </div>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                PlugWise NJ is not affiliated with PSE&amp;G, JCP&amp;L, or any utility or rebate program.
              </div>
            </div>
          </div>
        </section>

        {/* ============ HOW WE SCOPE FROM PHOTOS ============ */}
        <section className="info-section" id="how">
          <div className="wrap">
            <div className="sec-head">
              <h2>How PlugWise scopes a Level 2 quote from photos</h2>
              <p>A few photos turn a phone guess into a quote that reflects your actual home.</p>
            </div>
            <div className="level2-send">
              {send.map((s, i) => (
                <div className="level2-send-item" key={s.t}>
                  <span className="level2-send-num">{i + 1}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 11l3 3 8-8" />
                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
              </svg>
              We scope the job from what you send so independent licensed electricians can quote — a
              final quote still requires a site-specific electrical review.
            </div>
          </div>
        </section>

        {/* ============ CTA / QUOTE FORM ============ */}
        <section className="level2-quote-section" id="quote-section">
          <div className="wrap">
            <div className="level2-quote-layout">
              <div className="level2-quote-copy">
                <h2>Get your Level 2 EV charger installation quote</h2>
                <p>
                  Share a couple of photos and a few details, and we&apos;ll scope your Level 2 install
                  so independent licensed NJ electricians can quote your actual home — panel, circuit,
                  distance, and location included.
                </p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Scoped from your real panel and install location
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
              <div className="level2-quote-wrap">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>Level 2 EV charger installation FAQ</h2>
              <p>Common questions from New Jersey homeowners going Level 2.</p>
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
            <div className="level2-disclaimer">
              <span className="level2-disclaimer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9.5 12l2 2 3.5-3.5" />
                </svg>
              </span>
              <div>
                <h3>How PlugWise works</h3>
                <p>
                  PlugWise NJ is a quote coordination platform — we do not perform electrical work.
                  Electrical work is performed by independent licensed electricians/contractors where
                  available, and a final quote requires a site-specific electrical review. We are not
                  affiliated with any utility or rebate program; charging speed depends on your
                  vehicle, battery, and circuit. Availability varies by location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA BAND ============ */}
        <section className="chargers dark">
          <div className="wrap">
            <div className="charger-foot svc-cta">
              <span>Ready for Level 2 charging at home? Get a quote scoped from your photos.</span>
              <a href="#quote" className="btn btn-primary">Get My EV Charger Quote</a>
            </div>
            <div className="charger-foot level2-cta-sub">
              <Link href="/ev-charger-installation-nj" className="btn-ghost-light">
                EV Charger Installation in NJ
              </Link>
              <Link href="/ev-charger-installation-cost-nj" className="btn-ghost-light">
                Installation Cost in NJ
              </Link>
              <Link href="/pseg-ev-charger-rebate" className="btn-ghost-light">
                PSE&amp;G Rebate Guide
              </Link>
              <Link href="/jcpl-ev-charger-rebate" className="btn-ghost-light">
                JCP&amp;L Rebate Guide
              </Link>
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
                performed by independent licensed electricians. Availability varies by location.
              </p>
            </div>
            <div className="foot-col">
              <h5>On This Page</h5>
              <ul>
                <li><a href="#compare">L1 vs L2</a></li>
                <li><a href="#includes">What&apos;s Included</a></li>
                <li><a href="#options">Hardwired vs Outlet</a></li>
                <li><a href="#cost">Cost Drivers</a></li>
                <li><a href="#quote">Get a Quote</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Explore</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ev-charger-installation-nj">EV Charger Installation NJ</Link></li>
                <li><Link href="/ev-charger-installation-cost-nj">Installation Cost in NJ</Link></li>
                <li><Link href="/pseg-ev-charger-rebate">PSE&amp;G Rebate Guide</Link></li>
                <li><Link href="/jcpl-ev-charger-rebate">JCP&amp;L Rebate Guide</Link></li>
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
