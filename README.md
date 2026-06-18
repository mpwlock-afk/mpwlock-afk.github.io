# Holoconnects Website

Moderne rebuild van [holoconnects.com](https://www.holoconnects.com) — Astro 5, 3D-animaties, view transitions.

## Snel starten

```bash
npm install     # eenmalig (node_modules wordt niet gesynct via iCloud)
npm run dev     # lokaal ontwikkelen → http://localhost:4321
npm run build   # productieversie in dist/
```

## Structuur

| Map/bestand | Wat het is |
|---|---|
| `src/pages/` | Alle pagina's (home, products + 5 detailpagina's, sectors, cases, about, contact, demo) |
| `src/components/` | Header, Footer, CtaSection |
| `src/layouts/Base.astro` | Gedeelde layout: head, fonts, view transitions, motion-script |
| `src/scripts/motion.ts` | Animatie-engine: Lenis smooth scroll, 3D tilt, parallax, reveals, marquee, cursor |
| `src/data/site.ts` | Alle content: nav, producten, sectoren, cases, quotes, kantoren |
| `src/data/countries.ts` | Landenlijst (gespiegeld van het live contactformulier) |
| `src/styles/global.css` | Design system + motion-CSS |
| `public/images/` | Echte foto's van holoconnects.com |
| `docs/` | Agent-log met architectuurnotities |

## Formulieren

- **/contact** — spiegelt het live Gravity Forms-formulier (zelfde velden + opties). Verzendingen gaan via **FormSubmit** naar het adres in `PUBLIC_CONTACT_INBOX` (lokaal in `.env`, op GitHub via de repo-secret `CONTACT_INBOX`). Eenmalig de activatielink in de FormSubmit-mail aanklikken; daarna komt alles binnen. Ander adres? Pas de env-variabele / secret aan.
- **/demo** — Calendly-embed (calendly.com/andre-holoconnects/30min), zelfde als live site.

## Hosting

Statische site — deploy `dist/` naar Vercel, Netlify of elke webserver.
