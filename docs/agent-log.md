# Agent Log

## Current Objective
- Rebuild the Holoconnects website with a premium, clean, Apple-inspired design language and professional animations.
- Use real content and photography sourced from `www.holoconnects.com`.
- Current phase: full multi-page site rebuilt on Astro. Old static prototype archived in `_old_static/`.

## Architecture (current)
- Stack: Astro 5 (static, no React/CDN). Run with `npm run dev` (port 4321) / `npm run build`.
- Fonts: Clash Display (display) + Satoshi (body) via Fontshare CDN.
- Palette: black/white with Holoconnects gold (#c87800 → #ea9914).
- Structure: `src/layouts/Base.astro` (head, header, footer, scroll-reveal), `src/components/` (Header, Footer, CtaSection), `src/data/site.ts` (nav, products, sectors, cases, testimonials, offices, stats), `src/styles/global.css` (design system).
- Pages: home, products (index + dynamic `[slug]` for holobox / holobox-mini / the-43 / hologrid / ai-hologram), sectors, cases, about, contact.
- Real photography downloaded into `public/images/`.
- Note: Astro scopes `<style>`; selectors targeting `document.body` (e.g. `.menu-open`) must use `:global()`.

## Motion system (src/scripts/motion.ts)
- Lenis smooth scroll (exposed as `window.lenis`), custom cursor + magnetic buttons, scroll-progress bar, grain overlay.
- Entrance reveals use `@keyframes` (not transitions — transitions got stuck mid-way) triggered by adding `.in` via a **rect-based** check (`revealCheck`) hooked to the scroll loop + run on load. IntersectionObserver was abandoned because it never fires in some embedded contexts; the rect check also uses a robust `vh()` (innerHeight can report 0 in the preview, breaking viewport math).
- Classes: `.anim`(+`-up/-scale/-left/-right`), `.kinetic[data-split]` (char split), `.reveal-lines`, `.holo-text` (shimmer gradient), `.marquee` (velocity-reactive, content auto-duplicated), `[data-parallax]` (oversize the image's container, e.g. inset:-10%, or it clips), `[data-hscroll]` (pinned horizontal scroll).
- Homepage hero = live `<canvas>` gold particle-network globe. Hospitality is the flagship section (big image-led band). Copy is intentionally terse, visuals lead.
- Verification caveat: the preview screenshot tool only reliably captures the top fold here, so below-fold sections are validated via build + numeric DOM checks, not screenshots.

## Round 3 additions (forms, 3D, view transitions, iCloud)
- **Forms**: `/contact` mirrors the live Gravity Forms form exactly (First/Last name, Company, Country select from `src/data/countries.ts` — 249 entries scraped from the live form —, Email, Phone, "Where did you learn about us?" with the live site's 6 options, Additional message) + newsletter block. Client-side validation works; submissions deliver via FormSubmit (formsubmit.co/ajax) to the `INBOX` const in contact.astro (currently mpw.lock@gmail.com — needs one-time activation click in the FormSubmit email). `/demo` embeds the same Calendly as the live site (calendly.com/andre-holoconnects/30min). All "Book a demo" CTAs → `/demo`.
- **View transitions**: Astro `<ClientRouter />` in Base.astro with vtIn/vtOut page-morph keyframes. motion.ts refactored: singletons (Lenis, cursor with delegated hover, marquee rAF) + `initPage()` re-run on `astro:page-load`; per-element wiring guarded via data-attributes (`data-split`, `data-mq`, `data-magWired`, `data-tiltWired`, `data-anchorWired`). Homepage globe + contact form scripts re-boot on `astro:page-load` too.
- **3D**: `[data-tilt]` cards (perspective rotate + glare overlay, see `wireTilt`), `[data-depth]` hero recede-into-space on scroll, vt page morphs.
- **Reveal robustness**: after adding `.in`, a 2.4s `forceVisible` safety net clears animations and pins the end state — the embedded preview froze the animation timeline after view-transition swaps (currentTime stuck at 0); on normal browsers the net is a no-op.
- **Collaboration copy**: project rsynced to iCloud Drive at `~/Library/Mobile Documents/com~apple~CloudDocs/Website Holoconnects` (excludes node_modules/dist/.astro). README.md explains setup. Re-sync with the same rsync command after changes.

## Completed Work
- Inspected the workspace root.
- Confirmed the workspace is effectively empty apart from a zero-byte file named `Website Holoconnects rebuild`.
- Created the persistent memory system in `docs/`.
- Analyzed the live Holoconnects website homepage structure.
- Replaced the temporary placeholder homepage with a premium static reconstruction based on the live site's core content hierarchy.
- Updated `index.html`, `styles.css`, and `script.js` to reflect products, sectors, cases, FAQ, CTA, and supporting sections.
- Updated the homepage brand layer to better match the supplied Holoconnects visuals and logos.
- Shifted the site from dark cinematic styling to a lighter white-black-gold system aligned to the supplied product imagery.
- Restyled the homepage again to move much closer to the provided reference concept: spotlight hero, business-model bento cards, dark IRIS OS section, and hardware showcase.
- Replaced the interpreted homepage with the user's exact supplied HTML concept in `index.html`.
- Created a dedicated `images/` folder for upcoming Holoconnects logos and transparent Holobox assets.

## Design Decisions
- Use a premium, calm, minimal luxury-tech direction.
- Preserve the reference site's commercial structure once the URL is available.
- Do not imitate Apple branding or exact UI patterns; only translate the level of polish and design discipline.
- Use a fast static HTML/CSS/JS starter first because no frontend stack exists yet.
- Follow the live homepage's product-first structure: hero, product highlights, rationale, process, proof, sectors, cases, CTA, insights, FAQ.
- Follow the supplied brand cues more closely: white product hardware, restrained gold accent, black typography, and calmer light surfaces.
- Use the supplied example as the primary direction for pacing and section character: light premium layout, bold hero contrast, bento economics section, and a darker software showcase.
- Use the user-supplied HTML literally when explicitly requested, instead of continuing to reinterpret it.

## Component Decisions
- Current homepage components:
  - Transparent-to-glass sticky header
  - Full-screen spotlight hero with rotating text
  - Business model bento section
  - Dark IRIS OS dashboard section
  - Hardware showcase section
  - About/sector strip
  - Footer
- Additional page-level component mapping still pending broader site analysis.

## File Changes
- Added `docs/agent-log.md`.
- Added `docs/design-system.md`.
- Added `docs/site-map.md`.
- Replaced the temporary `index.html` content with a homepage reconstruction based on the live site.
- Reworked `styles.css` from warm light premium styling to dark luxury-tech styling.
- Simplified `script.js` to generalized reveal behavior for the rebuilt homepage.
- Replaced the homepage structure again in `index.html` to align more closely with the user-provided concept.
- Reworked `styles.css` around the official black/white/gold palette and the new hero/OS/hardware sections.
- Expanded `script.js` with spotlight and rotating-word behavior.
- Replaced `index.html` with the user's exact provided HTML document, including external Tailwind, React, Babel, Phosphor Icons, and Three.js CDNs.
- Added `images/` directory as the intended asset location for homepage visuals.

## Open Issues
- No application scaffold or framework codebase is present yet in the workspace.
- The current implementation covers the homepage only; deeper product, sector, case, and company pages are not yet built.
- Exact transparent asset files are still not present in the workspace, so the product visuals are still approximations rather than the real supplied renders.
- `styles.css` and `script.js` are no longer the active homepage source because the current page is self-contained in `index.html`.

## Known Risks
- Starting framework-level implementation before identifying the target stack would create avoidable rework.
- The current preview uses Google Fonts, so full visual fidelity depends on browser network access.
- Some copy is intentionally rewritten or condensed to stay within a premium single-page prototype instead of mirroring every live block verbatim.
- Full brand-manual compliance is approximated from the supplied images and logo colors; I have not yet received a formal brand-manual document or local source files.
- The current page depends on CDN-delivered Tailwind, React, Babel, Phosphor Icons, and Three.js.

## Next Steps
- Analyze the remaining live-site pages beyond the homepage.
- Build secondary pages and route structure once the full site map is captured.
- Replace the styled approximations with the actual transparent logo and Holobox asset files once they are added to the workspace.
- Fine-tune the new homepage against the real brand manual once that document or exact rules are available locally.
- Decide whether to keep the static build or migrate into a framework once the target scope is clear.
- If desired, replace the CSS-rendered Holoboxes in the provided concept with real transparent asset files once they are added locally.
- Place the supplied Holobox and logo files into `images/` so the hero banner can be updated to use the real assets.
