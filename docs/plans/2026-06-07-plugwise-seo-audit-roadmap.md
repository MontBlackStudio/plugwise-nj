# PlugWise NJ SEO Audit + Updated Project Roadmap

> For Hermes/Cursor: This is the current operating plan after the June 7 SEO audit. Execute as small slices. One slice = one commit. Do not expand into city-page spam.

**Goal:** Turn PlugWise NJ into a conversion-first New Jersey EV charger installation lead-gen asset with a crawlable topical cluster, safe compliance posture, and a real lead-routing path.

**Architecture:** Next.js 16 app with focused App Router routes under `src/app`, shared `QuoteForm`, shared `SiteNav`, static SEO pages, sitemap/robots, and a server-side quote API. The site should act like a high-trust quote coordination platform, not a fake electrician company.

**Tech Stack:** Next.js 16.2.7, React 19.2.4, TypeScript, custom CSS in `src/app/globals.css`, no Tailwind, no extra dependencies unless justified.

---

## 1. Brutal Senior SEO Summary

PlugWise NJ is past the “landing page mockup” stage. It now has a real money-page cluster:

- Main service hub
- Cost guide
- PSE&G rebate guide
- JCP&L rebate guide
- Level 2 guide
- Tesla Wall Connector guide
- Shared navigation
- Lead form/API with webhook guardrails

That is enough content to look like a real site. The bottleneck is no longer “more pages.” The bottleneck is trust + capture + fulfillment.

The next dangerous mistake would be building 30 city pages before the business can receive, route, and monetize leads. The next correct moves are:

1. Fix trust/compliance gaps that could hurt conversion or legal posture.
2. Add missing Privacy/Terms pages because the form links to Privacy and collects PII.
3. Harden production lead delivery with an actual `QUOTE_WEBHOOK_URL` sink and test it.
4. Add permit/panel support pages before city pages.
5. Only then run a 5-page local test batch with unique local proof.

Verdict: BUILD / TEST. The SEO asset is viable, but it is not a business until lead delivery + electrician partner/outreach exist.

---

## 2. Current Live Route Inventory

| Route | Status | SEO role | Monetization role | Priority |
|---|---:|---|---|---:|
| `/` | Built | Brand/home + broad Level 2 hook | Quote form entry | P0 |
| `/ev-charger-installation-nj` | Built | Main service hub / near-me intent | Primary money page | P0 |
| `/ev-charger-installation-cost-nj` | Built | Cost anxiety / commercial investigation | Prequalifies leads | P0 |
| `/pseg-ev-charger-rebate` | Built | Utility rebate wedge | Rebate-to-install bridge | P0 |
| `/jcpl-ev-charger-rebate` | Built | JCP&L / FirstEnergy guide | Compliance trust + install bridge | P1 built |
| `/level-2-ev-charger-installation-nj` | Built | Technical Level 2 intent | Quote conversion support | P1 built |
| `/tesla-wall-connector-installation-nj` | Built | Tesla brand-intent | High-intent quote page | P0/P1 built |
| `/privacy` | Missing | Trust/legal | Required for form/PII | P0 gap |
| `/terms` | Missing | Trust/legal | Platform disclosure | P0 gap |
| `/ev-charger-permit-nj` | Missing | Trust/safety | Supports install/cost | P1 |
| `/can-my-panel-support-ev-charger` | Missing | Panel-capacity anxiety | Lead magnet / photo quote | P1 |
| `/nema-14-50-vs-hardwired-ev-charger` | Missing | Technical comparison | Supports Tesla/Level 2/cost | P1 |
| `/commercial-ev-charger-installation-nj` | Missing | B2B high ticket | Only if partner capacity exists | P2 |
| `/condo-apartment-ev-charger-installation-nj` | Missing | HOA/multifamily | Later residential expansion | P2 |
| `/es/instalacion-cargador-ev-nj` | Missing | Spanish NJ demand | Later bilingual funnel | P2 |

---

## 3. SEO Audit Findings

### 3.1 Technical SEO

What is good:

- Sitemap exists at `src/app/sitemap.ts` and includes all built SEO routes.
- Robots exists at `src/app/robots.ts` and points to sitemap.
- Each built SEO route has one H1.
- Built pages prerender as static routes; `/api/quote` is dynamic as expected.
- Metadata/canonical pattern exists on route pages.
- Shared `SiteNav` makes the cluster crawlable and usable.
- No LocalBusiness/Product/Offer/review schema on Tesla/rebate pages, which is good.

Problems / risks:

