# Holoconnects website — shared brief for Claude sessions

> **Read this first.** Multiple Claude Code sessions work on this repo in
> parallel (same folder, same git repo). This file is the shared memory.
> Keep it current when you change architecture, conventions, or who-does-what.

## What this is

Marketing-site rebuild of holoconnects.com (life-size holographic displays).
**Astro 5**, static output, no React. Custom motion system (Lenis smooth scroll,
3D tilt, view transitions, canvas hologram hero).

```bash
npm install      # @astrojs/sitemap + astro + lenis
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
```

## Deploy

- Repo: `mpwlock-afk/mpwlock-afk.github.io` (public, GitHub user-site).
- **Auto-deploys on every push to `main`** via `.github/workflows/deploy.yml`
  (GitHub Actions → Pages). Live: https://mpwlock-afk.github.io/
- Served at **root**, so absolute paths (`/images/…`, `/demo`) are correct.
  Do NOT add an Astro `base` path — it would break every hardcoded link.
- Custom domain (holoconnects.com) is **deferred** — old site still live on
  Vercel; go-live = DNS cutover later. CNAME intentionally absent.
- Contact form delivers via FormSubmit to `PUBLIC_CONTACT_INBOX`
  (local `.env`, CI = repo secret `CONTACT_INBOX`). Email is NOT in source.

## ⚠️ Working in parallel — protocol

Both sessions edit the **same files on one disk / one git repo**. There is no
lock. To avoid clobbering each other:

1. **Commit small and often.** A clean tree is the handoff. Don't sit on big
   uncommitted changes.
2. **Re-read before editing** a shared file (Edit fails safely on stale reads —
   that's the other session having touched it; re-read and retry).
3. **Stay in your lane** (see workstreams). Avoid two sessions editing the same
   file/section at once.
4. `git status` / `git log --oneline -5` to see what the other session just did.
   Local == origin means it's all pushed.

## Workstreams (who owns what)

- **Session A — visuals / product:** renders & imagery, size-range, forms
  (contact + demo), motion system (`src/scripts/motion.ts`), GitHub Pages setup.
- **Session B — SEO / go-live:** meta + JSON-LD, sitemap, dynamic sector pages
  (`src/pages/sectors/`), copy polish, logo/header, `docs/seo/*`.

(Adjust this list as roles shift — it's a hint, not a fence.)

## Current state / open items

- **Holobox renders:** need clean uniform per-size renders in BLACK + WHITE for
  22" / 43" / 75" / 86". Live site fetch is 403-blocked; the pasted quotation
  isn't accessible as a file → user supplies them in `public/images/`.
  - 75" currently reuses the 86" render as a stand-in.
  - 22" uses the black-bg `holobox-mini.jpg`.
  - White set missing → colour switch stays hidden until all whites exist.
- **Size-range section** lives in `src/components/SizeRange.astro` (used on the
  homepage) AND inline in `src/pages/products/index.astro`.
  **TODO: de-dupe** — make products/index use `<SizeRange />` too.

## Key conventions

- Astro scopes `<style>`; selectors on `document.body` (e.g. `.menu-open`,
  `.lenis`) need `:global()`.
- Entrance reveals use `@keyframes` + a rect-based check in `motion.ts` (NOT
  IntersectionObserver — it didn't fire reliably). `motion.ts` re-inits on
  `astro:page-load`; per-element wiring is guarded with `data-*` flags.
- `[data-parallax]` images must be oversized (e.g. `inset:-10%`) or they clip.
- Brand palette: black/white + gold (`--gold` #c87800 → `--gold-bright` #ea9914).
  Fonts: Clash Display (display) + Satoshi (body) via Fontshare.
- Real content/photos come from the live site; `src/data/site.ts` is the
  single source for nav, products, sectors, cases, testimonials, offices.

## Docs

- `docs/agent-log.md` — running architecture log.
- `docs/seo/` — SEO action plan, keyword map, backlinks, competitor analysis.
