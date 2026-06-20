import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ── Blog / Insights collection ───────────────────────────────────────────
// Cornerstone SEO content (guides, comparisons, pricing). English-first; the
// pages opt out of hreflang alternates via <Base localized={false}>.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default("Guide"),
    keywords: z.array(z.string()).default([]),
    // Optional FAQ block rendered + emitted as FAQPage JSON-LD.
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
