// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://www.holoconnects.com',
  // English is the default locale and is served at the root (`/`). Dutch lives
  // under `/nl/`. `prefixDefaultLocale: false` keeps EN URLs unprefixed, which
  // is the SEO-friendly choice (root = x-default).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Emits <xhtml:link rel="alternate" hreflang="…"> for every page so the
      // sitemap advertises both language variants to search engines.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          nl: 'nl-NL',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
