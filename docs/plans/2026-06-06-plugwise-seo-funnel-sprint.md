# PlugWise NJ SEO + Funnel Sprint Plan

> For Hermes/Cursor: Execute as small prompt-pack slices. One slice = one commit. Do not expand scope into 50 city pages or brand redesign.

Goal: Turn PlugWise NJ from a polished landing page into a conversion-first EV charger installation lead-gen asset targeting New Jersey search demand.

Architecture: Keep the current Next.js 16 app and add SEO landing pages as focused routes under `src/app`. Reuse the existing visual system and quote form patterns, but make the form actually capture leads. Prioritize PSE&G rebate + near-me/core installation demand before broad city-page expansion.

Tech Stack: Next.js 16.2.7, React 19.2.4, TypeScript, custom CSS in `src/app/globals.css`.

Data inputs reviewed:
- Screenshots from SEMrush Keyword Overview, New Jersey state filter, 2026-06-06.
- `/home/chris/Downloads/ev charger installer nj.csv`
- `/home/chris/Downloads/ev charger installation nj.csv`

## Brutal Summary

The best wedge is not generic `EV charger installation NJ` alone. The strongest near-term play is:

1. Main service page for broad/near-me intent.
2. PSE&G rebate page as the SEO wedge.
3. Cost page to catch anxiety and prequalify.
4. A small city/county test based on Semrush exports, not mass doorway pages.
5. Functional lead capture before more content.

Do not build 50 local pages yet. The CSV reveals local modifiers like Brick, Old Bridge, Red Bank, Bridgewater, Somerset County, Westfield. Those are useful test pages later, but only after we can capture and route leads.

## Keyword Evidence

### Screenshot: `ev charger installation near me`
- Location: New Jersey
- Local volume: 880
- KD: 45%, possible
- Intent: Transactional
- CPC: $9.59 local / $13.39 US
- Competition: 0.57 local / 0.22 US
- US volume: 27.1K
- Variations visible:
  - ev charger installation near me — 27.1K US, KD 47
  - ev charger installers near me — 1.6K US, KD 39
  - ev charging installation near me — 1.0K US, KD 44
  - ev charger install near me — 480 US, KD 41
  - ev charger installer near me — 390 US, KD 34
- Related visible:
  - ev charger installations near me — 110 US, KD 32
  - home ev charger installation near me — 260 US, KD 40
  - electric car charger installation near me — 3.6K US, KD 36
  - electric car charging installers near me — 90 US, KD 34
  - ev charger installation service near me — 40 US, KD 35

Interpretation: This is the main money intent. It deserves the homepage/main service page and strong local CTA. Harder than PSE&G, but absolutely worth targeting.

### Screenshot: `home ev charger installation nj`
- Location: New Jersey
- Local volume: n/d
- KD: 29%, simple
- Intent: Informational
- CPC: n/d
- Competition: n/d

Interpretation: Too sparse as exact-match seed. Use the language inside the main page and cost page; don't create a dedicated page just for this exact phrase yet.

### Screenshot: `pseg ev charger rebate`
- Location: New Jersey
- Local volume: 590
- KD: 22%, simple
- Intent: Informational
- CPC: $3.57 local / $1.94 US
- Competition: 0.02 local / 0.17 US
- US volume: 720
- Variations visible:
  - pseg ev charger rebate — 720 US, KD 27
  - pseg ev charger rebate nj — 210 US, KD 29
  - pseg li ev charger rebate — 70 US, KD 28
  - pseg long island ev charger rebate — 50 US, KD 26
  - pseg nj ev charger rebate — 50 US, KD 21
- Related visible:
  - pseg electric car charger rebate — 30 US, KD 29
  - pseg ev rebate — 110 US, KD 26
  - pseg electric charger rebate — 30 US, KD 28
  - pseg ev charger program — 40 US, KD 32
  - pseg rebate ev charger — 30 US, KD 20

Interpretation: This is the wedge. Low competition, real NJ volume, strong practical anxiety, and ties directly to quote intent. Build this first after lead capture is minimally functional.

### Screenshot: `pseg ev charger installation rebate`
- Location: New Jersey
- Local volume: 0
- KD: 25%, simple
- Intent: Informational + Transactional
- US volume: 20
- Local CPC: n/d
- Competition: n/d
- Variations visible:
  - pseg ev charger installation rebate — 20 US
  - pseg rebate for ev charger installation — 20 US
  - pseg $1500 rebate for ev charger installation — 0 US

