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
    numer: z.string().regex(/^(0[1-9]|1[0-2])$/),
  }),
});

export const collections = { wyklad };
