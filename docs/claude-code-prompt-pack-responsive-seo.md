# PlugWise NJ — Claude Code Prompt Pack: Responsive + SEO Architecture

Use this from the repo root only.

Repo: `/home/chris/plugwise-nj`
Stack: Next.js 16.2.7, React 19.2.4, TypeScript, custom CSS.
Current rule from `AGENTS.md`: this Next version may differ from older assumptions; read relevant local docs under `node_modules/next/dist/docs/` before code changes.

Important project context:
- Keep the current premium dark navy / electric blue / white PlugWise design language.
- Improve responsive behavior and SEO without flattening the visual identity.
- Variation is allowed by section/page, but do not redesign into a generic SaaS template.
- PlugWise is a quote platform / installer network, not the electrician itself.
- Avoid overclaims: no fake reviews, no fake licensed-operator claims, no Tesla/PSE&G/JCP&L affiliation claim.
- Primary CTA: `Get a quote from photos`.
- Business model: New Jersey EV charger installation lead-gen.
- Final site architecture lives at `/home/chris/plugwise-seo-research/notes/plugwise_site_architecture_v3.md`.

Verification commands for every implementation slice:
```bash
npm run lint
npm run typecheck
npm run build
```

Commit rule:
- One slice = one commit.
- Do not mix design responsiveness, SEO routing, and lead-capture backend in one giant commit.

---

## Before starting Claude Code

Run this manually in terminal:

```bash
cd /home/chris/plugwise-nj
pwd
git status --short
claude
```

Recommended Claude model:
- First/preflight and architecture slices: Opus if available, otherwise Sonnet high effort.
- Mechanical CSS polish: Sonnet is fine.

If Claude asks about trust for this folder, accept.

---

## Prompt 0 — Preflight only, no edits

Paste into Claude Code:

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Opus/Sonnet high effort

PRE-FLIGHT ONLY. Do not edit files yet.

Context:
This is PlugWise NJ, a Next.js 16.2.7 / React 19.2.4 / TypeScript project for New Jersey EV charger installation lead-gen. The current design is premium dark navy/electric blue/white with a quote-from-photos funnel. We want to keep the same visual language but improve responsive behavior and SEO architecture.

Required first steps:
1. Verify `pwd` is `/home/chris/plugwise-nj`.
2. Run `git status --short` and report existing uncommitted changes.
3. Read `AGENTS.md` and `CLAUDE.md`.
4. Read relevant Next.js 16 local docs before making later recommendations:
   - `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`
   - docs for metadata/sitemap/robots in `node_modules/next/dist/docs/01-app/03-api-reference/`
5. Inspect these files:
   - `src/app/page.tsx`
   - `src/app/layout.tsx`
   - `src/app/globals.css`
   - `src/components/QuoteForm.tsx`
   - `src/components/FaqSection.tsx`
   - `package.json`
6. Read this architecture file if available:
   - `/home/chris/plugwise-seo-research/notes/plugwise_site_architecture_v3.md`

Return:
- current app structure summary
- current design system summary
- top responsive risks
- top SEO risks
- exact proposed slice order
- files likely touched per slice

Hard stop:
Do not modify any file.
```

Expected stop point:
- Claude gives diagnosis and slice order.
- You confirm before implementation.

---

## Prompt 1 — Responsive foundation, keep design

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Sonnet high effort

Implement Slice 1: responsive foundation only.

Goal:
Keep the existing PlugWise visual identity, but make the current page robust on mobile, tablet, laptop, and desktop. Do not redesign the brand. Improve layout behavior, spacing, touch targets, and overflow issues.

Scope:
- Modify CSS/layout only where needed.
- Prefer editing `src/app/globals.css` and minimal className markup in `src/app/page.tsx` / components if necessary.
- Preserve the premium dark navy/electric blue/white design language.
- Preserve the existing quote form and content hierarchy.

Required checks before editing:
1. Re-read `AGENTS.md`.
2. Re-check `git status --short`.
3. Inspect `src/app/globals.css`, `src/app/page.tsx`, `src/components/QuoteForm.tsx`, `src/components/FaqSection.tsx`.

Responsive acceptance criteria:
- No horizontal overflow at 360px, 390px, 768px, 1024px, and desktop widths.
- Hero stacks cleanly on mobile: copy first, CTA visible, quote form reachable without weird squeezing.
- Top nav does not break on mobile. If needed, simplify/hide secondary nav items rather than cramming them.
- Buttons and form fields have usable touch targets.
- Quote form fields are readable and not too cramped.
- Cards/grids collapse intentionally, not accidentally.
- SVG NJ map does not dominate mobile viewport.
- Typography uses responsive sizing where needed: `clamp()` is acceptable.
- Keep visual polish: gradients, electric accents, cards, and shadows can remain.

Non-goals:
- Do not add new SEO pages yet.
- Do not change lead capture behavior.
- Do not rewrite the whole homepage.
- Do not introduce Tailwind classes; this project uses custom CSS.

Verification:
Run:
```bash
npm run lint
npm run typecheck
npm run build
```

Also manually inspect generated/mobile behavior if possible with browser/dev server. If not possible, state that visual QA remains manual.

Commit:
```bash
git add src/app/globals.css src/app/page.tsx src/components/QuoteForm.tsx src/components/FaqSection.tsx
git commit -m "fix: improve PlugWise responsive layout"
```

Hard stop:
Stop after this commit. Report changed files, verification results, and any remaining visual QA notes.
```

