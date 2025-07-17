import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
    	title: z.string().optional(),
    	description: z.string().optional(),
    	// Transform string to Date object
    	pubDate: z.coerce.date().optional(), // <--- 把它设为可选
    	updatedDate: z.coerce.date().optional(),
    	heroImage: image().optional(),
}),
});

export const collections = { blog };
