import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const PAGE_URL = "https://plugwisenj.com/jcpl-ev-charger-rebate";

export const metadata: Metadata = {
  title: "JCP&L EV Charger Rebate Guide NJ | PlugWise NJ",
  description:
    "A homeowner guide to researching the JCP&L / FirstEnergy EV charging program in New Jersey — eligibility caveats, current program-status notes, installation cost drivers, and how to get a quote from photos. PlugWise NJ is not JCP&L.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "PlugWise NJ",
    title: "JCP&L EV Charger Rebate Guide for New Jersey Homeowners",
    description:
      "Research the JCP&L / FirstEnergy EV Driven program as a New Jersey homeowner — eligibility caveats, program-status notes, and a photo-based installation quote path. Independent platform, not affiliated with JCP&L.",
  },
  twitter: {
    card: "summary",
    title: "JCP&L EV Charger Rebate Guide NJ | PlugWise NJ",
    description:
      "What NJ homeowners should know before planning around a JCP&L EV charger rebate — program-status caveats, install cost drivers, and a quote from photos. Not affiliated with JCP&L.",
  },
};

// Official JCP&L / FirstEnergy sources verified (content-checked, not just HTTP 200) in June 2026.
const SOURCES = {
  njEvDriven: "https://www.firstenergycorp.com/help/electric-vehicles/nj-ev/new-jersey-ev.html",
  evFaqs: "https://www.firstenergycorp.com/help/electric-vehicles/nj-ev/new-jersey-ev/ev-faqs.html",
};

const territories = [
  {
    name: "JCP&L — Jersey Central Power & Light",
    tag: "This guide",
    here: true,
    body: "A FirstEnergy company serving much of northern, central, and coastal New Jersey. Its residential make-ready window has closed — confirm any current EV Driven status directly with JCP&L.",
  },
  {
    name: "PSE&G — Public Service Electric & Gas",
    tag: "Different territory",
    href: "/pseg-ev-charger-rebate",
    cta: "Read the PSE&G guide →",
    body: "Serves a different New Jersey territory with its own EV charging program and terms. If the utility on your bill is PSE&G, start there instead.",
  },
];

const caveats = [
  "Don't build your budget around a JCP&L residential rebate — the residential make-ready window closed June 30, 2025.",
  "Confirm the current program status, eligibility, and any amounts directly with JCP&L / FirstEnergy before you apply.",
  "Confirm you are actually in JCP&L territory — check the utility name printed on your electric bill.",
  "When utility programs are open, they typically require enrollment and approval before the work is done.",
  "Eligible work and charger requirements are defined by the utility, not by PlugWise.",
  "Any incentive offsets eligible electrical prep work — it is never a guarantee of full installation coverage.",
];

const flow = [
  {
    t: "Confirm your utility and territory",
    d: "Check your electric bill. If the utility is not JCP&L, start with the right utility's program instead of this one.",
  },
  {
    t: "Check the current program status",
    d: "Go straight to JCP&L / FirstEnergy for the latest EV Driven status, eligibility rules, and whether any incentive is open.",
  },
  {
    t: "Scope your installation from photos",
    d: "Get a photo-based quote so you know your panel capacity, run distance, and make-ready needs before committing.",
  },
  {
    t: "Apply directly with the utility",
    d: "If a program is open and you qualify, enroll and get approval through JCP&L — PlugWise cannot file or approve utility rebates for you.",
  },
];

