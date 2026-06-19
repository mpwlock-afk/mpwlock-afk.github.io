# NL native-review punch-list

The site is now bilingual (EN at `/`, NL at `/nl/`). All Dutch copy is a
**first-pass translation** produced from the English source. It is grammatically
correct and SEO-usable, but a native Dutch marketing writer should review the
lines below before go-live for tone, idiom and keyword targeting.

Every entry below is also marked inline in the code with a `// TODO(native-review)`
comment — search the repo for that string to jump to each one
(`grep -rn "native-review" src/`).

> Brand/technical terms were deliberately **left untranslated** in both
> languages: Holobox, Holobox Mini, The 43, Hologrid, Holocontrol, 3D, 4K, LCD,
> telehealth, retail, out-of-home, "Midnight Black" / "Starlight White" finishes.
> Confirm whether the two finish names should get Dutch equivalents.

## High priority — SEO-critical (titles, descriptions, keyword copy)

These feed search rankings for the Dutch market. Align with the NL keyword goals
in `holoconnects-seo-research.md` (e.g. "holografisch display", "hologram",
"holografische concierge", "hologram menu", "hologram huren").

- **Per-locale `<title>` + meta `description`** on every view: Home, ProductsIndex,
  ProductDetail, SectorsIndex, **SectorDetail (the `sectorSeo` map — 6 sectors ×
  title/description/intro)**, Cases, About, Contact, Demo. The sector
  descriptions in `src/components/views/SectorDetail.astro` are the single most
  important block — they target the industry-landing keywords called out in the
  research report.
- `src/i18n/ui.ts` — shared CTA band title/text + footer tagline.
- `src/data/site.ts` — `site.tagline`, `site.rating`.

## Medium priority — marketing tone / hero & body copy

- `Home.astro` — hero subline, hospitality lead ("A welcome that never sleeps"),
  the hospitality-pin intro, sectors lead.
- `ProductsIndex.astro` — hero lead, range lead.
- `ProductDetail.astro` — meta description suffix ("Used in 30+ countries…").
- `SectorsIndex.astro` — hero lead.
- `SectorDetail.astro` — body copy (`bodyText` / `bodyTextEnd`), and two phrasings
  the translating agent flagged as literal/clunky:
  - the `bringTo` CTA title ("Breng hologrammen naar {sector}")
  - the advertising intro relative-clause chain ("…waarvoor publiek stilstaat,
    die het fotografeert en onthoudt").
- `Cases.astro` — lead ("From global brands to government missions"), CTA title.
- `About.astro` — lead, the story paragraphs, values title + all three value
  descriptions.
- `SizeRange.astro`, `Configurator.astro` — section leads.
- `Support.astro` — FAQ answers, especially "What is a Holobox?" and the
  buy/rent/lease "with real numbers" line.
- `Demo.astro` — the "with real numbers" honest-advice line.

## Form & data copy

- `Contact.astro`
  - Success / error / newsletter helper messages (passed to the client script via
    `data-*` attributes — review those strings).
  - **Country dropdown options are kept in ENGLISH** for now (large list; not
    machine-translated). Decide whether to localize country names for the NL form.
  - The "source" select option **labels** are translated; the submitted **values**
    were intentionally kept English so the inbox stays consistent.
  - `_subject` FormSubmit hidden fields stay English (internal notification, not
    user-facing).

## Editorial decisions to confirm (not bugs)

- **Testimonial quotes** (`site.ts` → `testimonials[].quote`) are shown verbatim
  in English on both locales, to avoid misattributing a translated quote to a
  named person. Confirm this is the desired behaviour, or commission approved NL
  quotes from the customers.
- **Case titles** (`cases[].title`) are kept as-is (event/proper-noun names);
  only the small `sector` category label is translated.

## Pre-go-live checklist (separate from copy review)

- [ ] Native NL review of all of the above.
- [ ] Decide finish-name + country-name localization questions above.
- [ ] When the custom domain goes live, confirm hreflang/canonical resolve to the
      production host (currently `https://www.holoconnects.com` via `astro.config`).
