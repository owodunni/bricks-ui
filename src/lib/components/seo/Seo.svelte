<script lang="ts">
	import type { PageSeoMetaData } from './types.ts';
	import type { WebPage, WithContext } from 'schema-dts';

	export let seo: PageSeoMetaData;
	const ldJson = {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: seo.name,
			description: seo.description,
			...(seo.ldImage && {
				image: {
					'@type': 'ImageObject',
					url: seo.ldImage.url,
					width: seo.ldImage.width,
					height: seo.ldImage.height, 
				}
			}),
			publisher: {
				'@type': 'Organization',
				...seo.organization
			}
		} satisfies WithContext<WebPage>;
</script>

<svelte:head>
	{#if seo}
		<title>{seo.name}</title>
		<meta name="description" content={seo.description} />
		<meta property="og:title" content={seo.name} />
		<meta property="og:description" content={seo.description} />
		{#if seo.ogImage}
			<meta property="og:image" content={seo.ogImage.url} />
			<meta property="og:image:width" content={seo.ogImage.width} />
			<meta property="og:image:height" content={seo.ogImage.height} />
			<meta property="og:image:alt" content={seo.ogImage.name} />
		{/if}
	{/if}
	{#if ldJson}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}${'</'}script>`}
	{/if}
</svelte:head>