const faqs = [
  {
    q: "Does JCP&L offer an EV charger rebate in NJ?",
    a: "JCP&L (a FirstEnergy company) ran an EV charging program called EV Driven. According to JCP&L's official program guidance, the residential customer make-ready incentives and residential off-peak rate credits were closed on June 30, 2025 and remain closed, and the broader EV Driven program is scheduled to end July 15, 2026. So you should not plan around a current JCP&L residential rebate — confirm the latest status directly with JCP&L / FirstEnergy.",
  },
  {
    q: "How do I know if I am in JCP&L territory?",
    a: "The most reliable answer is the utility name printed on your electric bill or meter. JCP&L serves much of northern, central, and coastal New Jersey, while other parts of the state are served by PSE&G, Atlantic City Electric, or Rockland Electric. If your bill says PSE&G, see our PSE&G guide instead. When in doubt, confirm your territory with the utility directly.",
  },
  {
    q: "Can a rebate cover EV charger installation cost?",
    a: "When a utility make-ready program is open, it is typically structured to offset eligible electrical prep work — not to guarantee your entire installation is free. The JCP&L residential make-ready window is currently closed, so don't count on it reducing your cost. Your final installation price depends on a site-specific electrical review.",
  },
  {
    q: "Do I need approval before installing a Level 2 charger?",
    a: "In New Jersey a Level 2 charger install generally needs an electrical permit and inspection, which a licensed electrician handles. Separately, utility incentive programs — when they are open — usually require you to enroll and get approval before the work is done. Because JCP&L's residential make-ready incentive is closed, confirm both the local permit steps and any current utility requirements before you begin.",
  },
  {
    q: "Can PlugWise help with JCP&L rebate paperwork?",
    a: "No. PlugWise NJ is not JCP&L and cannot file, approve, or guarantee any utility rebate. We help you scope your installation from photos and connect with independent licensed electricians. Any rebate application or program question goes directly to JCP&L / FirstEnergy.",
  },
  {
    q: "Is PlugWise affiliated with JCP&L?",
    a: "No. PlugWise NJ is an independent EV charger quote coordination platform. We are not affiliated with JCP&L, FirstEnergy, or any utility or rebate program, and we do not administer any incentive.",
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
        { "@type": "ListItem", position: 3, name: "JCP&L EV Charger Rebate Guide", item: PAGE_URL },
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

export default function JcplEvChargerRebate() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="jcpl-page">
        {/* ============ HERO ============ */}
        <header className="hero jcpl-hero">
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
              <div className="nav-secure jcpl-nav-link">
                <Link href="/ev-charger-installation-nj">EV Charger Installation NJ →</Link>
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#quote" className="mobile-nav-link primary">Get Quote</a>
              <a href="#status" className="mobile-nav-link">Program Status</a>
              <a href="#eligibility" className="mobile-nav-link">Eligibility</a>
              <a href="#territory" className="mobile-nav-link">Territory</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          </nav>

          <div className="jcpl-hero-inner">
            <span className="jcpl-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9.5 12l2 2 3.5-3.5" />
              </svg>
              JCP&amp;L / FirstEnergy territory
            </span>
            <h1>
              JCP&amp;L EV Charger Rebate Guide for{" "}
              <span className="blue">New Jersey Homeowners</span>
            </h1>
            <p className="jcpl-hero-sub">
              A plain-English homeowner guide for researching the JCP&amp;L / FirstEnergy{" "}
              <strong>EV Driven</strong> charging program — what it covered, the eligibility caveats,
              and how to scope your install. This is an independent guide and a quote request path,{" "}
              <strong>not</strong> an official JCP&amp;L or FirstEnergy page.
            </p>

            <div className="jcpl-status" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 9v4M12 17h.01" />
                <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
              </svg>
              <span>
                <strong>Program status (June 2026):</strong> Per JCP&amp;L&apos;s official EV Driven
                program guidance, residential make-ready incentives and residential off-peak rate
                credits closed June 30, 2025 and remain closed; the broader EV Driven program is
                scheduled to end July 15, 2026. Always confirm the current status directly with
                JCP&amp;L / FirstEnergy.
              </span>
            </div>

            <div className="jcpl-noaffil" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              <span>
                PlugWise NJ is not affiliated with JCP&amp;L, FirstEnergy, or any utility or rebate
                program. We don&apos;t administer or approve incentives.
              </span>
            </div>

            <div className="cta-row jcpl-cta-row">
              <a href="#quote" className="btn btn-primary">
                Check eligibility &amp; get an installation quote
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

        {/* ============ PROGRAM STATUS + OFFICIAL SOURCES ============ */}
        <section id="status">
          <div className="wrap">
            <div className="sec-head">
              <h2>Current JCP&amp;L EV Driven program status</h2>
              <p>Start here — the residential picture changed, so verify before you plan.</p>
            </div>
            <div className="jcpl-source-panel">
              <div className="jcpl-source-status">
                <span className="jcpl-status-pill">Residential make-ready closed</span>
                <p>
                  JCP&amp;L&apos;s EV Driven program once included residential customer make-ready incentives
                  and residential off-peak TOU rate credits. Per JCP&amp;L&apos;s published program guidance, those
                  items closed on June 30, 2025 and remain closed. The overall EV Driven program is
                  scheduled to end July 15, 2026, with some non-residential and BGS TOU residential
                  rate-credit applications potentially continuing until then.
                </p>
                <p className="jcpl-source-note">
                  Because utility program terms change, treat anything you read second-hand — including
                  this guide — as a starting point only, and confirm the current status, eligibility,
                  and any amounts directly with JCP&amp;L / FirstEnergy.
                </p>
              </div>
              <div className="jcpl-source-links">
                <h3>Official JCP&amp;L / FirstEnergy sources</h3>
                <a href={SOURCES.njEvDriven} target="_blank" rel="noopener noreferrer" className="jcpl-source">
                  <span className="jcpl-source-title">New Jersey EV Driven program</span>
                  <span className="jcpl-source-url">firstenergycorp.com →</span>
                </a>
                <a href={SOURCES.evFaqs} target="_blank" rel="noopener noreferrer" className="jcpl-source">
                  <span className="jcpl-source-title">NJ EV Driven program FAQs</span>
                  <span className="jcpl-source-url">firstenergycorp.com →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT THE PROGRAM MAY COVER ============ */}
        <section className="info-section" id="covers">
          <div className="wrap">
            <div className="sec-head">
              <h2>What the JCP&amp;L EV charger program may cover</h2>
              <p>The EV Driven program was built around &ldquo;make-ready&rdquo; work — not a cash-back rebate on the charger.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                Utility &ldquo;make-ready&rdquo; programs are generally designed to help prepare a
                property for charging rather than to reimburse the price of the charger you buy. When
                the JCP&amp;L residential program was open, it was structured around two kinds of
                make-ready work. We describe the structure below without quoting amounts, because
                the residential make-ready incentives are closed and figures change — confirm anything current with
                JCP&amp;L directly.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  <span><strong>Customer-side make-ready</strong> — the electrical prep on your side of the meter, such as circuit and panel work needed to support a Level 2 charger.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  <span><strong>Utility-side make-ready</strong> — upgrades on the utility&apos;s side, such as service wires or transformer work, where they are required for your install.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  <span>The charger hardware itself is typically bought separately and is not the focus of make-ready support.</span>
                </li>
              </ul>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                We don&apos;t quote JCP&amp;L figures here. Verify any current amounts and eligibility on the official sources above.
              </div>
            </div>
          </div>
        </section>

        {/* ============ ELIGIBILITY CAVEATS ============ */}
        <section id="eligibility">
          <div className="wrap">
            <div className="sec-head">
              <h2>Eligibility caveats before you plan around a rebate</h2>
              <p>Read these first — they keep your budget realistic and your expectations grounded.</p>
            </div>
            <ul className="jcpl-checklist">
              {caveats.map((c) => (
                <li className="jcpl-check-item" key={c}>
                  <span className="jcpl-check-mark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 9v4M12 17h.01" />
                      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                    </svg>
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ WHY SCOPE MATTERS ============ */}
        <section className="info-section" id="scope">
          <div className="wrap">
            <div className="sec-head">
              <h2>Why installation scope matters before applying</h2>
              <p>Whether or not a program is open, the work itself drives your real out-of-pocket cost.</p>
            </div>
            <div className="panel">
              <p className="panel-sub">
                Make-ready programs are tied to the electrical work your home actually needs. The same
                conditions that decide whether you&apos;d qualify for help — panel capacity, the run
                from the panel, outdoor or detached-garage work, and permits — are exactly what move
                your installation quote. Scoping the job first means you understand the real number
                with or without any incentive.
              </p>
              <ul className="svc-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Panel capacity and possible upgrades are the biggest single cost swing
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Distance, outdoor work, and trenching to a detached garage add labor and materials
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  Permits and inspection are part of a compliant, code-correct install
                </li>
              </ul>
              <div className="blue-callout">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
                See the full breakdown in our{" "}
                <Link href="/ev-charger-installation-cost-nj" className="jcpl-inline-link">
                  EV charger installation cost in NJ guide
                </Link>
                .
              </div>
            </div>
          </div>
        </section>

        {/* ============ PANEL CAPACITY, PERMITS & MAKE-READY ============ */}
        <section id="make-ready">
          <div className="wrap">
            <div className="sec-head">
              <h2>Panel capacity, permits, and make-ready work</h2>
              <p>The practical pieces every Level 2 install touches in New Jersey.</p>
            </div>
            <div className="info-grid">
              <div className="panel">
                <h3 className="panel-title">Panel capacity &amp; make-ready</h3>
                <p className="panel-sub">Your panel has to support a dedicated 240V circuit safely.</p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Older or fully loaded panels may need an upgrade to add capacity
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Make-ready work is the electrical prep that gets your property charger-ready
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    A photo of your panel lets an electrician judge upgrade risk before quoting
                  </li>
                </ul>
              </div>
              <div className="panel">
                <h3 className="panel-title">Permits &amp; inspection in NJ</h3>
                <p className="panel-sub">Level 2 installs are permitted, inspected work in New Jersey.</p>
                <ul className="svc-list">
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
                    Work is inspected by your local authority having jurisdiction (AHJ)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Electrical work is performed by independent licensed electricians, not PlugWise
                  </li>
                </ul>
                <div className="blue-callout">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 11l3 3 8-8" />
                    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                  </svg>
                  More detail on our{" "}
                  <Link href="/ev-charger-installation-nj" className="jcpl-inline-link">
                    EV charger installation in NJ
                  </Link>{" "}
                  hub.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ JCP&L vs PSE&G TERRITORY ============ */}
        <section className="info-section" id="territory">
          <div className="wrap">
            <div className="sec-head">
              <h2>JCP&amp;L vs. PSE&amp;G: utility territory matters</h2>
              <p>Which program even applies to you depends on who delivers your electricity.</p>
            </div>
            <div className="jcpl-territory">
              {territories.map((t) => (
                <div className={`jcpl-terr-card${t.here ? " here" : ""}`} key={t.name}>
                  <span className="jcpl-terr-tag">{t.tag}</span>
                  <h3>{t.name}</h3>
                  <p>{t.body}</p>
                  {t.href ? (
                    <Link href={t.href} className="jcpl-inline-link">{t.cta}</Link>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Not sure who serves you? The utility name on your electric bill is the authoritative
              answer — confirm it with the utility before applying to any program.
            </div>
          </div>
        </section>

        {/* ============ BEFORE YOU APPLY FLOW ============ */}
        <section id="before-apply">
          <div className="wrap">
            <div className="sec-head">
              <h2>Before you apply: a realistic order of operations</h2>
              <p>A conservative path that works whether or not a utility incentive is open.</p>
            </div>
            <ol className="jcpl-flow">
              {flow.map((step, i) => (
                <li className="jcpl-flow-step" key={step.t}>
                  <span className="jcpl-flow-num">{i + 1}</span>
                  <div className="jcpl-flow-body">
                    <h3>{step.t}</h3>
                    <p>{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ HOW TO GET A QUOTE / CTA FORM ============ */}
        <section className="jcpl-quote-section" id="quote-section">
          <div className="wrap">
            <div className="jcpl-quote-layout">
              <div className="jcpl-quote-copy">
                <h2>How to get a quote from photos</h2>
                <p>
                  Skip the guesswork. Share a couple of photos of your panel and install spot plus a
                  few details, and we&apos;ll scope your Level 2 install so independent licensed NJ
                  electricians can quote your actual home. A final quote always requires a
                  site-specific electrical review.
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
                    Details you can take to JCP&amp;L if a program is open in your area
                  </li>
                </ul>
              </div>
              <div className="jcpl-quote-wrap">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>JCP&amp;L EV charger rebate FAQ</h2>
              <p>Straight, conservative answers for New Jersey homeowners.</p>
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
            <div className="jcpl-disclaimer">
              <span className="jcpl-disclaimer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9.5 12l2 2 3.5-3.5" />
                </svg>
              </span>
              <div>
                <h3>Independent platform disclaimer</h3>
                <p>
                  PlugWise NJ is not affiliated with JCP&amp;L, FirstEnergy, PSE&amp;G, Tesla, Atlantic
                  City Electric, or any utility or rebate program. We do not administer, approve, or
                  file incentives. Program status, eligibility, and amounts are set by the utility and
                  change over time — confirm them directly with JCP&amp;L / FirstEnergy. Electrical
                  work is performed by independent licensed electricians/contractors where available,
                  and a final quote requires a site-specific electrical review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA BAND ============ */}
        <section className="chargers dark">
          <div className="wrap">
            <div className="charger-foot svc-cta">
              <span>Researching JCP&amp;L options? Start with a quote scoped from your photos.</span>
              <a href="#quote" className="btn btn-primary">Get My EV Charger Quote</a>
            </div>
            <div className="charger-foot jcpl-cta-sub">
              <Link href="/ev-charger-installation-nj" className="btn-ghost-light">
                EV Charger Installation in NJ
              </Link>
              <Link href="/ev-charger-installation-cost-nj" className="btn-ghost-light">
                Installation Cost in NJ
              </Link>
              <Link href="/pseg-ev-charger-rebate" className="btn-ghost-light">
                PSE&amp;G Rebate Guide
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
                PlugWise is a lead generation and quote coordination platform. We are not affiliated
                with JCP&amp;L, FirstEnergy, or any utility. Electrical work is performed by
                independent licensed electricians. Availability varies by location.
              </p>
            </div>
            <div className="foot-col">
              <h5>On This Page</h5>
              <ul>
                <li><a href="#status">Program Status</a></li>
                <li><a href="#eligibility">Eligibility Caveats</a></li>
                <li><a href="#territory">Utility Territory</a></li>
                <li><a href="#before-apply">Before You Apply</a></li>
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
