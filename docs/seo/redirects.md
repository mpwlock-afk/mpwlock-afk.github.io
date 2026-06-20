# Legacy URL redirects (old WordPress → new Astro)

The rebuild changed URL slugs. Every old URL that has backlinks or rankings must
redirect to its new equivalent, or that link equity is lost (a 404 passes no
authority). This is one of the three diagnosed causes of the ranking drop, see
`ACTION-PLAN.md` §Diagnose.

## How it works here

- The map lives in **`src/data/redirects.ts`** as `{ from, to }` pairs.
- **`src/pages/[...legacy].astro`** generates a static stub at each old path with:
  - `rel="canonical"` → new URL (consolidates link equity),
  - `<meta http-equiv="refresh">` + inline JS (sends the visitor on),
  - `robots: noindex, follow` (the stub itself stays out of the index).
- Astro's catch-all route has the lowest priority, so these stubs never shadow a
  real page; they only fire for paths that would otherwise 404.

## ⚠️ GitHub Pages limitation — these are NOT true 301s

GitHub Pages serves every file with HTTP `200`. A meta-refresh stub is the best
available fallback on Pages, but Google treats a `301` far more strongly for
passing ranking signals. **Two ways to get real 301s:**

1. **Cloudflare in front (recommended).** Point the domain through Cloudflare and
   add the same map as **Bulk Redirects** (301). Keep `redirects.ts` as the
   single source of truth and mirror it into the Cloudflare list.
2. **Move hosting to Netlify/Vercel**, which support `_redirects` / `vercel.json`
   with real 301 status codes.

Until then, the meta-refresh + canonical stubs preserve most of the value.

## ✅ Action required before go-live

The map in `redirects.ts` is the **high-confidence/inferred** set only. Do this:

1. Open the **old** Search Console property (or Ahrefs → *Best by links*) and
   export every indexed/linked old URL.
2. Add each `{ from, to }` to `src/data/redirects.ts`. Cover trailing-slash and
   `/index.html` variants if they appear in the data.
3. Rebuild; each new entry produces a stub automatically.
4. If using Cloudflare, mirror the final list into Bulk Redirects as 301s.

## Current map

See `src/data/redirects.ts`. Covers company (`/about-our-company`, `/contact-us`),
products (`/holobox`, `/holobox-mini`), sectors (`/hospitality`, `/healthcare`,
`/retail`) and content (`/blog` → `/news/`).

Note: `/news/holographic-displays/` is now a **real published article** (the
cornerstone "What is a hologram display" guide), so the old URL that ranked for
the head term resolves with a 200 again — no redirect needed.
