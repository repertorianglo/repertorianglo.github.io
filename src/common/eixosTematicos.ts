
// Helper to fetch eixosTematicos dynamically using Astro Content Collections
// Usage: const eixos = await getEixosTematicos();
export async function getEixosTematicos() {
  const { getCollection } = await import('astro:content');
  // Returns an array of entries, each with .id and .data (frontmatter)
  const entries = await getCollection('eixosTematicos');
  return entries.map(entry => ({
    ...entry.data,
    id: entry.id,
  })).sort((a, b) => (a.order || 0) - (b.order || 0));
}

export const eixosArray = [

];

export interface EixoTematicoI {
  order: number;
  slug: string;
  href: string;
  title: string;
  description: string;
  image: string | undefined;
}
