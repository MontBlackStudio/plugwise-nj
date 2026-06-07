import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const PAGE_URL = "https://plugwisenj.com/pseg-ev-charger-rebate";

export const metadata: Metadata = {
  title: "PSE&G EV Charger Rebate Guide for NJ Homeowners | PlugWise NJ",
  description:
    "A practical guide for New Jersey homeowners on the PSE&G EV charging program and rebate considerations — eligibility, what to confirm, and how to get an EV charger installation quote from photos. PlugWise NJ is not PSE&G.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "PlugWise NJ",
    title: "PSE&G EV Charger Rebate Guide for New Jersey Homeowners",
    description:
      "Understand the PSE&G EV charging program and rebate considerations as a New Jersey homeowner, then request an EV charger installation quote from photos. PlugWise NJ is an independent quote platform, not PSE&G.",
  },
  twitter: {
    card: "summary",
    title: "PSE&G EV Charger Rebate Guide for NJ Homeowners",
    description:
      "What NJ homeowners should know about the PSE&G EV charging program and rebate considerations — plus a photo-based installation quote path. Not affiliated with PSE&G.",
  },
};

// Official PSE&G sources verified for this guide (June 2026).
const SOURCES = {
  residentialProgram:
    "https://nj.myaccount.pseg.com/myservicepublic/electricvehicles-residential-program",
  evProgram: "https://nj.myaccount.pseg.com/myservicepublic/electricvehicles",
};

const eligibility = [
  {
    t: "ENERGY STAR Level 2 smart charger",
    d: "PSE&G has outlined that an eligible charger is an ENERGY STAR certified Level 2 smart charger capable of Wi-Fi or cellular communication.",
  },
  {
    t: "Active PSE&G NJ electric account",
    d: "Eligibility has been tied to being a PSE&G New Jersey electric customer in good standing on a single residential meter.",
  },
  {
    t: "Installed after the program cutoff",
    d: "PSE&G has stated that chargers installed after January 27, 2021 may qualify; earlier installs have not been eligible for make-ready incentives.",
  },
  {
    t: "Permit, inspection & licensed work",
    d: "Work has needed a New Jersey-licensed electrician (single-family owners may self-install), a municipal permit, and a passing electrical inspection.",
  },
];

const confirmFirst = [
  "Current credit and rebate amounts, caps, and whether funds are still available",
  "Whether your specific charger model qualifies as an eligible smart charger",
  "Your account eligibility, meter setup, and standing with PSE&G",
  "Permit and inspection requirements with your local municipality",
  "The expected timeline — PSE&G has noted the process can take up to about three months",
  "Off-peak / Time-of-Use rate options, and that the older off-peak charging credit stopped new enrollments in January 2026",
];

const dualFactors = [
  {
    t: "Panel capacity",
    rebate:
      "A Level 2 smart charger needs adequate panel capacity to be installed safely and pass inspection — a prerequisite for program approval.",
    price:
      "If a panel or service upgrade is required, it adds materials and labor to your installation quote.",
  },
  {
    t: "Charger location",
    rebate:
      "A permanent, code-compliant install on a single residential meter supports both inspection and program eligibility.",
    price:
      "Indoor vs. outdoor, mounting surface, and weatherproofing all change the scope and cost of the job.",
  },
  {
    t: "Distance from panel",
    rebate:
      "Longer runs can introduce sub-panel or routing decisions that an inspector and the program will expect to be done correctly.",
    price:
      "More distance means more wire, conduit, and labor — and trenching for detached structures.",
  },
  {
    t: "Permits & inspection",
    rebate:
      "PSE&G has required a municipal permit and a passing inspection before approving make-ready incentives.",
    price:
      "Permit fees and inspection coordination are part of a compliant quote from a licensed electrician.",
  },
];

const steps = [
  {
    n: 1,
    t: "Share your photos",
    d: "Upload photos of your electrical panel and the spot where you want the charger installed.",
  },
  {
    n: 2,
    t: "We scope the job",
    d: "We review panel capacity, run distance, and install conditions so quotes reflect your actual home.",
  },
  {
    n: 3,
    t: "Compare matched quotes",
    d: "Receive quotes from independent licensed NJ electricians and compare your options.",
  },
  {
    n: 4,
    t: "Prepare your PSE&G conversation",
    d: "Use the panel, charger, and install details to confirm rebate eligibility and program steps directly with PSE&G.",
  },
];

