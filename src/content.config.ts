import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkItem = z.object({
  id: z.string(),
  title: z.string(),
  intro: z.string(),
});

const site = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/site' }),
  schema: z.object({
    language: z.enum(['pt', 'en']),
    labels: z.record(z.string(), z.unknown()),
    openHours: z.record(z.string(), z.unknown()),
    chrono: z.array(z.unknown()),
    services: z.array(z.object({
      title: z.string(), image: z.string(), icon: z.string(), text: z.string(), link: z.string(),
    })),
    testimonials: z.array(z.object({
      title: z.string(), text: z.string(), image: z.string(), author: z.string(), stars: z.number(),
    })),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })),
    nav: z.array(linkItem),
    footer: z.array(linkItem),
    team: z.array(z.object({ name: z.string(), image: z.string(), description: z.string() })),
    contacts: z.array(z.object({
      title: z.string(), value: z.string(), text: z.string(), link: z.string(), image: z.string(),
    })),
    home: z.unknown(),
    agreements: z.array(z.object({ title: z.string(), image: z.string().optional() })),
    header: z.array(z.string()),
    learnMore: z.string(),
  }),
});

export const collections = { site };
