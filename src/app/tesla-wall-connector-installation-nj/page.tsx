import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const PAGE_URL = "https://plugwisenj.com/tesla-wall-connector-installation-nj";

export const metadata: Metadata = {
  title: "Tesla Wall Connector Installation NJ | PlugWise NJ",
  description:
    "Tesla Wall Connector installation in New Jersey — a hardwired Level 2 setup on a dedicated 240V circuit, panel capacity, outdoor placement, permits, and a quote scoped from your photos. Independent licensed electricians; not affiliated with Tesla.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "PlugWise NJ",
    title: "Tesla Wall Connector Installation in New Jersey",
    description:
      "What a Tesla Wall Connector installation involves in NJ — dedicated 240V circuit, panel capacity, hardwired setup, permits, and a photo-based quote from independent licensed electricians. PlugWise is not affiliated with Tesla.",
  },
  twitter: {
    card: "summary",
    title: "Tesla Wall Connector Installation NJ | PlugWise NJ",
    description:
      "NJ Tesla Wall Connector installation — 240V dedicated circuit, panel capacity, hardwired, permits, and a quote from photos. Independent platform, not affiliated with Tesla.",
  },
};

const ready = [
  "A dedicated 240V circuit can be routed to your parking spot",
  "Your panel has spare capacity — or you're open to an upgrade or load management",
  "A wall or sturdy surface near the parking spot for mounting",
  "An indoor spot, or an outdoor-rated location with weatherproofing",
  "You're ready for a permitted, inspected install by a licensed electrician",
  "You can share photos of your panel and the install location",
];

const setups = [
  {
    name: "Wall Connector",
    tag: "Hardwired Level 2",
    featured: true,
    points: [
      "Permanently hardwired to a dedicated 240V circuit",
      "Supports higher continuous amperage when the circuit is sized for it",
      "Clean, fixed install — typically wall-mounted",
      "Built for everyday home charging",
    ],
  },
  {
    name: "Mobile Connector",
    tag: "Plug-in / portable",
    points: [
      "Plugs into an outlet instead of being hardwired",
      "Portable — handy for travel or as a backup",
      "Continuous output is lower than a hardwired setup",
      "Needs a suitable 240V outlet for Level 2 speeds",
    ],
  },
  {
    name: "NEMA 14-50 outlet",
    tag: "240V outlet",
    points: [
      "A 240V outlet that a plug-in connector can use",
      "Flexible — the connector can be unplugged or moved",
      "Output is limited by the outlet and circuit rating",
      "Itself a permitted, inspected electrical install",
    ],
  },
];

const path = [
  {
    n: "1",
    t: "Know your service size",
    d: "Homes are commonly 100A or 200A. A 200A service with spare capacity is the most straightforward starting point.",
    tone: "neutral",
  },
  {
    n: "2",
    t: "Check spare capacity",
    d: "Open breaker slots and your existing loads decide how much headroom you have for a new circuit.",
    tone: "neutral",
  },
  {
    n: "3a",
    t: "Enough capacity",
    d: "A licensed electrician adds a dedicated 240V circuit and breaker sized for the Wall Connector.",
    tone: "good",
  },
  {
    n: "3b",
    t: "Not enough capacity",
    d: "A panel or service upgrade — or a load-management device — makes room. This is the biggest cost swing.",
    tone: "warn",
  },
  {
    n: "4",
    t: "Set the amperage to code",
    d: "The Wall Connector's maximum amperage is configured to the installed circuit and breaker, safely and to code.",
    tone: "neutral",
  },
];

const send = [
  {
    t: "Your electrical panel",
    d: "A clear photo of the open panel and its labels, plus the main breaker rating if you know it.",
    icon: <><rect x="6" y="3" width="12" height="18" rx="2" /><path d="M10 7h4M10 11h4M11 15l-1 3h4l-1-3" /></>,
  },
  {
    t: "The install location",
    d: "Where you want the Wall Connector mounted, and your parking spot.",
    icon: <><rect x="8" y="4" width="8" height="14" rx="2" /><path d="M12 8v3M10 18h4" /></>,
  },
  {
    t: "The run between them",
    d: "Roughly how far the charger is from the panel, and whether it's indoor or outdoor.",
    icon: <><path d="M4 12h16" /><path d="M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3" /></>,
  },
  {
    t: "Any obstacles",
    d: "Finished walls, a detached garage, or anything that complicates the cable route.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></>,
  },
];

