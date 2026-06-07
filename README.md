# PlugWise NJ

**SEO-optimized lead-generation landing page for Level 2 EV charger installation in New Jersey.**

Connects homeowners with licensed NJ electricians through a photo-based quote form. Covers cost factors, utility rebates (PSE&G, JCP&L, Atlantic City Electric, NJ Clean Energy), permit guidance, and supported charger brands.

---

## Stack

- **Next.js 16** (App Router, static export)
- **React 19** with Server Components
- **TypeScript**
- Custom CSS with CSS variables (design-system tokens, no Tailwind in components)
- `next/font` for Inter + Manrope (self-hosted, zero layout shift)

---

## Sections

| Section | Description |
|---|---|
| Hero | Dark navy + glowing NJ map, 11-step floating quote form |
| How It Works | 4-step process grid |
| Cost Factors | 6-card grid of install variables |
| Rebates | PSE&G, JCP&L, Atlantic City Electric, NJ Clean Energy |
| Chargers | Tesla Wall Connector, ChargePoint, Wallbox, Emporia, NEMA 14-50 |
| FAQ | Accordion with 6 common questions + electrician CTA card |
| Trust Strip | Privacy, verified electricians, permit guidance, 5-star |
| Footer | Nav links, NJ county service area, NJ outline SVG |

---

## SEO

- `title`, `description`, `keywords` via Next.js Metadata API
- Open Graph + Twitter Card tags
- `LocalBusiness` + `Service` JSON-LD structured data
- `canonical` URL and `robots` directives
- Semantic HTML with `aria-*` attributes throughout

---

## Dev

```bash
npm install
npm run dev        # localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run lint:fix   # eslint --fix
```

---

## Deploy

Vercel auto-detects Next.js 16. Connect the repo from the Vercel dashboard — no extra config needed.

For environment variables (form backend, analytics): add via `vercel env add` or the dashboard, then `vercel env pull .env.local` locally.

---

## CI

GitHub Actions runs on every push and PR to `main`:

```
npm ci → npm run build → tsc --noEmit
```

See `.github/workflows/ci.yml`.

---

## Project structure

```
src/
  app/
    globals.css        # All CSS variables and layout styles
    layout.tsx         # Root layout, fonts, SEO metadata, JSON-LD
    page.tsx           # Main landing page (server component)
  components/
    QuoteForm.tsx      # Interactive 11-step quote form (client)
    FaqSection.tsx     # FAQ accordion + electrician CTA (client)
public/                # Static assets (favicons, OG image)
.github/workflows/
  ci.yml               # Build + typecheck on push/PR
```
