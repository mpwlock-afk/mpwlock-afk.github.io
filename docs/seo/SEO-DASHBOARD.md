# Holoconnects SEO Dashboard

> **Lees dit wekelijks.** Eén pagina met de stand van zaken: wat is gedaan, wat loopt, wat zijn de cijfers.
> Laatste update: **2026-06-20** · Eigenaar: Marnix · Site: https://www.holoconnects.com

---

## 🚦 Status in één oogopslag

| Pijler | Status | Toelichting |
|---|---|---|
| Technische SEO | 🟢 Sterk | Sitemap (3 talen), canonical, hreflang, JSON-LD, OG/Twitter, alt-teksten — live |
| Site-structuur | 🟢 Sterk | Sector-landingspagina's ✅ · blog/Insights ✅ · 3 cornerstone-artikelen ✅ · pricing/rental als artikel ✅ |
| On-page content | 🟢 Goed | Trilinguale marketing-copy + 40 FAQ's met FAQPage-schema + cornerstone-guides |
| Taal / markt | 🟢 Opgelost | **EN + NL + DE** live met hreflang/x-default. NL native-review verwerkt, DE SEO-titels |
| Backlinks / autoriteit | 🔴 Nog niet gestart | Doellijst + outreach klaar (zie BACKLINK-PLAN.md), uitvoering moet beginnen |
| Meten (GSC/Ahrefs) | 🔴 Nog niet gekoppeld | Search Console (3 talen) + Ahrefs verifiëren is randvoorwaarde voor alles |

---

## ✅ Sessie 2026-06-20 — multilingual + SEO afronding

**Meertaligheid (EN/NL/DE):**
- Derde taal **Duits (DE)** toegevoegd: zelfde 34→nu **55 indexeerbare URL's** × hreflang. Locale-registry, route-wrappers `/de/*`, taalswitcher (3-weg).
- **NL native-review verwerkt**: alle `TODO(native-review)` markers weg; NL + DE sector-titles/descriptions/intro's SEO-geoptimaliseerd (niet letterlijk vertaald) op de keyword-clusters.
- **2 kritieke i18n-bugs gefixt** (gevonden via build-verificatie): `localizePath()` en `stripLangPrefix()` waren hardcoded op `nl` → alle DE-links en DE-hreflang waren stuk. Nu generiek over de locales-lijst.

**Schema / technisch:**
- **FAQPage** JSON-LD + zichtbare FAQ-accordeons op alle product- én sectorpagina's (40 FAQ's, trilinguaal). Rich-results-kans.
- Schema's geverifieerd over en/nl/de: Organization + WebSite (sitebreed), Product + BreadcrumbList (producten), Service + BreadcrumbList (sectoren), Article + BreadcrumbList (blog), OG + Twitter (overal).
- **Legacy 301-redirectmap** (`src/data/redirects.ts`) → statische canonical+meta-refresh stubs via `[...legacy].astro`; sitemap-filter houdt noindex-stubs eruit. (GitHub Pages = geen echte 301 → Cloudflare-pad gedocumenteerd in `redirects.md`.)
- Footer linkt nu naar **individuele sectorpagina's** (was alles → `/sectors`) + Insights-link.

**Content:**
- **Blog/Insights-sectie** (Astro content collection) op `/news/`.
- **3 cornerstone-artikelen**: "What is a hologram display" (= herstel van de 404'de `/news/holographic-displays/`), "How much does a hologram display cost", "Hologram display rental". Interne links naar producten/sectoren, Article + FAQPage schema.

---

## 🔜 Volgende acties (prioriteit van boven naar beneden)

1. **Search Console + Bing verifiëren in 3 talen** en sitemap indienen (`sitemap-index.xml`). Zonder meetdata werken we blind.
2. **Echte oude-URL-lijst uit GSC/Ahrefs** in `src/data/redirects.ts` zetten (nu high-confidence gok) + bij domeincutover Cloudflare ervoor voor echte 301's.
3. **Backlinks**: eerste 5 starten (BACKLINK-PLAN.md — Sixteen:Nine, Invidis, Digital Signage Today, Hospitality Net, ISE-profiel).
4. **Native marketing-review NL + DE body-copy** (titels/descriptions zijn SEO-klaar; lange teksten zijn AI-vertaling als basis).
5. **Meer cornerstone-content**: "Hologram vs LED/video wall", "Holobox vs Proto vs Hypervsn", buyer's guide (zie KEYWORD-MAP §Aanbevolen content). Eventueel NL/DE-vertalingen van de bestaande 3 artikelen.
6. **Page-speed feintuning**: afbeeldingen naar WebP/AVIF + `width/height`, en fonts zelf-hosten (nu render-blocking via Fontshare).

---

## 📊 KPI-tracker (wekelijks invullen — bron: Search Console + Ahrefs)

| Week | Organic clicks | Impressions | Gem. positie | Geïndexeerde pagina's | Verwijzende domeinen | Nieuwe backlinks |
|---|---|---|---|---|---|---|
| Baseline (vul in) | — | — | — | — | — | — |
| 2026-06-18 | _meten_ | _meten_ | _meten_ | 18 (sitemap) | _meten_ | 0 |
| 2026-06-20 | _meten_ | _meten_ | _meten_ | 55 (sitemap, 3 talen) | _meten_ | 0 |

**Kernzoekwoorden om posities van te volgen** (zie KEYWORD-MAP.md voor de volledige lijst):
`hologram display` · `holographic display box` · `holobox` · `hologram display price` · `hologram display rental` · `hologram company europe` · `hologram telehealth` · `virtual concierge hologram` · `hologram display kopen` (NL) · `hologram huren` (NL)

---

## ⚠️ Belangrijke kanttekening bij de research

De diepteanalyse (concurrenten, keywords, backlinks, oude-vs-nieuwe site) is gedaan door 4 parallelle agents, **maar live webtoegang (Search Console, Ahrefs, Wayback, Google/Bing) was in deze omgeving geblokkeerd**. De bevindingen komen daarom uit vakkennis van de holografische-display-markt, niet uit live SERP-/backlinkdata. Ze zijn consistent en bruikbaar als richting, maar **moeten geverifieerd worden** zodra GSC + Ahrefs gekoppeld zijn. Geen enkel cijfer in de plannen is verzonnen; waar data ontbrak staat "meten/verifiëren".

---

## 📁 Bijbehorende documenten

- `ACTION-PLAN.md` — volledige geprioriteerde roadmap (quick wins → structuur → content → autoriteit)
- `KEYWORD-MAP.md` — zoekwoordclusters, intentie, en welke pagina welk woord pakt
- `BACKLINK-PLAN.md` — 50+ concrete linkdoelen, PR-hoeken, outreach-templates, maandritme
- `COMPETITOR-ANALYSIS.md` — wat Proto/Hypervsn/ARHT doen dat wij (nog) niet doen
