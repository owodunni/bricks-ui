<script lang="ts">
	import type { PageSeoMetaData } from '$lib/index.js';
	import { PageSeo } from '$lib/index.js';

	const seoMeta: PageSeoMetaData = {
		name: 'hello',
		description: '',
		url: 'https://hello.se',
		ldImage: {
			name: '',
			url: 'https://hello.se',
			width: 600,
			height: 315
		},
		ogImage: {
			name: '',
			url: 'https://hello.se',
			width: 1920,
			height: 1080
		},
		organization: {
			name: '',
			url: 'https://hello.se',
			email: '',
			legalName: ''
		}
	};
</script>

<PageSeo seo={seoMeta} />
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
