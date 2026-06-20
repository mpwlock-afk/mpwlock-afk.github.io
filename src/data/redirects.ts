// ── Legacy URL redirect map ──────────────────────────────────────────────
// The old WordPress site lived on different slugs. On GitHub Pages there is no
// server-side 301, so `src/pages/[...legacy].astro` emits a static stub at each
// old path with rel=canonical + meta-refresh + JS fallback to the new URL.
//
// IMPORTANT: this list is the high-confidence/inferred set. Export the REAL old
// URL list from the old Search Console property (or Ahrefs "Best by links") and
// add every entry here so no backlink or ranking 404s after the DNS cutover.
// For true 301 status codes, put Cloudflare in front and mirror this map as
// Bulk Redirects (recommended) — see docs/seo/redirects.md.

export type Redirect = { from: string; to: string };

export const redirects: Redirect[] = [
  // Company
  { from: "/about-our-company", to: "/about/" },
  { from: "/about-us", to: "/about/" },
  { from: "/contact-us", to: "/contact/" },
  // Products
  { from: "/holobox", to: "/products/holobox/" },
  { from: "/the-holobox", to: "/products/holobox/" },
  { from: "/holobox-mini", to: "/products/holobox-mini/" },
  { from: "/products-overview", to: "/products/" },
  // Sectors / use cases
  { from: "/sectors-overview", to: "/sectors/" },
  { from: "/hospitality", to: "/sectors/hospitality/" },
  { from: "/healthcare", to: "/sectors/telehealth/" },
  { from: "/retail", to: "/sectors/retail/" },
  // Content
  { from: "/blog", to: "/news/" },
];