- README is stale and still describes older LocalBusiness/rebate/section assumptions.
- `/privacy` is linked but not built. This is a real trust + conversion problem because the form collects email/phone.
- Root page relies on layout metadata instead of route-local metadata. Acceptable, but homepage SEO would be clearer with page-level metadata if Next conventions allow it.
- Sitemap uses `new Date()` on every request/build. Not fatal, but it makes `lastModified` noisy. Later use stable dates or route config.
- No OG image defined. Not urgent for SEO, but weak for sharing/professionalism.

Priority: P0 for Privacy/Terms; P1 for OG image/stable sitemap dates.

### 3.2 On-page SEO

What is good:

- Page intent matches SERP/page type well: service hub, cost guide, utility guide, technical guide, Tesla page.
- H1s are literal and search-aligned.
- Internal links now connect the cluster.
- Cost pages use drivers and scenarios instead of fake exact pricing.
- Rebate pages avoid pretending utility affiliation.
- Tesla page uses nominative trademark language and avoids `Tesla-certified/authorized` claims.

Problems / risks:

- Homepage FAQ JSON-LD still says `$800 to $2,500`, while the cost page uses broader scenario ranges. This inconsistency should be cleaned up to avoid stale structured data.
- `FaqSection.tsx` still has the old `$800 to $2,500` answer too.
- Some copy says “Your information is safe and never shared.” That conflicts with the lead-gen model because information must be shared with electricians/webhook/partners to fulfill the quote. Safer: “Used to process your quote request; see Privacy Policy.”
- `FaqSection.tsx` has `href="#"` placeholder links for “View all FAQs,” “Join Our Installer Network,” and “Learn more.” Placeholder links are conversion/trust rot.
- Some lines still say “licensed electricians in our network” as if the network already fully exists. Safer until partner is real: “independent licensed electricians/contractors where available.”

Priority: P0 compliance/copy cleanup.

### 3.3 Information Architecture

What is good:

- Current cluster matches the validated architecture direction: service, cost, PSE&G, JCP&L, Level 2, Tesla.
- Shared nav solves the biggest usability issue.
- Sitemap matches built routes.

Missing next support pages:

1. `/ev-charger-permit-nj`
2. `/can-my-panel-support-ev-charger`
3. `/nema-14-50-vs-hardwired-ev-charger`

These should come before city pages because they build trust, reduce sales friction, and support existing money pages without needing local proof.

### 3.4 Conversion / Lead Capture

What is good:

- Quote form is real client-side state.
- API route validates server-side.
- Honeypot exists via `website` field validation.
- Basic rate limit exists.
- Production guard refuses to silently drop leads without webhook.
- Webhook delivery has timeout and non-2xx failure handling.
- Local dev JSONL exists.

Problems / risks:

- No actual production sink documented as configured. `QUOTE_WEBHOOK_URL` is still a deployment/business task.
- Privacy policy missing despite PII capture.
- Form visually asks for photos, but photos are not actually uploaded/stored. Current copy says “Upload Photos” in several places; this must be clarified or implemented.
- Lead quality needs fields like address/city, charger model, panel photo intent, and notes eventually, but do not overcomplicate before sink works.

Priority: P0 production lead sink + Privacy/Terms; P1 photo upload reality.

### 3.5 Compliance / Trust

What is good:

- Strong disclaimers on Tesla, PSE&G, JCP&L pages.
- No fake reviews detected in current codebase.
- No Tesla logos/assets.
- Electrical safety caveats exist.

Problems / risks:

- “never shared” is wrong for a lead-gen platform.
- Placeholder partner CTAs point nowhere.
- If no electrician partner is under contract, claims should consistently say “where available.”
- Missing Privacy/Terms pages is the biggest compliance gap.

Priority: P0.

---

## 4. Updated Priority Roadmap

### P0 — Fix Before More SEO Pages

#### Slice P0.1: Privacy + Terms + copy cleanup

**Objective:** Remove trust leaks and make PII/lead-gen posture defensible.

**Files:**
- Create: `src/app/privacy/page.tsx`
- Create: `src/app/terms/page.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/page.tsx`
- Modify: `src/components/FaqSection.tsx`
- Modify: `src/components/QuoteForm.tsx` if needed

**Requirements:**
1. Build simple Privacy Policy page explaining:
   - what data is collected
   - quote request purpose
   - sharing with independent electricians/contractors or service providers where needed
   - webhook/service-provider processing
   - no sale of personal info claim only if accurate
   - contact placeholder without fake email if not ready
