import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const eixosTematicos = defineCollection({
  // Load Markdown and MDX files in the `src/content/eixos-tematicos/` directory.
  loader: glob({
    base: "./src/content/eixos-tematicos",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      href: z.string(),
      title: z.string(),
      description: z.string(),
      image: image().optional(),
    }),
});

export const collections = { blog, eixosTematicos };