Interpretation: Do not target this as a separate page. Fold it into `/pseg-ev-charger-rebate/` as an H2/FAQ.

### Screenshot: `pseg ev charger program`
- Location: New Jersey
- Local volume: 0
- KD: 31%, possible
- Intent: Informational + Transactional
- US volume: 40
- US CPC: $2.07
- US competition: 0.11
- Variations visible:
  - pseg ev charging program — 50 US, KD 34
  - pseg ev charger program — 40 US, KD 32
  - pseg ev residential charging program — 20 US
- Related visible:
  - pseg electric vehicle rebate — 30 US, KD 24
  - pseg electric car charger rebate — 30 US, KD 29
  - pseg charger rebate — 90 US, KD 29
  - pseg ev program — 260 US, KD 31
  - pseg electric vehicle charging program — 70 US, KD 35

Interpretation: Supporting section inside the rebate page, not standalone yet.

## CSV Evidence

Both downloaded CSVs are identical: 26 rows each.

Top rows by volume:
- ev charger installation brick nj — 70 volume, commercial, KD 0, local pack present
- ev charger installation cost nj — 50 volume, informational, KD 0
- ev charger installation in old bridge nj — 50 volume, informational, KD 0, local pack present
- ev charger installation red bank nj — 50 volume
- ev charger installation bridgewater nj — 40 volume, KD 0, local pack present
- ev charger installation clinton nj — 40 volume, KD 1, local pack present
- ev charger installation neptune city nj — 40 volume
- ev charger installation somerset county nj — 40 volume, commercial, KD 0, local pack present
- ev charger installation westfield nj — 40 volume
- ev charger installation belmar nj — 30 volume
- ev charger installation lebanon nj — 30 volume
- ev charger installation middletown nj — 30 volume
- ev charging station installer howell nj — 30 volume
- nj ev charger installation rebate — 30 volume, informational, KD 22, CPC $2.45
- ev charger installation nj — 20 volume, CPC $14.55

Interpretation: Semrush exact-match local-city exports show low volumes but very weak competition. This supports a later local-page test, not immediate mass generation.

## P0 Implementation Slices

### Slice 1: Compliance and positioning cleanup

Objective: Remove overclaims and make marketplace/lead-gen posture safer.

Files:
- Modify: `src/app/page.tsx`
- Modify: `src/components/FaqSection.tsx`
- Modify: `src/app/layout.tsx`

Tasks:
1. Replace overly direct claims like `Licensed Electricians` where ambiguous with `Independent Licensed Electricians` or `Qualified NJ Electrician Network`.
2. Replace `We Check Factors` with `Your Photos Help Scope the Job`.
3. Replace `Professional installation with permit handling...` with `If you choose a partner electrician, they handle installation, permits, and inspection steps.`
4. Add disclosure near footer or FAQ: `PlugWise NJ is a quote request platform. Electrical work is performed by independent licensed electricians/contractors where available. PlugWise is not affiliated with Tesla, PSE&G, JCP&L, Atlantic City Electric, or any utility.`
5. Keep design intact.

Verification:
- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`

Commit:
- `git commit -m "chore: clarify PlugWise marketplace positioning"`

### Slice 2: Make quote form capture leads

Objective: Convert the existing visual form into a real lead capture path.

Files:
- Modify: `src/components/QuoteForm.tsx`
- Create: `src/app/api/quote/route.ts`
- Optional create: `src/lib/quoteLead.ts`

Requirements:
1. Add controlled form state for all fields.
2. Name all fields.
3. On submit, POST JSON to `/api/quote`.
4. For v1, store lead as JSONL locally in `.data/quote-leads.jsonl` during development OR send to a configured webhook/email if env var exists.
5. Do not attempt production file writes on Vercel as final architecture. Local JSONL is acceptable for MVP dev only.
6. Show success/error states.
7. Keep uploads as optional metadata for now unless implementing file storage deliberately.

Minimum submitted fields:
- zip
- evModel
- chargerPurchased
- installLocation
- utilityProvider
- panelAmperage
- distance
- timeline
- email
- phone

Verification:
- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`
- Manual test: submit form locally and confirm successful response.

Commit:
- `git commit -m "feat: capture EV charger quote leads"`

### Slice 3: Add PSE&G rebate SEO landing page

Objective: Build the highest-opportunity wedge page from SEMrush data.

