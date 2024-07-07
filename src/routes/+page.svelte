<script lang="ts">
	import PageSeo from '$lib/components/seo/PageSeo.svelte';
	import type { PageSeoMetaData } from '$lib/index.js';

	const seoMeta: PageSeoMetaData = {
		name: '',
		description: '',
		url: '',
		ldImage: {
			name: '',
			url: '',
			width: '',
			height: ''
		},
		ogImage: {
			name: '',
			url: '',
			width: '',
			height: ''
		},
		organization: {
			name: '',
			url: '',
			email: '',
			legalName: ''
		}
	};
</script>

<PageSeo seo={seoMeta} />
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
