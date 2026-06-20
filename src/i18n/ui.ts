// ── Holoconnects i18n core ───────────────────────────────────────────────
// Two locales: English (default, served at root `/`) and Dutch (`/nl/`).
// URL strategy = subdirectory, EN unprefixed. See astro.config.mjs i18n block.
//
// This file holds:
//   1. the locale registry + helpers (URL ↔ lang, path localization, alternates)
//   2. the shared "chrome" dictionary (nav, footer, buttons — strings that are
//      reused across every page). Page-specific copy lives in each view
//      component's own `copy = { en, nl }` object, not here.
//
// Content data (products, sectors, cases…) is localized in src/data/site.ts
// with the `Loc` type + `t()` helper exported below.

export const languages = {
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";
export const locales: Lang[] = ["en", "nl", "de"];

// BCP-47 tags used for <html lang>, og:locale and hreflang.
export const localeTag: Record<Lang, string> = {
  en: "en",
  nl: "nl",
  de: "de",
};
export const ogLocale: Record<Lang, string> = {
  en: "en_US",
  nl: "nl_NL",
  de: "de_DE",
};

// ── Localized content helper ─────────────────────────────────────────────
// A translatable value is either a plain string (same in every language) or a
// per-locale object. `de` is optional: where a German string is missing, `t()`
// falls back to English so the build never breaks on a gap. `t()` resolves it.
export type Loc = { en: string; nl: string; de?: string };
export function t(value: Loc | string, lang: Lang): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.en;
}

// ── URL helpers ──────────────────────────────────────────────────────────

/** Detect the active language from a request/Astro URL. */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return seg === "nl" ? "nl" : "en";
}

/** Strip the locale prefix → a logical, language-neutral path (always /-rooted). */
export function stripLangPrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  // Drop any non-default locale prefix (nl, de, …); EN is unprefixed.
  if (parts[0] && parts[0] !== defaultLang && (locales as string[]).includes(parts[0])) {
    parts.shift();
  }
  return "/" + parts.join("/");
}

/**
 * Build the href for a logical path in a given language. Paths are normalized
 * to a single trailing slash so internal links + hreflang match Astro's
 * directory-style canonical URLs (e.g. `/products/`).
 *   localizePath("/products", "en") → "/products/"
 *   localizePath("/products", "nl") → "/nl/products/"
 *   localizePath("/products", "de") → "/de/products/"
 *   localizePath("/", "de")         → "/de/"
 */
export function localizePath(path: string, lang: Lang): string {
  let clean = path === "" ? "/" : path.startsWith("/") ? path : "/" + path;
  if (clean !== "/" && !clean.endsWith("/")) clean += "/";
  if (lang === defaultLang) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/**
 * Given the current pathname, return the alternate-language links for hreflang.
 * Always returns one entry per locale plus an explicit x-default (→ English).
 */
export function getAlternates(
  pathname: string,
  siteUrl: URL,
): { lang: Lang | "x-default"; href: string }[] {
  const logical = stripLangPrefix(pathname);
  const entries: { lang: Lang | "x-default"; href: string }[] = locales.map(
    (lang) => ({
      lang,
      href: new URL(localizePath(logical, lang), siteUrl).href,
    }),
  );
  entries.push({
    lang: "x-default",
    href: new URL(localizePath(logical, defaultLang), siteUrl).href,
  });
  return entries;
}

// ── Shared chrome dictionary ─────────────────────────────────────────────
// Keep this lean: only strings that appear in Header, Footer, the CTA band and
// other site-wide chrome. NL is a first-pass translation — see TODO markers
// where a native review is recommended for final marketing tone.
export const ui = {
  // Header / nav
  "nav.products": { en: "Products", nl: "Producten", de: "Produkte" },
  "nav.sectors": { en: "Sectors", nl: "Sectoren", de: "Branchen" },
  "nav.cases": { en: "Cases", nl: "Cases", de: "Referenzen" },
  "nav.about": { en: "About", nl: "Over ons", de: "Über uns" },
  "nav.contact": { en: "Contact", nl: "Contact", de: "Kontakt" },
  "cta.bookDemo": { en: "Book a demo", nl: "Boek een demo", de: "Demo buchen" },
  "cta.exploreHolobox": {
    en: "Explore the Holobox",
    nl: "Ontdek de Holobox",
    de: "Holobox entdecken",
  },
  "nav.openMenu": { en: "Open menu", nl: "Menu openen", de: "Menü öffnen" },
  "lang.switch": { en: "Language", nl: "Taal", de: "Sprache" },

  // CTA band (default copy; pages may override)
  "ctaBand.eyebrow": { en: "Book a demo", nl: "Boek een demo", de: "Demo buchen" },
  "ctaBand.title": {
    en: "Ready to experience holography done right?",
    nl: "Klaar voor holografie zoals het hoort?",
    de: "Bereit für Holografie, wie sie sein soll?",
  },
  "ctaBand.text": {
    en: "Book a personal demo and discover how our holographic solutions add value for your company. Is your audience ready for next-level immersive experiences?",
    nl: "Boek een persoonlijke demo en ontdek hoe onze holografische displays uw merk versterken. Is uw publiek klaar voor een onvergetelijke, meeslepende ervaring?",
    de: "Buchen Sie eine persönliche Demo und erleben Sie, wie unsere holografischen Displays Ihre Marke stärken. Ist Ihr Publikum bereit für ein unvergessliches, immersives Erlebnis?",
  },

  // Footer
  "footer.tagline": {
    en: "Innovation with a human touch. Holographic technology that brings real people and real connections wherever they matter.",
    nl: "Innovatie met een menselijke touch. Holografische technologie die echte mensen en echt contact brengt, juist daar waar het telt.",
    de: "Innovation mit menschlicher Note. Holografische Technologie, die echte Menschen und echten Kontakt dorthin bringt, wo es zählt.",
  },
  "footer.products": { en: "Products", nl: "Producten", de: "Produkte" },
  "footer.sectors": { en: "Sectors", nl: "Sectoren", de: "Branchen" },
  "footer.company": { en: "Company", nl: "Bedrijf", de: "Unternehmen" },
  "footer.about": { en: "About", nl: "Over ons", de: "Über uns" },
  "footer.cases": { en: "Cases", nl: "Cases", de: "Referenzen" },
  "footer.insights": { en: "Insights", nl: "Insights", de: "Insights" },
  "footer.contact": { en: "Contact", nl: "Contact", de: "Kontakt" },
  "footer.rights": {
    en: "All rights reserved.",
    nl: "Alle rechten voorbehouden.",
    de: "Alle Rechte vorbehalten.",
  },

  // Misc
  "wa.aria": {
    en: "Chat with Holoconnects on WhatsApp",
    nl: "Chat met Holoconnects via WhatsApp",
    de: "Mit Holoconnects über WhatsApp chatten",
  },
} as const;

export type UiKey = keyof typeof ui;

/** Returns a translator bound to a language: `const tt = useTranslations(lang)`. */
export function useTranslations(lang: Lang) {
  return function translate(key: UiKey): string {
    const entry = ui[key];
    return entry[lang] ?? entry[defaultLang];
  };
}
