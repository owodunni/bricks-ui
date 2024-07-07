import { z } from 'zod';

/**
 * A organization maps to part of the {@see https://schema.org/Organization}
 */
const Organization = z.object({
	url: z.string().url(),
	email: z.string().email(),
	name: z.string(),
	legalName: z.string()
});

/** A Image maps to part of the {@see https://schema.org/ImageObject}*/
const Image = (aspectRatio: number, minWidth: number, minHeight: number) =>z.object({
	url: z.string().url(),
	name: z.string(),
	width: z.number().min(minWidth).transform((v) => v.toString()),
	height: z.number().min(minHeight).transform((v) => v.toString())
}).refine((obj) => Math.abs(Number(obj.width)/Number(obj.height) - aspectRatio) < 0.1);

/**
 * A SeoMetaData loosely maps to part of the {@see https://schema.org/WebPage}
 */
const PageSeoMetaData = z.object({
	/** Title is shown when the page shows up on a surp */
	name: z.string(),
	/** description is the text shown when the page shows up on a surp */
	description: z.string(),
	url: z.string(),
	ldImage: Image(16/9, 600, 300),
  /** Recommended size is 1200 x 630 */
	ogImage: Image(1.91, 600, 315),
	organization: Organization
});

export type PageSeoMetaData = z.infer<typeof PageSeoMetaData>;