const faqs = [
  {
    q: "How much does Tesla Wall Connector installation cost in NJ?",
    a: "There is no single number. Installing a Wall Connector is a hardwired Level 2 job, so the cost is driven by the same conditions as any Level 2 install — panel capacity, the run distance, indoor vs. outdoor work, permits, and whether a panel upgrade or load management is needed — not by the brand. Your final price depends on a site-specific electrical review. See our New Jersey EV charger installation cost guide for the drivers and typical scenario ranges.",
  },
  {
    q: "Do I need a permit to install a Tesla Wall Connector in New Jersey?",
    a: "Yes. New Jersey requires an electrical permit for Level 2 charger installations, including a hardwired Wall Connector, and the work is inspected by your local authority having jurisdiction (AHJ). A licensed electrician pulls the permit and coordinates the inspection.",
  },
  {
    q: "Does a Tesla Wall Connector need a 240V circuit?",
    a: "Yes. The Wall Connector is a Level 2 charger, so it needs a dedicated 240V circuit. It is hardwired to that circuit rather than plugged into an outlet, and the circuit and breaker are sized by a licensed electrician for your installation.",
  },
  {
    q: "Can a Tesla Wall Connector be installed outdoors?",
    a: "Yes. The Wall Connector is rated for indoor and outdoor use. An outdoor location may still require weatherproof methods, conduit, and a code-compliant circuit, and the distance from your panel can add conduit or trenching — which a licensed electrician accounts for in the quote.",
  },
  {
    q: "Do I need a panel upgrade for a Tesla charger?",
    a: "Not always. It depends on your service size, how full your panel is, and your existing loads. Many homes with 200A service and spare capacity need no upgrade, while older or fully loaded panels might. A photo of your panel helps a licensed electrician judge this before quoting.",
  },
  {
    q: "Is a Tesla Wall Connector better than a NEMA 14-50 outlet?",
    a: "They are different approaches rather than better or worse. A Wall Connector is hardwired and supports higher continuous amperage for a clean, permanent install, while a NEMA 14-50 outlet works with a plug-in connector and adds flexibility because it can be unplugged. The right choice depends on your charger, panel capacity, and location — a licensed electrician can advise.",
  },
  {
    q: "Can rebates reduce Tesla charger installation cost?",
    a: "Sometimes. New Jersey utilities have offered EV charging programs that may help with eligible electrical work, but eligibility, amounts, and program status change and are decided by the utility — not by PlugWise, and we don't promise any program will lower your cost. See our PSE&G and JCP&L guides and confirm current terms directly with your utility.",
  },
  {
    q: "Is PlugWise affiliated with Tesla?",
    a: "No. PlugWise NJ is an independent EV charger quote coordination platform. We are not Tesla, we are not affiliated with, endorsed by, or certified by Tesla, and we don't sell Tesla hardware. We help you scope the installation from photos and connect with independent licensed electricians.",
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
        { "@type": "ListItem", position: 3, name: "Tesla Wall Connector Installation NJ", item: PAGE_URL },
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

export default function TeslaWallConnectorInstallationNj() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="tesla-page">
        {/* ============ HERO ============ */}
        <header className="hero tesla-hero">
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
              <div className="nav-secure tesla-nav-link">
                <Link href="/level-2-ev-charger-installation-nj">Level 2 Installation →</Link>
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#quote" className="mobile-nav-link primary">Get Quote</a>
              <a href="#includes" className="mobile-nav-link">What&apos;s Included</a>
              <a href="#setups" className="mobile-nav-link">Setups</a>
              <a href="#panel" className="mobile-nav-link">Panel &amp; Circuit</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          </nav>

          <div className="tesla-hero-inner">
            <span className="tesla-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="7" y="3" width="10" height="18" rx="3" />
                <path d="M12 7v5M10 16h4" />
              </svg>
              Hardwired Level 2 home charging
            </span>
            <h1>
              Tesla Wall Connector Installation in{" "}
              <span className="blue">New Jersey</span>
            </h1>
            <p className="tesla-hero-sub">
              The Wall Connector is a Level 2 home charger that needs a dedicated{" "}
              <strong>240V circuit</strong> and a licensed electrical installation. Here&apos;s what
              the work involves — panel capacity, circuit sizing, hardwired and outdoor placement,
              and permits — plus a quote scoped from your photos.
            </p>

            <div className="tesla-spec-strip">
              <div className="tesla-spec">
                <span className="tesla-spec-k">240V</span>
                <span className="tesla-spec-v">Dedicated circuit</span>
              </div>
              <div className="tesla-spec">
                <span className="tesla-spec-k">Hardwired</span>
                <span className="tesla-spec-v">Wall-mounted install</span>
              </div>
              <div className="tesla-spec">
                <span className="tesla-spec-k">Permitted</span>
                <span className="tesla-spec-v">NJ licensed electricians</span>
              </div>
            </div>

            <div className="tesla-note" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              <span>
                PlugWise NJ is not affiliated with Tesla. Electrical work is performed by independent
                licensed electricians. Final scope requires a site-specific review.
              </span>
            </div>

            <div className="cta-row tesla-cta-row">
              <a href="#quote" className="btn btn-primary">
                Get a Tesla charger installation quote
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

        {/* ============ WHAT THE INSTALL INCLUDES + READINESS ============ */}
        <section id="includes">
          <div className="wrap">
            <div className="sec-head">
              <h2>What a Tesla Wall Connector installation includes</h2>
              <p>It&apos;s a hardwired Level 2 install — here&apos;s the typical scope and how to tell if your home is ready.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                A Wall Connector is wired directly to a dedicated 240V circuit rather than plugged into
                an outlet. A licensed electrician runs and sizes that circuit, mounts the unit, makes
                the connection, and handles the permit and inspection. Because it&apos;s hardwired, the
                circuit and breaker are sized to the install, and the unit&apos;s maximum amperage is
                configured to match.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  A dedicated 240V circuit and a new breaker sized for the install
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Appropriately rated wire and conduit for the run to your parking spot
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Mounting the unit and a clean, code-compliant hardwired connection
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  An electrical permit and inspection, plus any panel upgrade if capacity requires it
                </li>
              </ul>
            </div>

            <div className="tesla-ready">
              <h3 className="tesla-ready-title">Is your home Wall Connector-ready?</h3>
              <ul className="tesla-ready-list">
                {ready.map((r) => (
                  <li className="tesla-ready-item" key={r}>
                    <span className="tesla-ready-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
                New to Level 2 charging? Start with our{" "}
                <Link href="/level-2-ev-charger-installation-nj" className="tesla-inline-link">
                  Level 2 EV charger installation guide
                </Link>
                .
              </div>
            </div>
          </div>
        </section>

        {/* ============ WALL CONNECTOR VS MOBILE VS NEMA ============ */}
        <section className="info-section" id="setups">
          <div className="wrap">
            <div className="sec-head">
              <h2>Wall Connector vs. Mobile Connector vs. NEMA 14-50 outlet</h2>
              <p>Three common ways Tesla owners charge at home. The details below are general and depend on your vehicle, circuit, breaker, and panel.</p>
            </div>
            <div className="tesla-compare3">
              {setups.map((s) => (
                <div className={`tesla-c3-card${s.featured ? " featured" : ""}`} key={s.name}>
                  {s.featured ? <span className="tesla-c3-flag">Most common for daily charging</span> : null}
                  <h3 className="tesla-c3-name">{s.name}</h3>
                  <span className="tesla-c3-tag">{s.tag}</span>
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
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Charging speed isn&apos;t a fixed number — it depends on your vehicle, the breaker and
              circuit amperage, and your panel capacity. A licensed electrician sizes the install for
              your home.
            </div>
          </div>
        </section>

        {/* ============ PANEL CAPACITY & CIRCUIT — DECISION PATH ============ */}
        <section id="panel">
          <div className="wrap">
            <div className="sec-head">
              <h2>Panel capacity and circuit sizing</h2>
              <p>A Wall Connector needs its own 240V circuit. Whether your panel can host it follows a simple path.</p>
            </div>
            <ol className="tesla-path">
              {path.map((step, i) => (
                <li className={`tesla-path-node tone-${step.tone}`} key={step.n}>
                  <span className="tesla-path-num">{step.n}</span>
                  <div className="tesla-path-body">
                    <h3>{step.t}</h3>
                    <p>{step.d}</p>
                  </div>
                  {i < path.length - 1 ? <span className="tesla-path-arrow" aria-hidden="true">↓</span> : null}
                </li>
              ))}
            </ol>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="6" y="3" width="12" height="18" rx="2" />
                <path d="M10 7h4M10 11h4M11 15l-1 3h4l-1-3" />
              </svg>
              A panel upgrade is the biggest cost swing — see how upgrade risk works in our{" "}
              <Link href="/ev-charger-installation-cost-nj" className="tesla-inline-link">
                EV charger installation cost guide
              </Link>
              .
            </div>
          </div>
        </section>

        {/* ============ HARDWIRED & OUTDOOR PLACEMENT ============ */}
        <section className="info-section" id="placement">
          <div className="wrap">
            <div className="sec-head">
              <h2>Hardwired installation and outdoor placement</h2>
              <p>Where the unit goes shapes the run, the equipment, and the scope.</p>
            </div>
            <div className="info-grid">
              <div className="panel">
                <h3 className="panel-title">Hardwired install</h3>
                <p className="panel-sub">A clean, permanent connection wired straight to the circuit.</p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    No outlet needed — the unit is wired directly to a dedicated circuit
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Supports higher continuous amperage when the circuit is sized for it
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Tidy, wall-mounted result with a managed cable
                  </li>
                </ul>
              </div>
              <div className="panel">
                <h3 className="panel-title">Outdoor placement</h3>
                <p className="panel-sub">The unit is rated for outdoor use; the install still has to suit the location.</p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Weatherproof methods and conduit for exposed runs
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    A code-compliant exterior circuit, with GFCI protection where required
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Distance and trenching to a detached garage add to the scope
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PERMITS & INSPECTION ============ */}
        <section id="permits">
          <div className="wrap">
            <div className="sec-head">
              <h2>Permits and inspection in New Jersey</h2>
              <p>A hardwired Wall Connector is permitted, inspected electrical work.</p>
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
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11l3 3 8-8" />
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                </svg>
                More on permits and code on our{" "}
                <Link href="/ev-charger-installation-nj" className="tesla-inline-link">
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
              <h2>Tesla charger installation cost drivers</h2>
              <p>The cost tracks your install conditions, not the brand on the box.</p>
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
                  Distance from the panel to the unit, and the routing path
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Indoor vs. outdoor, weatherproofing, and trenching to a detached garage
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Circuit amperage, breaker, and local permit fees
                </li>
              </ul>
              <p className="tesla-link-row">
                <Link href="/ev-charger-installation-cost-nj" className="tesla-inline-link">
                  See the full cost breakdown and typical scenarios →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ============ REBATES & CAVEATS ============ */}
        <section id="rebates">
          <div className="wrap">
            <div className="sec-head">
              <h2>Utility rebates and Tesla charger caveats</h2>
              <p>Incentives can help — but they change and are decided by the utility, not by PlugWise.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                New Jersey utilities have offered EV charging programs that may help with eligible
                electrical work for some customers. Eligibility, amounts, and program status change
                over time and are set by each utility — so we don&apos;t quote utility figures or
                promise any program will lower the cost of a Wall Connector install. Which program
                applies depends on your utility territory.
              </p>
              <div className="tesla-rebate-links">
                <Link href="/pseg-ev-charger-rebate" className="tesla-rebate-link">
                  <span className="tesla-rebate-name">PSE&amp;G EV charger rebate guide</span>
                  <span className="tesla-rebate-go">Read guide →</span>
                </Link>
                <Link href="/jcpl-ev-charger-rebate" className="tesla-rebate-link">
                  <span className="tesla-rebate-name">JCP&amp;L EV charger rebate guide</span>
                  <span className="tesla-rebate-go">Read guide →</span>
                </Link>
              </div>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                PlugWise NJ is not affiliated with Tesla, PSE&amp;G, JCP&amp;L, or any utility or rebate program.
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT PHOTOS TO SEND ============ */}
        <section className="info-section" id="photos">
          <div className="wrap">
            <div className="sec-head">
              <h2>What photos to send for a quote</h2>
              <p>A few clear photos let independent licensed electricians quote your actual home.</p>
            </div>
            <div className="tesla-send">
              {send.map((s) => (
                <div className="tesla-send-card" key={s.t}>
                  <span className="tesla-send-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </span>
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
              We scope from what you send so quotes reflect your home — a final quote still requires a
              site-specific electrical review.
            </div>
          </div>
        </section>

        {/* ============ CTA / QUOTE FORM ============ */}
        <section className="tesla-quote-section" id="quote-section">
          <div className="wrap">
            <div className="tesla-quote-layout">
              <div className="tesla-quote-copy">
                <h2>Get your Tesla Wall Connector installation quote</h2>
                <p>
                  Share a couple of photos and a few details, and we&apos;ll scope your hardwired Level
                  2 install so independent licensed NJ electricians can quote your actual home — panel,
                  circuit, distance, and placement included.
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
              <div className="tesla-quote-wrap">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>Tesla Wall Connector installation FAQ</h2>
              <p>Common questions from New Jersey Tesla owners.</p>
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
            <div className="tesla-disclaimer">
              <span className="tesla-disclaimer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v5M12 16h.01" />
                </svg>
              </span>
              <div>
                <h3>Trademark &amp; independence notice</h3>
                <p>
                  Tesla, Wall Connector, and Mobile Connector are trademarks of Tesla, Inc., used here
                  for identification and descriptive purposes only. PlugWise NJ is an independent quote
                  coordination platform — we are not Tesla and are not affiliated with, endorsed by, or
                  certified by Tesla, and we do not perform electrical work or sell Tesla hardware.
                  Electrical work is performed by independent licensed electricians/contractors where
                  available, a final quote requires a site-specific electrical review, and charging
                  speed depends on your vehicle, circuit, breaker, and panel. We are not affiliated
                  with any utility or rebate program. Availability varies by location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA BAND ============ */}
        <section className="chargers dark">
          <div className="wrap">
            <div className="charger-foot svc-cta">
              <span>Ready for a Wall Connector at home? Get a quote scoped from your photos.</span>
              <a href="#quote" className="btn btn-primary">Get My EV Charger Quote</a>
            </div>
            <div className="charger-foot tesla-cta-sub">
              <Link href="/level-2-ev-charger-installation-nj" className="btn-ghost-light">
                Level 2 Installation
              </Link>
              <Link href="/ev-charger-installation-cost-nj" className="btn-ghost-light">
                Installation Cost in NJ
              </Link>
              <Link href="/ev-charger-installation-nj" className="btn-ghost-light">
                EV Charger Installation NJ
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
                PlugWise is a lead generation and quote coordination platform, not affiliated with
                Tesla or any utility. Electrical work is performed by independent licensed
                electricians. Availability varies by location.
              </p>
            </div>
            <div className="foot-col">
              <h5>On This Page</h5>
              <ul>
                <li><a href="#includes">What&apos;s Included</a></li>
                <li><a href="#setups">Charging Setups</a></li>
                <li><a href="#panel">Panel &amp; Circuit</a></li>
                <li><a href="#cost">Cost Drivers</a></li>
                <li><a href="#quote">Get a Quote</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Explore</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/level-2-ev-charger-installation-nj">Level 2 Installation</Link></li>
                <li><Link href="/ev-charger-installation-cost-nj">Installation Cost in NJ</Link></li>
                <li><Link href="/ev-charger-installation-nj">EV Charger Installation NJ</Link></li>
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
