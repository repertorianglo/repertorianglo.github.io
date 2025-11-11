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
        subtitulo: z.string().optional(),
        dataPublicacao: z.coerce.date(),
        responsavel: z.string().optional(),
        criadoPor: z.array(z.string()),
      }),
  });

const blog = {
  "cultura-e-arte": defineBlogCollection("cultura-e-arte"),
  educacao: defineBlogCollection("educacao"),
  "meio-ambiente-e-sustentabilidade": defineBlogCollection(
    "meio-ambiente-e-sustentabilidade"
  ),
  "saude-e-ciencia": defineBlogCollection("saude-e-ciencia"),
  sociedade: defineBlogCollection("sociedade"),
  "tecnologia-e-inovacao": defineBlogCollection("tecnologia-e-inovacao"),
  "geopolitica-e-atualidades": defineBlogCollection(
    "geopolitica-e-atualidades"
  ),
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
      slug: z.string(),
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
