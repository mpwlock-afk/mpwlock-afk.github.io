# Holoconnects SEO Action Plan

Geprioriteerde roadmap om weer naar (en boven) het oude rankingniveau te komen.
Volgorde = impact ÷ inspanning. Status: ✅ klaar · �doing · ⬜ todo.

---

## Diagnose: waarom de rankings waarschijnlijk daalden

Drie convergente oorzaken (uit 4 research-agents; te bevestigen met GSC/Ahrefs):

1. **Taalswitch NL → EN.** De oude site was Nederlandstalig en rankte in de thuismarkt. De rebuild is EN-only, zonder hreflang of NL-pagina's → Nederlandse SERP-posities vallen weg. **Vermoedelijk de grootste herstelbare winst.**
2. **URL-wijzigingen zonder 301-redirects.** Een rebuild op nieuwe slugs zonder redirectmap laat oude pagina's hun ranking verliezen en maakt elke backlink naar oude URL's waardeloos (404 geeft geen linkkracht door).
3. **Veel minder pagina's + geen blog.** Van een contentrijke site naar ~18 pagina's zonder insights/news = minder long-tail-ingangen en minder versheidssignaal.

Daarnaast (nu opgelost): geen sitemap, geen canonical, geen structured data, incomplete meta.

---

## §1 — BESLISSING: Taalstrategie  🔴 *jouw input nodig*

Dit bepaalt de helft van het werk. Opties:

| Optie | Wat het inhoudt | Voor | Tegen |
|---|---|---|---|
| **A. Bilingual NL + EN** | `/` (EN) + `/nl/` track, hreflang `nl-nl`/`en`/`x-default` | Herwint thuismarkt-rankings, laagste concurrentie (kopen/huren/prijs NL) | ~2× contentwerk, vertaalonderhoud |
| **B. EN-only houden** | Focus volledig op EN/internationaal | Minder werk, globale schaal | Laat Nederlandse markt liggen die de oude site had |
| **C. NL-first, EN secundair** | Spiegelt de oude winnende opzet | Snelst rankingherstel in NL | Minder internationaal bereik |

**Aanbeveling:** A (bilingual), met NL eerst voor home + Holobox + pricing + rental (laagste difficulty, hoogste intentie in thuismarkt). Astro ondersteunt dit met i18n-routing; hreflang-hook ligt al klaar in `Base.astro` (canonical-prop aanwezig).

---

## §2 — Quick wins  (technisch fundament)

