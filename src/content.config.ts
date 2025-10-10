import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const defineBlogCollection = (name: string) =>
  defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({
      base: `./src/content/blog/${name}`,
      pattern: "**/*.{md,mdx}",
    }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
      z.object({
        titulo: z.string(),
        dataPublicacao: z.coerce.date(),
        responsavel: z.string().optional(),
        grupo: z.number().optional(),
        criadoPor: z.string().optional(),
      }),
  });

const blog = {
  "tecnologia-e-inovacao": defineBlogCollection('tecnologia-e-inovacao'),
  "cultura-e-arte": defineBlogCollection('cultura-e-arte'),
};

const eixosTematicos = defineCollection({
  // Load Markdown and MDX files in the `src/content/eixos-tematicos/` directory.
  loader: glob({
    base: "./src/content/eixos-tematicos",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      order: z.number().optional(),
      href: z.string(),
      title: z.string(),
      description: z.string(),
      image: image().optional(),
    }),
});

export const collections = { 
  ...blog,
  eixosTematicos 
};
