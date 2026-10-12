import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./.wikis/out" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    product: z.string(),
    locale: z.enum(["en", "es"]),
    page: z.string(),
    twin: z.string().nullable(),
    section: z.string(),
    order: z.number(),
    source: z.string().url(),
  }),
});

const privacy = defineCollection({
  loader: glob({ pattern: "*.md", base: "./.wikis/privacy" }),
  schema: z.object({
    title: z.string(),
    product: z.string(),
    source: z.string().url(),
  }),
});

export const collections = { docs, privacy };
