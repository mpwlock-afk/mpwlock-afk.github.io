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
- Custom domain (holoconnects.com) is **deferred** — CNAME intentionally absent.
  ⚠️ 2026-07-23: the domain no longer serves the old WordPress site. It now runs
  a heavily SEO-built **Next.js site behind Cloudflare** (186-URL sitemap, EN+NL,
  comparison/pricing/case/question pages — likely André's "recovery" build).
  A cutover to this rebuild as-is would 404 ~169 of those URLs. See
  `docs/seo/LIVE-VS-REBUILD-ANALYSE.md` before touching go-live or redirects.
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

## i18n (EN + NL + DE) — READ BEFORE EDITING ANY PAGE

The site is **trilingual**: English is the default at the root (`/`), Dutch under
`/nl/`, German under `/de/`. Astro native i18n, `prefixDefaultLocale: false` (see
`astro.config.mjs`). Every localized route exists in all three locales. Plus an
**EN-only `/news/` blog** (content collection) that opts out of locale alternates
via `<Base localized={false}>`. Build = 67 pages, 55 indexable URLs.

- `Loc = { en; nl; de? }` — `de` is optional; `t()` falls back to EN on a gap so
  the build never breaks. `ui.ts` chrome has full `de`. Function-valued / direct
  `copy.x[lang]` indexing MUST have a `de` key or it crashes at build (no fallback).
- `localizePath()` and `stripLangPrefix()` are **generic over `locales`** — never
  hardcode a prefix (the old 2-locale version hardcoded `nl` and broke all DE
  links + DE hreflang; fixed 2026-06-20).

**Architecture — single source, no duplicated markup:**
- Page bodies live in **view components** under `src/components/views/*.astro`,
  each taking an `interface Props { lang: Lang; … }`.
- Route files are **thin wrappers**: `src/pages/<x>.astro` renders the view with
  `lang="en"`; `src/pages/nl/<x>.astro` renders it with `lang="nl"`. Dynamic
  `[slug]` routes keep their own `getStaticPaths()` in each wrapper.
- `src/i18n/ui.ts` = locale registry + helpers (`t`, `localizePath`,
  `getLangFromUrl`, `getAlternates`, `useTranslations`) + the shared **chrome**
  dictionary (nav, footer, CTA band, buttons).
- **Content is localized in `src/data/site.ts`**: translatable fields are
  `Loc = { en, nl, de? }` (resolve with `t(field, lang)`); proper nouns / brand
  names / verbatim customer quotes stay plain strings.
- **Page-specific copy** lives in each view's local `const copy = { … }` object
  (`{ en, nl, de }` triples) — NOT in `ui.ts`. No hardcoded user-visible English.

**Rules when adding/editing pages:**
- Every internal link uses `localizePath("/path", lang)` (trailing-slashed to
  match canonical). Never hardcode `/nl/…`.
- Pass `lang={lang}` to `<Base>`, `<CtaSection>`, and shared components.
- Don't pass a `canonical` prop — `Base` derives it per-locale, and emits
  hreflang (all 3 locales + `x-default` → EN) + `og:locale`. Sitemap auto-adds
  `xhtml:link` alternates (sitemap integration `i18n` option).
- NL + DE titles/descriptions/sector copy are SEO-finalized; all
  `// TODO(native-review)` markers are removed. Long body copy is still a
  first-pass/AI translation — a native NL+DE marketing review is the remaining
  polish (see `docs/seo/i18n-native-review.md` for the original punch-list).

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
  single source for nav, products, sectors, cases, testimonials, offices —
  now **localized** (`Loc = { en, nl }`, see i18n section above).

## Docs

- `docs/agent-log.md` — running architecture log.
- `docs/seo/` — SEO action plan, keyword map, backlinks, competitor analysis.
