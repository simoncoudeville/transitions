import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		authors: z.string(),
		size: z.number(),
		price: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		year: z.number(),
		tags: z.array(z.string()),
		updatedDate: z.coerce.date().optional(),
		// heroImage: image().refine((img) => img.width >= 1000, {
		// 	message: "Cover image must be at least 1080 pixels wide!",
		// }),
		heroImage: z.string(),
	}),
});

export const collections = { blog };