---

## Prompt 2 — SEO technical foundation: metadata, sitemap, robots, schema safety

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Opus/Sonnet high effort

Implement Slice 2: SEO technical foundation.

Goal:
Improve technical SEO for the existing site without creating new landing pages yet.

Context:
PlugWise NJ is a lead-gen quote platform. It connects homeowners with independent licensed electricians where available. It is not itself the electrical contractor unless future business facts change.

Required docs:
Before editing, read relevant local Next.js 16 docs under `node_modules/next/dist/docs/01-app/03-api-reference/` for:
- metadata
- sitemap
- robots
- JSON-LD/script behavior if relevant

Files likely touched:
- `src/app/layout.tsx`
- create `src/app/sitemap.ts` if missing
- create `src/app/robots.ts` if missing
- maybe create reusable SEO constants if useful, but avoid overengineering

Acceptance criteria:
1. Metadata accurately targets PlugWise NJ and main service intent.
2. Canonical/base URL is correct for `https://plugwisenj.com` unless env/project says otherwise.
3. Add `sitemap.ts` with entries for current homepage and known planned URLs if appropriate. If planned routes do not exist yet, either omit them or add only when pages are created; explain choice.
4. Add `robots.ts` allowing crawl of public pages.
5. JSON-LD should not overclaim LocalBusiness contractor status. Prefer `Organization` + `Service` style, or make description explicitly say quote platform/installer network.
6. Add/keep OpenGraph and Twitter metadata.
7. Avoid deprecated Next.js metadata patterns for v16.

Non-goals:
- Do not create PSE&G/cost/Tesla pages in this slice.
- Do not redesign UI.
- Do not implement lead backend.

Verification:
```bash
npm run lint
npm run typecheck
npm run build
```

Commit:
```bash
git add src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts
 git commit -m "feat: add PlugWise SEO technical foundation"
```

Hard stop:
Stop after commit and summarize exact SEO changes.
```

---

## Prompt 3 — Compliance and copy cleanup without killing conversion

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Sonnet high effort

Implement Slice 3: compliance-safe conversion copy.

Goal:
Keep conversion strong, but remove language that implies PlugWise itself is the licensed electrical contractor or affiliated with utilities/Tesla.

Files likely touched:
- `src/app/page.tsx`
- `src/components/FaqSection.tsx`
- maybe `src/app/layout.tsx` if schema description needs adjustment

Copy rules:
Use language like:
- `qualified NJ electrician network`
- `independent licensed electricians where available`
- `get a quote from photos`
- `permit and code guidance`

Avoid unless verified:
- `we install`
- `our licensed electricians` if it implies employment
- `Tesla certified`
- `PSE&G approved`
- fake reviews/ratings
- guarantee language

Add a visible footer/disclaimer block somewhere appropriate:
`PlugWise NJ is a quote request platform. Electrical work is performed by independent licensed electricians/contractors where available. PlugWise NJ is not affiliated with Tesla, PSE&G, JCP&L, Atlantic City Electric, or any utility.`

Acceptance criteria:
- Copy remains persuasive, not legal sludge.
- CTA remains prominent.
- No visual redesign.
- No broken layout.

Verification:
```bash
npm run lint
npm run typecheck
npm run build
```

Commit:
```bash
git add src/app/page.tsx src/components/FaqSection.tsx src/app/layout.tsx
 git commit -m "chore: clarify PlugWise marketplace positioning"
```

Hard stop:
Stop after commit.
```

---

## Prompt 4 — Create main service route if homepage remains `/`

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Opus/Sonnet high effort

Implement Slice 4: main service hub route.

Goal:
Create `/ev-charger-installation-nj/` as the canonical main service page while preserving the existing homepage design. We can reuse the existing homepage sections/components. Keep design language consistent, but allow small variations to avoid duplicate-feeling pages.

Context:
Final architecture says `/ev-charger-installation-nj/` is the main money hub.
Target keywords:
- ev charger installation
- ev charger installation near me
- ev charger installers near me
- ev charger installation nj
- home ev charger installation

