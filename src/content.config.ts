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
    updated: z.string(),
    source: z.string().url(),
  }),
});

const policy = z.object({
  title: z.string(),
  product: z.string(),
  source: z.string().url(),
});

const privacy = defineCollection({
  loader: glob({ pattern: "*.md", base: "./.wikis/privacy" }),
  schema: policy,
});

const terms = defineCollection({
  loader: glob({ pattern: "*.md", base: "./.wikis/terms" }),
  schema: policy,
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./.wikis/news" }),
  schema: z.object({
    product: z.string(),
    version: z.string(),
    locale: z.enum(["en", "es"]),
    title: z.string(),
    description: z.string(),
    card: z.string().nullable(),
  }),
});

export const collections = { docs, privacy, terms, news };
