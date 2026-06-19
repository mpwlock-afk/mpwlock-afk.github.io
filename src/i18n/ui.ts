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
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";
export const locales: Lang[] = ["en", "nl"];

// BCP-47 tags used for <html lang>, og:locale and hreflang.
export const localeTag: Record<Lang, string> = {
  en: "en",
  nl: "nl",
};
export const ogLocale: Record<Lang, string> = {
  en: "en_US",
  nl: "nl_NL",
};

// ── Localized content helper ─────────────────────────────────────────────
// A translatable value is either a plain string (same in both languages) or a
// per-locale object. `t()` resolves it, falling back to English.
export type Loc = { en: string; nl: string };
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
  if (parts[0] === "nl") parts.shift();
  return "/" + parts.join("/");
}

/**
 * Build the href for a logical path in a given language. Paths are normalized
 * to a single trailing slash so internal links + hreflang match Astro's
 * directory-style canonical URLs (e.g. `/products/`).
 *   localizePath("/products", "en") → "/products/"
 *   localizePath("/products", "nl") → "/nl/products/"
 *   localizePath("/", "nl")         → "/nl/"
 */
export function localizePath(path: string, lang: Lang): string {
  let clean = path === "" ? "/" : path.startsWith("/") ? path : "/" + path;
  if (clean !== "/" && !clean.endsWith("/")) clean += "/";
  if (lang === defaultLang) return clean;
  return clean === "/" ? "/nl/" : `/nl${clean}`;
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
  "nav.products": { en: "Products", nl: "Producten" },
  "nav.sectors": { en: "Sectors", nl: "Sectoren" },
  "nav.cases": { en: "Cases", nl: "Cases" },
  "nav.about": { en: "About", nl: "Over ons" },
  "nav.contact": { en: "Contact", nl: "Contact" },
  "cta.bookDemo": { en: "Book a demo", nl: "Boek een demo" },
  "cta.exploreHolobox": {
    en: "Explore the Holobox",
    nl: "Ontdek de Holobox",
  },
  "nav.openMenu": { en: "Open menu", nl: "Menu openen" },
  "lang.switch": { en: "Language", nl: "Taal" },

  // CTA band (default copy; pages may override)
  "ctaBand.eyebrow": { en: "Book a demo", nl: "Boek een demo" },
  "ctaBand.title": {
    en: "Ready to experience holography done right?",
    // TODO(native-review): marketing tone
    nl: "Klaar om holografie te ervaren zoals het hoort?",
  },
  "ctaBand.text": {
    en: "Book a personal demo and discover how our holographic solutions add value for your company. Is your audience ready for next-level immersive experiences?",
    // TODO(native-review): marketing tone
    nl: "Boek een persoonlijke demo en ontdek hoe onze holografische oplossingen waarde toevoegen voor uw bedrijf. Is uw publiek klaar voor meeslepende ervaringen van het volgende niveau?",
  },

  // Footer
  "footer.tagline": {
    en: "Innovation with a human touch. Holographic technology that brings real people and real connections wherever they matter.",
    // TODO(native-review): marketing tone
    nl: "Innovatie met een menselijke touch. Holografische technologie die echte mensen en echte connecties brengt waar ze ertoe doen.",
  },
  "footer.products": { en: "Products", nl: "Producten" },
  "footer.sectors": { en: "Sectors", nl: "Sectoren" },
  "footer.company": { en: "Company", nl: "Bedrijf" },
  "footer.about": { en: "About", nl: "Over ons" },
  "footer.cases": { en: "Cases", nl: "Cases" },
  "footer.contact": { en: "Contact", nl: "Contact" },
  "footer.rights": {
    en: "All rights reserved.",
    nl: "Alle rechten voorbehouden.",
  },

  // Misc
  "wa.aria": {
    en: "Chat with Holoconnects on WhatsApp",
    nl: "Chat met Holoconnects via WhatsApp",
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
