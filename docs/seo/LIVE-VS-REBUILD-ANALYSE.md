# Live holoconnects.com vs Astro-rebuild: SEO-vergelijking

> Datum: 2026-07-23. Analyse op basis van een live crawl van beide sites plus het
> bestaande SEO-plan (ACTION-PLAN, KEYWORD-MAP, SEO-DASHBOARD, redirects.md).
> Het recovery-rapport van André kon niet gelezen worden (macOS blokkeerde het
> gedeelde klembordbestand); deze analyse is gebaseerd op de live site zelf, wat
> feitelijk de uitkomst van die recovery is. Zodra het rapport als bestand in de
> repo staat, kan het hier tegenaan gelegd worden.

---

## 1. De belangrijkste ontdekking

**De live site op holoconnects.com is niet meer de oude WordPress-site.**
Er draait nu een Next.js-site achter Cloudflare met een sitemap van **186 URL's**
(EN + NL), die vrijwel het complete docs/seo-plan al heeft uitgevoerd, en meer:

- Alle producten als losse pagina's, inclusief The 43, The 75, Recording Station
- Sectorpagina's met **sub-usecase-pagina's** (bijv. `/sectors/hospitality-travel/hologram-hotel`, `/sectors/retail/hologram-automotive-showroom`)
- **6 vergelijkingspagina's**: holobox-vs-led-wall, -tv-screen, -ar-headset, -peppers-ghost, **-proto**, **-arht-media** (exact wat KEYWORD-MAP §3.5/3.6 voorschreef)
- **Pricing met echte prijzen** (`/what-does-a-hologram-cost`, `/pricing`, `/hologram-display-cost`): AI Hologram vanaf EUR 2.500, Holobox Mini EUR 4.500, The 43 EUR 9.000, The 75 EUR 18.500
- **Een vraag-hub van ~25 long-tail-pagina's** (how-tall-is-a-holobox, do-holograms-need-glasses, hologram-receptionist, hologram-hire, enz.)
- **7 case-pagina's met named brands** (BMW, ITC-ILO, CIC Hospitality, VisitBritain, Smart Mission)
- **~60 nieuwsartikelen** (EN) + ~30 NL-nieuwsartikelen, met 2026-datering
- Volledige **NL-track** (`/nl/producten/…`, `/nl/tarieven`, `/nl/hologram-huren`)
- Glossary + guides-hub

Conclusie vooraf: het "oude site vs nieuwe site"-speelveld is gekanteld. De live
site is nu de sterkste SEO-asset die Holoconnects heeft. De Astro-rebuild wint op
design/techniek en op Duits, maar ligt qua contentbreedte ver achter.

---

## 2. Vergelijking per pijler

### 2.1 Contentbreedte en -diepte (zwaarste rankingfactor)

| Metriek | Live (Next.js) | Rebuild (Astro) |
|---|---|---|
| Indexeerbare URL's | **186** (EN+NL) | 55 (EN+NL+DE) |
| Woorden per productpagina | **~1.900** (Holobox) | ~460 |
| Woorden pricing-artikel | **~1.670** | ~790 |
| Interne links per pagina | **70-85** | ~50 |
| Vergelijkingspagina's | **6** | 0 |
| Long-tail vraagpagina's | **~25** | 0 |
| Case-pagina's (los) | **7** | 0 (alleen overzicht) |
| Nieuws/blogartikelen | **~60 EN + ~30 NL** | 3 (EN-only) |
| Sub-usecase-pagina's per sector | **13** | 0 |

Padoverlap: slechts **17 van de 186** live URL's bestaan ook in de rebuild.
Een DNS-cutover naar de rebuild zoals die nu is zou **169 URL's laten 404'en**,
inclusief alle vergelijkings-, pricing- en case-pagina's. De redirectmap in
`src/data/redirects.ts` (13 gegokte WordPress-slugs) is gebaseerd op de oude
WordPress-site en daarmee **achterhaald**: de echte te mappen lijst is deze
186-URL-sitemap.

### 2.2 Structured data