| # | Actie | Status |
|---|---|---|
| 2.1 | `@astrojs/sitemap` + `sitemap-index.xml` genereren | ✅ |
| 2.2 | Canonical tags sitebreed (`Base.astro`) | ✅ |
| 2.3 | Open Graph compleet (og:image/url/locale/site_name) | ✅ |
| 2.4 | Twitter Cards | ✅ |
| 2.5 | robots-meta (index,follow,max-image-preview:large) | ✅ |
| 2.6 | JSON-LD `Organization` + `WebSite` sitebreed | ✅ |
| 2.7 | JSON-LD `Product` + `BreadcrumbList` op productpagina's | ✅ |
| 2.8 | Homepage + productpagina's: unieke title/description | ✅ |
| 2.9 | Alt-teksten (92/92) + 1 H1 per pagina geverifieerd | ✅ |
| 2.10 | Sector-subpagina's `/sectors/[slug]` (anti-kannibalisatie) | ✅ |
| 2.11 | **GSC + Bing Webmaster verifiëren, sitemap indienen** (nu 3 talen) | ⬜ |
| 2.12 | **301-redirectmap oude→nieuwe URL's** | 🟡 mechanisme live (stubs + `redirects.ts`); echte GSC-lijst + Cloudflare-301 nog |
| 2.13 | `AggregateRating` via een échte review-bron (Trustpilot/Kiyoh), niet self-serving | ⬜ |
| 2.14 | `FAQPage` schema op product/sector + nieuwe FAQ-sectie | ✅ (40 FAQ's, trilinguaal) |
| 2.15 | Self-referencing `hreflang` (EN/NL/DE + x-default) | ✅ |

**Noot 301's:** de site draait op **GitHub Pages**, dat geen server-side 301-redirects ondersteunt. Opties: (a) Cloudflare ervoor zetten voor echte 301's (aanbevolen), (b) Netlify/Vercel met `_redirects`/`vercel.json`, of (c) tijdelijk meta-refresh + canonical als noodoplossing. Haal de oude URL-lijst uit GSC (oude property) of Ahrefs "Best by links".

---

## §3 — Site-structuur & content  (de echte rankinghefboom)

Concurrenten (Proto/Hypervsn/ARHT) splitsen wat wij in een handvol pagina's proppen op in tientallen indexeerbare URL's. Dat te repliceren is de kern.

| # | Bouwen | Doelzoekwoord | Type | Prioriteit |
|---|---|---|---|---|
| 3.1 | **Pricing-/kostengids** | `hologram display price/cost` | transactioneel | ✅ `/news/hologram-display-cost/` |
| 3.2 | **Rental-landingspagina** | `hologram display rental/huren` | transactioneel | ✅ `/news/hologram-display-rental/` |
| 3.3 | **Blog/Insights-sectie** (Astro content collection) | — | infra | ✅ `/news/` |
| 3.4 | Pillar: **"What is a hologram display"** | `what is a hologram display` | informational | ✅ `/news/holographic-displays/` |
| 3.5 | Vergelijking **"Hologram vs LED/video wall"** | `hologram vs led display` | commercial investigation | 🟡 |
| 3.6 | Vergelijking **"Holobox vs Proto vs Hypervsn"** | `proto/hypervsn alternative` | comparison | 🟡 |
| 3.7 | **Individuele case-pagina's** `/cases/[slug]` (BMW, ING, Sheikh, Liège) | brand + proof | 🔴 Hoog (linkwaardig!) |
| 3.8 | **Buyer's guide** "How to choose a hologram display" | `best hologram display` | mid-funnel | 🟢 |
| 3.9 | **Glossary/FAQ-hub** (Pepper's Ghost vs echt hologram, etc.) | informational + AI-overviews | 🟢 |
| 3.10 | NL-content (kopen/huren/prijs) — afhankelijk van §1 | NL transactioneel | afh. v. beslissing |

**On-page optimalisatie bestaande pagina's:** `/products` tot category-pillar maken met interne links naar elk product; "box"/"buy"/"price"-taal toevoegen aan Holobox; demo-video + echte case-beelden embedden (deze niche is video- en proof-gedreven).

---

## §4 — Autoriteit & backlinks  (doorlopend)

Volledige uitwerking in `BACKLINK-PLAN.md`. Kern:
- **Eerste 5 doelen:** Sixteen:Nine, Invidis, Digital Signage Today, Hospitality Net (gratis PR), ISE-exhibitor/press-profiel.
- **Fundament-listings:** Google Business Profile, LinkedIn, Crunchbase, Europages, Dealroom, techleap.nl.
- **5 PR-hoeken:** holografische telehealth · hologram-conciërge (named hotel) · engagement-benchmark studie · "State of holographic displays 2026" rapport · NL-scaleup challenger-verhaal.
- **Maandritme:** week 1 listings · week 2 editorial outreach · week 3 partnerships/podcasts · week 4 awards + review.

---

## §5 — Doorlopend proces (continue SEO)

Zie `SEO-DASHBOARD.md` voor de wekelijkse KPI-tracker. Voorstel voor automatisering:
- **Wekelijkse SEO-agent** (scheduled) die: GSC/Ahrefs-cijfers ophaalt, posities op kernwoorden checkt, nieuwe backlinkkansen voorstelt, en de dashboard-tabel bijwerkt. (Opzet vereist gekoppelde GSC/Ahrefs + akkoord op scheduling.)
- **Per nieuwe pagina**: titel/meta/schema-checklist uit §2 aflopen vóór deploy.
- **Maandelijks**: één linkwaardig asset publiceren (datastudie of trendrapport).
