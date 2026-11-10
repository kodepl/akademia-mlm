import { defineCollection, z } from "astro:content";

const wyklad = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorBio: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    image: z.string(),
    imageCaption: z.string(),
    // 01–99 — kampanie PBN dokładają kolejne numery poza kursem 01–20
    numer: z.string().regex(/^(0[1-9]|[1-9][0-9])$/),
  }),
});

export const collections = { wyklad };