2. Build Terms page explaining:
   - PlugWise is a quote coordination platform
   - not an electrical contractor
   - no guarantee of availability, pricing, rebates, or timeline
   - electrical work by independent licensed contractors where available
   - no affiliation with Tesla/utilities
3. Replace “Your information is safe and never shared” with safer language.
4. Replace homepage/FAQ cost structured data from `$800-$2,500` to scenario-based language or align to cost page ranges.
5. Remove/fix `href="#"` placeholders in `FaqSection.tsx`.
6. Add Privacy/Terms to sitemap and footer links where relevant.

**Verification:**
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `git diff --check`
- Check no broken internal links remain.

**Commit:**
- `git commit -m "chore: add legal pages and clean trust copy"`

#### Slice P0.2: Production lead sink verification

**Objective:** Make sure leads do not disappear in production.

**Files:**
- Modify: `README.md`
- Optional modify: `.env.example` if missing
- Optional modify: `src/app/api/quote/route.ts` only if gaps are found

**Requirements:**
1. Add `.env.example` with `QUOTE_WEBHOOK_URL=[REDACTED]` if not present.
2. README must explain dev JSONL vs production webhook.
3. Verify production behavior with local env simulation if practical.
4. Decide actual sink: Airtable webhook, Make/Zapier, email relay, or CRM.
5. Add a lightweight operational runbook: where leads go, what failure looks like, who checks it.

**Verification:**
- Submit local test lead.
- Confirm `.data/quote-leads.jsonl` receives dev lead when no webhook.
- Confirm webhook failure returns visible safe error when configured to a bad sink.

**Commit:**
- `git commit -m "docs: document PlugWise lead delivery setup"`

---

### P1 — Trust / Support Pages Before Local Pages

#### Slice P1.1: `/ev-charger-permit-nj`

**Objective:** Capture permit/safety anxiety and strengthen E-E-A-T for electrical work.

**Target intent:** EV charger permit NJ, do I need permit for EV charger, Level 2 permit NJ.

**Page requirements:**
- Clear permit/inspection explanation.
- AHJ caveat: requirements vary by municipality.
- Licensed electrician language.
- Links to service hub, cost, Level 2, quote form.
- FAQPage + BreadcrumbList only.
- No legal advice posture.

**Commit:**
- `feat: add NJ EV charger permit guide`

#### Slice P1.2: `/can-my-panel-support-ev-charger`

**Objective:** Turn panel-capacity anxiety into photo-quote leads.

**Target intent:** can my panel support EV charger, panel upgrade EV charger, 100 amp panel EV charger, load management EVEMS.

**Page requirements:**
- Explain 100A vs 200A, spare capacity, load calculation, EVEMS/load management.
- Strong “send panel photo” CTA.
- No deterministic electrical advice without review.
- Links to cost, Level 2, Tesla, quote.

**Commit:**
- `feat: add EV charger panel capacity guide`

#### Slice P1.3: `/nema-14-50-vs-hardwired-ev-charger`

**Objective:** Support Tesla/Level 2 technical comparison and capture high-CPC long-tail.

**Target intent:** NEMA 14-50 vs hardwired EV charger, NEMA 14-50 installation, hardwired EV charger installation.

**Page requirements:**
- Comparison table.
- GFCI/code caveats.
- Outdoor/hardwired caveats.
- Link to Tesla, Level 2, cost, quote.

**Commit:**
- `feat: add NEMA 14-50 vs hardwired EV charger guide`

---

### P2 — Local SEO Test Batch Only After P0/P1

Do not mass-generate city pages. Use a 5-page test batch based on prior Semrush signals and only if the lead sink + partner/outreach path exists.

Test batch:

1. `/ev-charger-installation-brick-nj`
2. `/ev-charger-installation-old-bridge-nj`
3. `/ev-charger-installation-red-bank-nj`
4. `/ev-charger-installation-bridgewater-nj`
5. `/ev-charger-installation-somerset-county-nj`

Each local page must include:

- Unique service-area context.
- Nearby towns.
- Utility territory caveat.
- Permit/AHJ caveat.
- No fake local job photos.
- No fake reviews.
- No claim “we installed in X” unless true.
- Internal links to service hub, cost, permit, rebates, quote.

Decision gate before local pages:

- Production lead sink works.
- At least one electrician/partner/outreach path exists.
- Privacy/Terms live.
- Search Console submitted.

---

### P3 — Business Expansion Pages

Only after residential funnel has evidence:

- `/commercial-ev-charger-installation-nj`
- `/condo-apartment-ev-charger-installation-nj`
- `/es/instalacion-cargador-ev-nj`
- `/for-electricians`

These are strategically good, but premature until fulfillment and lead routing are real.

