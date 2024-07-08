import { z } from 'zod';

export const PageLinkSchema = z.object({
	href: z.string().url(),
	title: z.string()
});

export type PageLink = z.infer<typeof PageLinkSchema>;
