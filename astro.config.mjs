import { defineConfig } from 'astro/config';
import { z } from 'astro:content'; // <-- Add this line

export default defineConfig({
  collections: {
    projects: {
      type: 'content',
      schema: () => ({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
      }),
    },
  },
});