Files likely touched/created:
- create `src/app/ev-charger-installation-nj/page.tsx`
- maybe extract reusable sections/components only if it prevents obvious duplication; don't overengineer
- update homepage internal link if needed

Page requirements:
1. H1: `Get a Level 2 EV Charger Installed in New Jersey` or similar keyword-literal headline.
2. Quote-from-photos CTA above fold.
3. Explain photo-based quote flow.
4. Cost preview linking to future/current `/ev-charger-installation-cost-nj/` only if route exists; otherwise mark as planned internal link only if implemented in same slice. Do not create broken links.
5. Rebate preview for PSE&G/JCP&L; avoid broken links unless route exists.
6. Service-area module with crawlable text mentioning Brick, Old Bridge, Red Bank, Bridgewater, Somerset County, Clinton, Westfield, Middletown, Howell, Monmouth County, Union County.
7. Permit/code overview.
8. FAQ.
9. Marketplace disclaimer.
10. Metadata for this route.

Non-goals:
- Do not create PSE&G/cost/Tesla pages yet unless explicitly requested.
- Do not mass-create city pages.

Verification:
```bash
npm run lint
npm run typecheck
npm run build
```

Commit:
```bash
git add src/app/ev-charger-installation-nj src/app/page.tsx src/app/sitemap.ts
 git commit -m "feat: add NJ EV charger installation service hub"
```

Hard stop:
Stop after commit.
```

---

## Prompt 5 — First content page: PSE&G rebate wedge

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Opus/Sonnet high effort

Implement Slice 5: PSE&G rebate landing page.

Goal:
Create `/pseg-ev-charger-rebate/` as the highest-opportunity SEO wedge while keeping PlugWise design consistent with the current site.

Target keywords:
- pseg ev charger rebate
- pseg ev charger rebate nj
- pseg nj ev charger rebate
- pseg ev charger program
- pse&g ev charging program
- pseg charger rebate

Critical compliance:
- Do not claim affiliation with PSE&G.
- Do not invent current rebate amounts unless you verify from official PSE&G pages during this task and cite/source them in the content.
- Include `Last updated` date.

Files:
- create `src/app/pseg-ev-charger-rebate/page.tsx`
- update internal links from main hub/homepage if routes exist
- update sitemap

Page sections:
1. Hero: `PSE&G EV Charger Rebate Guide for New Jersey Homeowners`
2. CTA: `Check rebate fit and get an installation quote from photos`
3. What the PSE&G EV charging program is.
4. Eligibility checklist.
5. What to confirm before applying.
6. Why panel capacity/install location affects both rebate and quote.
7. Quote form/CTA.
8. FAQ using target variants.
9. Official-source links and no-affiliation disclaimer.

Design:
- Same PlugWise premium system.
- Vary layout enough: checklist cards, eligibility panel, steps/timeline, utility disclaimer card.

Verification:
```bash
npm run lint
npm run typecheck
npm run build
```

Commit:
```bash
git add src/app/pseg-ev-charger-rebate src/app/page.tsx src/app/ev-charger-installation-nj src/app/sitemap.ts
 git commit -m "feat: add PSEG EV charger rebate page"
```

Hard stop:
Stop after commit.
```

---

## Prompt 6 — Review pass: responsive + SEO QA

```text
Trabajas en: /home/chris/plugwise-nj
Modelo recomendado: Opus/Sonnet high effort

Perform a review pass only first, then apply small fixes if needed.

Goal:
Check the current PlugWise site for responsive, SEO, accessibility, and compliance issues after recent changes.

Review checklist:
1. `git status --short`
2. Check route structure under `src/app`.
3. Inspect metadata for homepage and created pages.
4. Inspect sitemap/robots output implementation.
5. Inspect all CTAs and internal links for broken routes.
6. Check compliance language around licensed electricians, Tesla, PSE&G, JCP&L.
7. Check accessibility basics: labels, buttons, contrast risks, heading order.
8. Check responsive CSS for overflow and breakpoint issues.

Then fix only small issues discovered. Do not add new pages in this prompt.

Verification:
```bash
npm run lint
npm run typecheck
npm run build
```

Commit if fixes were made:
```bash
git add .
git commit -m "fix: polish PlugWise responsive SEO QA issues"
```

Hard stop:
Report findings, fixes, and remaining manual QA.
```

---

## Recommended execution order

1. Prompt 0 — preflight.
2. Prompt 1 — responsive foundation.
3. Prompt 2 — SEO technical foundation.
4. Prompt 3 — compliance copy cleanup.
5. Prompt 4 — main service hub route.
6. Prompt 5 — PSE&G page.
7. Prompt 6 — QA pass.

Do not run all prompts at once. One prompt, verify, commit, then next.