Files:
- Create: `src/app/pseg-ev-charger-rebate/page.tsx`
- Reuse/import: `QuoteForm`
- Maybe modify: `src/app/globals.css` only if needed

Target keywords:
- pseg ev charger rebate
- pseg ev charger rebate nj
- pseg nj ev charger rebate
- pseg ev charger program
- pseg ev charging program
- pseg rebate for ev charger installation

Page structure:
1. H1: `PSE&G EV Charger Rebate Guide for New Jersey Homeowners`
2. Above-fold CTA: `Check rebate eligibility and get an installation quote from photos`
3. What the PSE&G EV charger rebate/program is
4. Eligibility caveats with last-updated date
5. Why quote-from-photos matters before applying/choosing charger
6. Installation cost drivers
7. Permit/inspection notes
8. FAQ targeting the visible Semrush variants
9. CTA form
10. Utility affiliation disclaimer

Do not invent exact rebate amounts unless verified from official PSE&G docs in the same implementation slice.

Metadata:
- title: `PSE&G EV Charger Rebate Guide NJ | PlugWise NJ`
- description: `Learn how PSE&G EV charger rebates work in New Jersey, what affects installation cost, and request a quote from photos through PlugWise NJ.`
- canonical: `/pseg-ev-charger-rebate/`

Verification:
- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`

Commit:
- `git commit -m "feat: add PSEG EV charger rebate landing page"`

### Slice 4: Add cost landing page

Objective: Capture cost-anxiety traffic and prequalify leads.

Files:
- Create: `src/app/ev-charger-installation-cost-nj/page.tsx`

Target keywords:
- ev charger installation cost nj
- home ev charger installation cost nj
- level 2 charger installation cost
- tesla wall connector installation cost

Page structure:
1. H1: `EV Charger Installation Cost in New Jersey`
2. Cost range with caveat. Avoid fake precision.
3. Cost drivers: panel, distance, trenching, outdoor, charger type, permit, panel upgrade.
4. Quote-from-photos explainer.
5. PSE&G/JCP&L/utility rebate section linking to rebate page.
6. FAQ.
7. CTA form.

Verification:
- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`

Commit:
- `git commit -m "feat: add NJ EV charger installation cost page"`

### Slice 5: Add internal links and simple sitemap/robots if missing

Objective: Make pages crawlable and connected.

Files:
- Modify: `src/app/page.tsx`
- Create: `src/app/sitemap.ts` if missing
- Create: `src/app/robots.ts` if missing

Requirements:
1. Add visible internal links from homepage to PSE&G rebate and cost page.
2. Add contextual links between PSE&G and cost pages.
3. Include canonical URLs in metadata.
4. Add sitemap entries for homepage, rebate page, cost page.
5. Add robots allowing crawl.

Verification:
- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`
- Visit `/sitemap.xml` locally if Next emits it.

Commit:
- `git commit -m "feat: add SEO crawl paths for PlugWise pages"`

## P1 After P0 Is Live

Only after quote capture works and P0 pages build:

1. `/level-2-ev-charger-installation-nj/`
2. `/tesla-wall-connector-installation-nj/`
3. One city/local test batch, not mass pages:
   - `/ev-charger-installation-brick-nj/`
   - `/ev-charger-installation-old-bridge-nj/`
   - `/ev-charger-installation-red-bank-nj/`
   - `/ev-charger-installation-bridgewater-nj/`
   - `/ev-charger-installation-somerset-county-nj/`

Local-page rule: each needs unique useful content: local utility context, permit/inspection language, service-area explanation, nearby towns, and no fake job photos/reviews.

## Manual Semrush Follow-up

Use Semrush now for:
1. SERP screenshots/exports for `pseg ev charger rebate`.
2. Top 10 ranking URLs for `ev charger installation near me` with NJ filter.
3. Keyword Magic export for PSE&G cluster.
4. Competitor pages ranking for Brick / Old Bridge / Red Bank / Bridgewater.

Decision gate:
- If small local sites rank for PSE&G/rebate terms, publish immediately.
- If only utility/government pages rank, still publish, but angle must be `rebate + installation quote from photos`, not pure rebate reference.

## Stop Conditions

Stop after P0 if:
- Quote form does not capture leads.
- Build fails.
- Compliance claims are still risky.
- No sitemap/internal links exist.

Do not proceed to city pages until those are fixed.
