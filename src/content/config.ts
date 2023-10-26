import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		authors: z.array(z.string()),
		size: z.number(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		year: z.number(),
		tags: z.array(z.string()),
		updatedDate: z.coerce.date().optional(),
		company: z.string(),
		credit: z.string().optional(),
		creditLink: z.string().optional(),
		draft: z.boolean().optional(),
		heroImage: image().refine((img) => img.width >= 1300, {
			message: "Cover image must be at least 1500 pixels wide!",
		}),
		// heroImage: z.string(),
	}),
});

export const collections = { blog };
