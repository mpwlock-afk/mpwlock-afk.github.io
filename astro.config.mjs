// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { redirects } from './src/data/redirects.ts';

// Legacy redirect stubs are noindex meta-refresh pages — keep them OUT of the
// sitemap so search engines only see canonical, indexable URLs.
const redirectPaths = new Set(
  redirects.map((r) => `https://www.holoconnects.com${r.from}/`),
);

// https://astro.build
export default defineConfig({
  site: 'https://www.holoconnects.com',
  // English is the default locale and is served at the root (`/`). Dutch lives
  // under `/nl/`, German under `/de/`. `prefixDefaultLocale: false` keeps EN
  // URLs unprefixed, which is the SEO-friendly choice (root = x-default).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'de'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !redirectPaths.has(page),
      // Emits <xhtml:link rel="alternate" hreflang="…"> for every page so the
      // sitemap advertises both language variants to search engines.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          nl: 'nl-NL',
          de: 'de-DE',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
