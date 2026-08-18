import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    icon: z.string(),
    theme: z.enum(['blue-a', 'blue-b']).default('blue-a'),
    status: z.enum(['active', 'complete']).default('active'),
    tagLabel: z.string(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    pubs: z
      .array(
        z.object({
          title: z.string(),
          venue: z.string(),
          pdf: z.string().nullable().default(null),
          code: z.string().nullable().default(null),
          talk: z.string().nullable().default(null),
        })
      )
      .default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { research, blog };