| Schema | Live | Rebuild |
|---|---|---|
| Organization + WebSite | ✅ (incl. legalName, knowsAbout) | ✅ |
| LocalBusiness | ✅ | ❌ |
| Product | ✅ **met Offer, echte prijzen, shipping, returns** | ✅ zonder Offer/prijs |
| FAQPage | ✅ overal | ✅ (40 FAQ's, trilinguaal) |
| Article + Breadcrumb | ✅ | ✅ |
| HowTo | ✅ (vergelijkings-/uitlegpagina's) | ❌ |
| VideoObject | ✅ (Vimeo-embed homepage) | ❌ |
| SiteNavigationElement | ✅ | ❌ |
| Speakable | ✅ | ❌ |

Live wint ruim. Vooral Product+Offer met echte prijzen is een rich-result-voordeel
dat de rebuild mist.

### 2.3 i18n / hreflang

| Aspect | Live | Rebuild |
|---|---|---|
| Talen | EN + NL | EN + NL + **DE** |
| hreflang op NL-pagina's | ✅ (en/nl/x-default) | ✅ |
| hreflang op EN-pagina's | ❌ **ontbreekt** (homepage heeft geen link-alternates) | ✅ |
| x-default | alleen op NL-kant | ✅ overal |
| Sitemap-alternates | ❌ | ✅ (xhtml:link) |

De live site heeft **eenzijdige hreflang**: NL-pagina's verwijzen naar EN, maar EN
verwijst niet terug. Eenzijdige paren worden door Google genegeerd, dus de
hreflang-clusters van de live site zijn technisch ongeldig. De rebuild doet dit
correct en heeft bovendien een complete DE-track die live volledig mist.

### 2.4 Meta / on-page

- Live titles zijn soms zwak gestileerd ("Holobox, Holoconnects"; homepage
  "Holoconnects, Life size holographic communication" zonder zoekterm "hologram
  display"). De rebuild-titles zijn keyword-scherper ("Holobox | Holographic
  Display | Holoconnects", "Europe's Leading Hologram Company").
- Beide hebben unieke descriptions; live descriptions zijn concreter (prijzen,
  specs), wat CTR helpt.
- Live H1 homepage: "Next Gen Hologram Company". Prima, maar mist "hologram
  display" als head-term; de body vangt dat op met veel meer tekst.

### 2.5 Techniek / hosting

| Aspect | Live | Rebuild |
|---|---|---|
| Stack | Next.js op Vercel/vergelijkbaar, achter **Cloudflare** | Astro static op GitHub Pages |
| Echte 301's mogelijk | ✅ (Cloudflare zit er al voor) | ❌ (Pages geeft alles 200; alleen meta-refresh-stubs) |
| Canonical host | `https://holoconnects.com` (apex, **zonder** trailing slash) | `https://www.holoconnects.com/` (**www**, mét trailing slash) |
| www-afhandeling | www → apex via Cloudflare-301 | site-config staat op www |
| HTML-gewicht homepage | ~220 KB + Next-bundles | ~54 KB, statisch |

Twee aandachtspunten:
1. **Hostmismatch**: de rebuild canonicaliseert alles naar `www.`, terwijl de
   live infrastructuur `www` juist 301't naar apex. Bij een cutover zouden
   canonicals naar een redirectende host wijzen (tegenstrijdig signaal). Kies één
   host (advies: apex, want dat is wat nu geïndexeerd staat) en zet
   `astro.config.mjs` + alle structured data daarop gelijk.
2. De rebuild is qua laadgewicht duidelijk lichter; dat is een écht voordeel,
   maar weegt niet op tegen 169 verdwenen URL's.

---

## 3. Wat betekent dit voor het SEO-plan (docs/seo)?

Het plan was geschreven tegen de oude WordPress-site. Stand van zaken per pijler:

- **§1 Taalstrategie**: achterhaald in beide richtingen; live heeft NL al terug,
  de rebuild heeft bovendien DE. Beslissing verschuift naar "hoe krijgen we DE
  én correcte hreflang op het winnende platform".
- **§2 Quick wins (technisch)**: door de rebuild al gedaan, maar de live site
  heeft ze óók (en rijker), behalve hreflang-correctheid.
- **§3 Content**: **vrijwel volledig door de live site uitgevoerd** (pricing ✅,
  rental ✅, comparisons ✅ incl. vs-Proto/ARHT, cases ✅, blog ✅, glossary ✅,
  buyer-vragen ✅). De rebuild heeft hiervan alleen 3 cornerstone-artikelen.
- **§4 Backlinks**: voor beide nog niet gestart; blijft de openstaande pijler.
- **§5 Meten (GSC/Ahrefs)**: nog steeds niet gekoppeld; blijft randvoorwaarde.

---

## 4. Strategische opties

**Optie A — Live site is de basis, rebuild levert de polish (aanbevolen).**
De live site houdt de rankings en de content. Verbeteringen daarop: hreflang
tweezijdig maken, DE-track toevoegen (content uit de rebuild hergebruiken),
titles aanscherpen, design/motion desgewenst richting rebuild-kwaliteit brengen.
De Astro-rebuild dient als design-referentie of wordt gefaseerd geïntegreerd.

**Optie B — Rebuild doorzetten, maar pas cutoveren bij pariteit.**
Dan moet vóór cutover: (1) alle 169 ontbrekende URL's ofwel gebouwd ofwel in een
volledige 301-map (Cloudflare Bulk Redirects, ligt er al) opgenomen, (2) de
vergelijkings-, pricing-, case- en vraagpagina's overgenomen, (3) hostkeuze
gelijkgetrokken, (4) contentdiepte per pagina richting 1.000+ woorden. Dat is
weken werk; elke dag verschil is rankingrisico.

**Optie C — Hybride**: live site blijft op het domein; de rebuild-onderdelen
(DE-track, betere hreflang, lichtere templates) worden als features naar de
live-codebase gebracht.

Wat je ook kiest: **niet cutoveren in de huidige staat**. Dat zou de derde
plaatform-/URL-wissel in korte tijd zijn, met 91% URL-verlies.

---

## 5. Prioriteitenlijst (impact ÷ inspanning)

1. **GSC + Bing koppelen** voor holoconnects.com (apex) en de sitemap indienen.
   Zonder meetdata blijft alles gissen. (Stond al bovenaan; geldt nu dubbel.)
2. **Beslissing A/B/C hierboven nemen** met André erbij; zijn recovery-rapport
   als bestand in `docs/seo/` zetten zodat het naast deze analyse ligt.
3. **hreflang op de live site repareren** (EN-pagina's missen alternates;
   eenzijdig = ongeldig). Kleinste ingreep, direct effect op NL-vindbaarheid.
4. **DE-track** naar het winnende platform (rebuild-vertalingen bestaan al).
5. **redirects.ts vervangen** door een map gebaseerd op de echte 186-URL-lijst
   (`docs/seo/` kan de crawl-lijst uit deze sessie krijgen) — alleen relevant
   zolang optie B open is.
6. **Backlinks starten** (BACKLINK-PLAN.md week 1-ritme): geldt onafhankelijk
   van platformkeuze; de live pricing-/case-/comparison-pagina's zijn nu
   linkwaardige assets.
7. **Titles/H1 op de live site aanscherpen** op de head-terms uit KEYWORD-MAP
   (homepage mist "hologram display" in title).

---

## 6. Sterkte/zwakte in één oogopslag

**Live site wint op:** contentvolume (186 vs 55 URL's), contentdiepte (3-4× meer
woorden), long-tail-dekking, comparison/pricing/case-assets, schema-rijkdom
(Offer met prijzen, HowTo, Video, LocalBusiness), bestaande indexatie, Cloudflare
(echte 301's), interne linkdichtheid.

**Rebuild wint op:** Duits (55 URL's × 3 talen correct), correcte tweezijdige
hreflang + x-default + sitemap-alternates, keyword-scherpere titles, statische
snelheid/laag paginagewicht, moderne design/motion-laag, schone codebase met
één contentbron (`site.ts`).

**Beide missen:** backlinks/autoriteit (nog 0 gestart), GSC/Ahrefs-koppeling,
AggregateRating via echte reviewbron.
