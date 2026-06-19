# Holoconnects SEO Dashboard

> **Lees dit wekelijks.** Eén pagina met de stand van zaken: wat is gedaan, wat loopt, wat zijn de cijfers.
> Laatste update: **2026-06-18** · Eigenaar: Marnix · Site: https://www.holoconnects.com

---

## 🚦 Status in één oogopslag

| Pijler | Status | Toelichting |
|---|---|---|
| Technische SEO | 🟢 Sterk | Sitemap, canonical, JSON-LD, OG/Twitter, alt-teksten — allemaal live in de codebase |
| Site-structuur | 🟡 In opbouw | Sector-subpagina's ✅ · blog/pricing/rental/case-pagina's nog te bouwen |
| On-page content | 🟡 Redelijk | Marketing-copy aanwezig; diepgang + informational content ontbreekt |
| Taal / markt | 🔴 Beslissing nodig | Oude site was NL, nieuwe is EN-only → Nederlandse rankings waarschijnlijk verloren |
| Backlinks / autoriteit | 🔴 Nog niet gestart | Doellijst + outreach klaar (zie BACKLINK-PLAN.md), uitvoering moet beginnen |
| Meten (GSC/Ahrefs) | 🔴 Nog niet gekoppeld | Search Console + Ahrefs verifiëren is randvoorwaarde voor alles |

---

## ✅ Deze sessie afgerond (2026-06-18)

**Technische quick wins — live in de code, gaan mee bij volgende deploy:**
- `@astrojs/sitemap` geïnstalleerd → `sitemap-index.xml` wordt nu gegenereerd (robots.txt verwees er al naar, maar hij bestond niet). **18 URL's** erin.
- `Base.astro` uitgebreid: **canonical** tags, volledige **Open Graph** (incl. og:image, og:url, og:locale), **Twitter Cards**, **robots**-meta, **theme-color**.
- **JSON-LD structured data**: `Organization` + `WebSite` sitebreed; `Product` + `BreadcrumbList` op elke productpagina.
- Homepage kreeg een echte keyword-gerichte `<title>` + `description` (gebruikte eerst de generieke default).
- Productpagina's: per-pagina title/description/og-image + product-schema.
- Geverifieerd in build: 92/92 afbeeldingen met alt-tekst, 1 H1 per pagina.
- Sector-subpagina's (`/sectors/[slug]`) — 6 aparte landingspagina's (lost keyword-kannibalisatie op).

---

## 🔜 Volgende acties (prioriteit van boven naar beneden)

1. **[BESLISSING] Taalstrategie bepalen** — NL-track + hreflang terug, of EN-only houden? Zie ACTION-PLAN §1. *Grootste herstelbare ranking-winst.*
2. **Search Console + Ahrefs koppelen** en sitemap indienen. Zonder meetdata werken we blind.
3. **301-redirectmap** oude → nieuwe URL's (backlinks van de oude site vangen). Let op: GitHub Pages kan geen echte 301's — zie ACTION-PLAN §2.
4. **Pricing-gids** + **Rental-landingspagina** bouwen (hoogste commerciële intentie, nu 0 dekking).
5. **Blog/Insights-sectie** opzetten + eerste pillar "What is a hologram display".
6. **Backlinks**: eerste 5 starten (zie BACKLINK-PLAN.md — Sixteen:Nine, Invidis, Digital Signage Today, Hospitality Net, ISE-profiel).

---

## 📊 KPI-tracker (wekelijks invullen — bron: Search Console + Ahrefs)

| Week | Organic clicks | Impressions | Gem. positie | Geïndexeerde pagina's | Verwijzende domeinen | Nieuwe backlinks |
|---|---|---|---|---|---|---|
| Baseline (vul in) | — | — | — | — | — | — |
| 2026-06-18 | _meten_ | _meten_ | _meten_ | 18 (sitemap) | _meten_ | 0 |

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
