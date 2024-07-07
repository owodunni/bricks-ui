import { z } from 'zod';
import type { WebPage, WithContext } from 'schema-dts';

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
const Image = (aspectRatio: number, minWidth: number, minHeight: number) =>
	z
		.object({
			url: z.string().url(),
			name: z.string(),
			width: z.number().min(minWidth),
			height: z.number().min(minHeight)
		})
		.refine((obj) => Math.abs(Number(obj.width) / Number(obj.height) - aspectRatio) < 0.1);

/**
 * A SeoMetaData loosely maps to part of the {@see https://schema.org/WebPage}
 */
export const PageSeoMetaDataSchema = z.object({
	/** Title is shown when the page shows up on a surp */
	name: z.string(),
	/** description is the text shown when the page shows up on a surp */
	description: z.string(),
	url: z.string(),
	ldImage: Image(1.91, 600, 300),
	/** Recommended size is 1200 x 630 */
	ogImage: Image(16 / 9, 600, 315),
	organization: Organization
});

export type PageSeoMetaData = z.infer<typeof PageSeoMetaDataSchema>;

/**
 * produces a script tag that can be injected into the header to get better seo.
 */
export const ldJsonFromPageSeo = (seo: PageSeoMetaData) => {
	PageSeoMetaDataSchema.parse(seo);
	const ldJson = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: seo.name,
		description: seo.description,
		...(seo.ldImage && {
			image: {
				'@type': 'ImageObject',
				url: seo.ldImage.url,
				width: seo.ldImage.width.toString(),
				height: seo.ldImage.height.toString()
			}
		}),
		publisher: {
			'@type': 'Organization',
			...seo.organization
		}
	} satisfies WithContext<WebPage>;

	return `<script type="application/ld+json">${JSON.stringify(ldJson)}${'</'}script>`;
};
