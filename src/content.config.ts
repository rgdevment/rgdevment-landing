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
  loader: glob({ pattern: "*/*/{en,es}.md", base: "./src/news" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string().max(170),
        date: z.coerce.date().optional(),
        release: z.string().regex(/^\d+\.\d+\.\d+$/).optional(),
        page: z.string().regex(/^[a-z0-9-]+$/).optional(),
        cover: image().optional(),
      })
      .refine((one) => one.date || one.release, "an article needs a date, or the release it waits for"),
});

export const collections = { docs, privacy, terms, news };
