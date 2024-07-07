<script lang="ts">
	import type { PageSeoMetaData } from './types.js';
	import  { ldJsonFromPageSeo } from './types.js';

	export let seo: PageSeoMetaData;
	const ldJson = ldJsonFromPageSeo(seo);
</script>

<svelte:head>
		<title>{seo.name}</title>
		<meta name="description" content={seo.description} />
		<meta property="og:title" content={seo.name} />
		<meta property="og:description" content={seo.description} />
		{#if seo.ogImage}
			<meta property="og:image" content={seo.ogImage.url} />
			<meta property="og:image:width" content={seo.ogImage.width.toString()} />
			<meta property="og:image:height" content={seo.ogImage.height.toString()} />
			<meta property="og:image:alt" content={seo.ogImage.name} />
		{/if}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html ldJson}
</svelte:head>