const faqs = [
  {
    q: "Does PSE&G offer an EV charger rebate in NJ?",
    a: "PSE&G has run an EV Residential Charging Program for eligible New Jersey customers. It is structured as a make-ready program — helping with the electrical work that makes a home charger-ready — rather than a cash-back rebate on the charger itself. Program terms and amounts change, so confirm current eligibility and credits directly with PSE&G before applying.",
  },
  {
    q: "What is the PSE&G EV charger program?",
    a: "The PSE&G EV charging program supports installing EV chargers across its New Jersey service territory. For homeowners, the residential portion has offered make-ready incentives toward customer-side electrical upgrades and, where required, toward utility-side service work. It does not pay you back for buying the charger. Always verify the current program structure with PSE&G.",
  },
  {
    q: "How do I qualify for the PSE&G charger rebate?",
    a: "PSE&G has outlined eligibility that includes an ENERGY STAR certified Level 2 smart charger, an active PSE&G NJ electric account in good standing, installation after the program cutoff date, and a permitted, inspected install. These requirements change over time — confirm your eligibility directly with PSE&G before relying on any amount.",
  },
  {
    q: "Does the PSE&G NJ EV charger rebate cover the charger itself?",
    a: "Based on PSE&G's published residential program, the incentives have applied to make-ready electrical work — such as panel upgrades, permits, and utility-side service costs — not to the purchase price of the smart charger. Homeowners typically buy the charger separately. Confirm what is and is not covered with PSE&G.",
  },
  {
    q: "Is PlugWise NJ affiliated with PSE&G?",
    a: "No. PlugWise NJ is an independent EV charger quote platform and installer network. We are not PSE&G, we are not PSE&G-approved, and we do not administer any rebate. We help you scope an installation from photos and connect with independent licensed electricians, then you confirm program details with PSE&G yourself.",
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
        { "@type": "ListItem", position: 3, name: "PSE&G EV Charger Rebate Guide", item: PAGE_URL },
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

export default function PsegEvChargerRebate() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="pseg-page">
        {/* ============ HERO ============ */}
        <header className="hero pseg-hero">
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
              <div className="nav-secure pseg-nav-link">
                <Link href="/ev-charger-installation-nj">EV Charger Installation NJ →</Link>
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#quote" className="mobile-nav-link primary">Get Quote</a>
              <a href="#program" className="mobile-nav-link">The Program</a>
              <a href="#eligibility" className="mobile-nav-link">Eligibility</a>
              <a href="#confirm" className="mobile-nav-link">Confirm First</a>
              <a href="#faq" className="mobile-nav-link">FAQ</a>
            </div>
          </nav>

          <div className="pseg-hero-inner">
            <span className="pseg-updated">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 2" />
              </svg>
              Last updated: June 2026
            </span>
            <h1>
              PSE&amp;G EV Charger Rebate Guide for{" "}
              <span className="blue">New Jersey Homeowners</span>
            </h1>
            <p className="pseg-hero-sub">
              A practical, plain-English guide to the PSE&amp;G EV charging program and rebate
              considerations — plus a fast way to get an EV charger installation quote from photos.
              This is an independent homeowner guide and a quote request path, <strong>not</strong>{" "}
              an official PSE&amp;G page.
            </p>

            <div className="pseg-noaffil" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              <span>
                PlugWise NJ is not affiliated with PSE&amp;G and is not PSE&amp;G-approved. We do not
                administer any rebate. Always confirm current eligibility, rebate amounts, charger
                requirements, and program terms directly with PSE&amp;G before applying.
              </span>
            </div>

            <div className="cta-row pseg-cta-row">
              <a href="#quote" className="btn btn-primary">
                Check rebate fit &amp; get an installation quote from photos
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#program" className="btn btn-outline">What the program is</a>
            </div>
          </div>
        </header>

        {/* ============ WHAT THE PROGRAM IS ============ */}
        <section id="program">
          <div className="wrap">
            <div className="sec-head">
              <h2>What the PSE&amp;G EV charging program is</h2>
              <p>
                A make-ready program for the electrical work behind your charger — not a cash-back
                rebate on the charger itself.
              </p>
            </div>
            <p className="pseg-lead">
              PSE&amp;G&apos;s residential EV charging program is designed to help with the cost of
              getting a home <em>charger-ready</em>, rather than reimbursing the price of the smart
              charger you buy. PSE&amp;G has described two make-ready components. The figures below
              reflect what PSE&amp;G has published, but amounts, caps, and availability change —
              confirm the current terms directly with PSE&amp;G.
            </p>
            <div className="pseg-elig-grid pseg-program-grid">
              <div className="pseg-elig-card">
                <span className="pseg-amount">Up to $1,500</span>
                <h3>Customer-Side Make-Ready</h3>
                <p>
                  PSE&amp;G has described an on-bill credit toward customer-owned electrical work to
                  prepare for charging — such as panel upgrades and permit costs — up to a per-charger
                  cap.
                </p>
              </div>
              <div className="pseg-elig-card">
                <span className="pseg-amount">Up to $5,000</span>
                <h3>Utility-Side Make-Ready</h3>
                <p>
                  PSE&amp;G has described help reducing customer deposits for utility-side upgrades
                  (such as service line or transformer work) where they are required for your install.
                </p>
              </div>
              <div className="pseg-elig-card pseg-elig-card-note">
                <span className="pseg-amount pseg-amount-x">Charger not covered</span>
                <h3>Buy the charger separately</h3>
                <p>
                  The incentives have applied to the electrical make-ready work, not to the purchase
                  price of the ENERGY STAR Level 2 smart charger itself.
                </p>
              </div>
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Amounts and program terms change over time. Verify the current credits and rules on the
              official{" "}
              <a href={SOURCES.residentialProgram} target="_blank" rel="noopener noreferrer" className="pseg-inline-link">
                PSE&amp;G EV Residential Charging Program page
              </a>
              .
            </div>
          </div>
        </section>

        {/* ============ CONFIRM BEFORE APPLYING ============ */}
        <section className="info-section" id="confirm">
          <div className="wrap">
            <div className="sec-head">
              <h2>What homeowners should confirm before applying</h2>
              <p>Use this as a quick checklist when you contact PSE&amp;G — details change, so verify each one.</p>
            </div>
            <div className="pseg-confirm">
              <ul className="pseg-confirm-list">
                {confirmFirst.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="4" width="16" height="16" rx="4" />
                      <path d="M8.5 12l2.5 2.5L16 9" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="not-affil">
                <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                PlugWise NJ does not determine eligibility or approve rebates — PSE&amp;G does.
              </div>
            </div>
          </div>
        </section>

        {/* ============ ELIGIBILITY CHECKLIST ============ */}
        <section id="eligibility">
          <div className="wrap">
            <div className="sec-head">
              <h2>Eligibility checklist</h2>
              <p>What PSE&amp;G has typically looked for. Treat this as a starting point and confirm the current rules.</p>
            </div>
            <div className="pseg-elig-grid">
              {eligibility.map((e) => (
                <div className="pseg-elig-card" key={e.t}>
                  <span className="pseg-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <h3>{e.t}</h3>
                  <p>{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY THESE FACTORS MATTER (DUAL IMPACT) ============ */}
        <section className="info-section" id="factors">
          <div className="wrap">
            <div className="sec-head">
              <h2>Why panel capacity, charger location, distance &amp; permits matter twice</h2>
              <p>
                The same details that affect your <strong>rebate readiness</strong> also drive your{" "}
                <strong>installation quote price</strong>.
              </p>
            </div>
            <div className="pseg-dual-grid">
              {dualFactors.map((f) => (
                <div className="pseg-dual" key={f.t}>
                  <h3>{f.t}</h3>
                  <div className="pseg-dual-row">
                    <span className="pseg-tag pseg-tag-blue">Rebate readiness</span>
                    <p>{f.rebate}</p>
                  </div>
                  <div className="pseg-dual-row">
                    <span className="pseg-tag pseg-tag-green">Quote price</span>
                    <p>{f.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Curious how those same factors translate into dollars? See our{" "}
              <Link href="/ev-charger-installation-cost-nj" className="pseg-inline-link">EV charger installation cost in NJ guide</Link>
              .
            </div>
          </div>
        </section>

        {/* ============ HOW THE PHOTO QUOTE FLOW HELPS ============ */}
        <section id="prepare">
          <div className="wrap">
            <div className="sec-head">
              <h2>How the PlugWise photo quote flow helps you prepare</h2>
              <p>Walk into your PSE&amp;G application and installer conversations with the details already scoped.</p>
            </div>
            <ol className="pseg-steps">
              {steps.map((s) => (
                <li className="pseg-step" key={s.n}>
                  <span className="pseg-step-num">{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="blue-callout">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 11l3 3 8-8" />
                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
              </svg>
              Independent licensed electricians handle permits and inspection. PlugWise NJ helps you
              scope the work — the PSE&amp;G application and approval stay between you and PSE&amp;G.
            </div>
          </div>
        </section>

        {/* ============ CTA / QUOTE FORM ============ */}
        <section className="pseg-quote-section" id="quote-section">
          <div className="wrap">
            <div className="pseg-quote-layout">
              <div className="pseg-quote-copy">
                <h2>Check rebate fit and get an installation quote from photos</h2>
                <p>
                  Share a couple of photos and a few details. We&apos;ll scope your Level 2
                  installation and connect you with independent licensed NJ electricians — so you can
                  weigh quotes and confirm PSE&amp;G program steps with confidence.
                </p>
                <ul className="svc-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Quotes scoped from your actual panel and install location
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Independent licensed electricians, permit &amp; inspection handled by them
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Details you can take straight to your PSE&amp;G program application
                  </li>
                </ul>
              </div>
              <div className="pseg-quote-wrap">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>PSE&amp;G EV charger rebate FAQ</h2>
              <p>Common questions from New Jersey homeowners about the PSE&amp;G EV charger program.</p>
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

        {/* ============ OFFICIAL SOURCES ============ */}
        <section id="sources">
          <div className="wrap">
            <div className="sec-head">
              <h2>Official PSE&amp;G sources</h2>
              <p>Go straight to PSE&amp;G for current program terms, eligibility, and amounts.</p>
            </div>
            <div className="pseg-sources">
              <a href={SOURCES.residentialProgram} target="_blank" rel="noopener noreferrer" className="pseg-source">
                <h3>EV Residential Charging Program</h3>
                <p>PSE&amp;G&apos;s residential make-ready program details and requirements.</p>
                <span className="pseg-source-url">nj.myaccount.pseg.com →</span>
              </a>
              <a href={SOURCES.evProgram} target="_blank" rel="noopener noreferrer" className="pseg-source">
                <h3>PSE&amp;G EV Charging Program</h3>
                <p>The overall PSE&amp;G EV charging program landing page.</p>
                <span className="pseg-source-url">nj.myaccount.pseg.com →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ DISCLAIMER ============ */}
        <section id="disclaimer">
          <div className="wrap">
            <div className="pseg-disclaimer">
              <span className="pseg-disclaimer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="M9.5 12l2 2 3.5-3.5" />
                </svg>
              </span>
              <div>
                <h3>Independent platform disclaimer</h3>
                <p>
                  PlugWise NJ is not affiliated with PSE&amp;G, Tesla, JCP&amp;L, Atlantic City
                  Electric, or any utility. Electrical work is performed by independent licensed
                  electricians/contractors where available. Rebate and program decisions are made by
                  PSE&amp;G; confirm all current terms directly with the utility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA BAND ============ */}
        <section className="chargers dark">
          <div className="wrap">
            <div className="charger-foot svc-cta">
              <span>Ready to scope your Level 2 EV charger install and compare quotes?</span>
              <a href="#quote" className="btn btn-primary">Get My EV Charger Quote</a>
            </div>
            <div className="charger-foot pseg-cta-sub">
              <Link href="/ev-charger-installation-nj" className="btn-ghost-light">
                EV Charger Installation in NJ
              </Link>
              <Link href="/ev-charger-installation-cost-nj" className="btn-ghost-light">
                Installation Cost in NJ
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
                PlugWise is a lead generation and quote coordination platform. We are not affiliated
                with PSE&amp;G or any utility. Electrical work is performed by independent licensed
                electricians. Availability varies by location.
              </p>
            </div>
            <div className="foot-col">
              <h5>On This Page</h5>
              <ul>
                <li><a href="#program">The Program</a></li>
                <li><a href="#confirm">Confirm First</a></li>
                <li><a href="#eligibility">Eligibility</a></li>
                <li><a href="#sources">Official Sources</a></li>
                <li><a href="#quote">Get a Quote</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Explore</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ev-charger-installation-nj">EV Charger Installation NJ</Link></li>
                <li><Link href="/#cost">Cost &amp; Rebates</Link></li>
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