---

## 5. Measurement Plan

### Must install / configure

1. Google Search Console for `plugwisenj.com`.
2. Submit sitemap: `https://plugwisenj.com/sitemap.xml`.
3. Analytics event for quote form submit success.
4. Server-side lead delivery alerting/log visibility.
5. A simple lead quality tracker: route, utility, ZIP, charger, timestamp, outcome.

### Track weekly

- Impressions by page.
- Clicks by page.
- Queries by page.
- Quote starts vs quote submits.
- Lead quality by ZIP/utility.
- Pages with impressions but low CTR.
- Broken links and 404s.

---

## 6. Current Known Issues Register

| Severity | Issue | Why it matters | Fix slice |
|---:|---|---|---|
| P0 | `/privacy` linked but missing | Trust/legal/PII capture | P0.1 |
| P0 | No Terms/platform disclosure page | Lead-gen compliance | P0.1 |
| P0 | “never shared” language | Contradicts lead routing | P0.1 |
| P0 | Stale `$800-$2,500` FAQ/schema | Inconsistent with cost page | P0.1 |
| P0 | `href="#"` placeholders | Trust/UX rot | P0.1 |
| P0 | Production sink not operationally documented | Leads may be lost | P0.2 |
| P1 | Photo upload is visual only | Promise/reality mismatch | P0.1/P1 |
| P1 | No permit page | Missing trust support | P1.1 |
| P1 | No panel support page | Missing lead magnet | P1.2 |
| P1 | No stable last-updated pattern for rebate pages | Rebate trust | Future content refresh |
| P2 | No local proof | Blocks city-page scaling | P2 gate |

---

## 7. Stop Conditions

Stop building new SEO pages if any of these are true:

- Quote form cannot deliver leads in production.
- Privacy/Terms are missing.
- Compliance language implies PlugWise is the electrician.
- Rebate pages contain unverified amounts/status.
- City pages would be city-name-swapped templates without local proof.
- No partner/outreach plan exists for monetizing leads.

---

## 8. Immediate Next Cursor Prompt

Use this as the next implementation slice:

```text
Trabajas en: /home/chris/plugwise-nj

Implement next slice: Privacy/Terms + trust-copy cleanup for PlugWise NJ.

Start:
1. Run `pwd` and confirm `/home/chris/plugwise-nj`.
2. Run `git status --short`.
3. If dirty, STOP and report.
4. Read:
   - AGENTS.md
   - CLAUDE.md
   - README.md
   - docs/plans/2026-06-07-plugwise-seo-audit-roadmap.md
   - src/app/page.tsx
   - src/components/FaqSection.tsx
   - src/components/QuoteForm.tsx
   - src/app/sitemap.ts
   - src/app/globals.css

Allowed files:
- Create: src/app/privacy/page.tsx
- Create: src/app/terms/page.tsx
- Modify: src/app/page.tsx
- Modify: src/components/FaqSection.tsx
- Modify: src/components/QuoteForm.tsx if needed
- Modify: src/app/sitemap.ts
- Modify: src/app/globals.css only if needed for simple legal-page styling

Requirements:
1. Create Privacy page explaining quote-form data collection, lead processing, sharing with independent licensed electricians/contractors/service providers where needed, webhook/service-provider processing, retention caveat, and no fake legal overpromises.
2. Create Terms page explaining PlugWise NJ is a quote coordination platform, not an electrical contractor, not affiliated with Tesla/utilities, no guarantee of price/rebate/availability/timeline, electrical work by independent licensed electricians/contractors where available.
3. Add both pages to sitemap.
4. Add Privacy/Terms footer links where natural.
5. Replace “Your information is safe and never shared” with safer copy.
6. Replace stale `$800-$2,500` FAQ/schema language with scenario-based language aligned to the cost page.
7. Remove or fix all `href="#"` placeholders in FaqSection.
8. Do not add fake contact info, fake reviews, fake credentials, or exact legal claims.
9. Do not touch lead delivery logic.

Verification:
- npm run lint
- npm run typecheck
- npm run build
- git diff --check
- run a simple internal-link check if possible

Hard stop:
Do not commit.
Do not push.

Report files changed, claims changed, sitemap entries, broken-link status, and verification results.
```

---

## 9. Verdict

PlugWise NJ should keep going, but not by adding random content. The site has enough SEO surface now. The next compounding work is trust cleanup, production lead delivery, and support pages that directly lower purchase anxiety.

BUILD the P0 cleanup. Then BUILD permit/panel/NEMA. TEST local pages only after lead routing and partner path are real.
