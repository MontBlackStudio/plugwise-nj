import Link from "next/link";

/** Which primary nav item represents the current page, if any. */
export type NavCurrent =
  | "home"
  | "installation"
  | "cost"
  | "level2"
  | "tesla"
  | "pseg"
  | "jcpl";

/** A page-specific anchor shown in the mobile nav strip. */
export type MobileLink = { href: string; label: string; primary?: boolean };

type SiteNavProps = {
  /** Marks the matching primary link active (aria-current="page"). */
  current?: NavCurrent;
  /** Per-page section anchors for the mobile (≤1080px) nav strip. */
  mobileLinks?: MobileLink[];
  /** Quote CTA target. Every page renders a #quote anchor (QuoteForm). */
  quoteHref?: string;
};

// Shared cross-page primary navigation. `key` lines up with NavCurrent so the
// active page can be highlighted without any client-side routing hooks.
const NAV_LINKS: { key: NavCurrent; href: string; label: string }[] = [
  { key: "installation", href: "/ev-charger-installation-nj", label: "Installation" },
  { key: "cost", href: "/ev-charger-installation-cost-nj", label: "Cost" },
  { key: "level2", href: "/level-2-ev-charger-installation-nj", label: "Level 2" },
  { key: "tesla", href: "/tesla-wall-connector-installation-nj", label: "Tesla" },
  { key: "pseg", href: "/pseg-ev-charger-rebate", label: "PSE&G" },
  { key: "jcpl", href: "/jcpl-ev-charger-rebate", label: "JCP&L" },
];

export default function SiteNav({
  current,
  mobileLinks,
  quoteHref = "#quote",
}: SiteNavProps) {
  return (
    <nav className="topnav" aria-label="Primary navigation">
      <div className="topnav-inner">
        <Link
          href="/"
          className="brand"
          aria-label="PlugWise NJ home"
          aria-current={current === "home" ? "page" : undefined}
        >
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
        <div className="site-nav-links">
          {NAV_LINKS.map((link) => {
            const active = current === link.key;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`site-nav-link${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <a href={quoteHref} className="site-nav-cta">
          Get Quote
        </a>
      </div>
      <div className="mobile-site-nav" aria-label="Primary navigation links">
        {NAV_LINKS.map((link) => {
          const active = current === link.key;
          return (
            <Link
              key={`mobile-${link.key}`}
              href={link.href}
              className={`mobile-site-nav-link${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        <a href={quoteHref} className="mobile-site-nav-link quote">
          Get Quote
        </a>
      </div>
      {mobileLinks && mobileLinks.length > 0 ? (
        <div className="mobile-nav-links" aria-label="Page section links">
          {mobileLinks.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className={`mobile-nav-link${link.primary ? " primary" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
