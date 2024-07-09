<script lang="ts">
	import Github from '$lib/components/icons/Github.svelte';
	import Header from '$lib/components/nav/Header.svelte';
	import type { PageLink } from '$lib/components/nav/types.js';
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
			email: 'temp@tmp.se',
			legalName: ''
		}
	};

	const navLinks: PageLink[] = [
		{
			href: 'https://someLink.se',
			title: 'About'
		},
		{
			href: 'https://someLink.se',
			title: 'Docs'
		},
		{
			href: 'https://someLink.se',
			title: 'Profits'
		}
	];
</script>

<Header {navLinks} class="bg-background-200">
	<a href="/" aria-label="bricks-ui" slot="logo">Bricks-ui</a>
	<a
		slot="action-extra-sm"
		class="btn-icon relative z-10 h-8 w-8"
		href="https://github.com/owodunni/bricks-ui"
	>
		<Github class="p-[2px]" />
	</a>
	<a
		slot="action-extra-lg"
		class="btn-icon m-0 hidden p-0 lg:block"
		href="https://github.com/owodunni/bricks-ui"
	>
		<Github class="h-10 w-10 p-1" />
	</a>
	<a class="btn variant-filled" href="/" slot="action-sm"> Action! </a>
	<a class="btn variant-filled hidden lg:block" href="/" slot="action-lg"> Action! </a>
</Header>

<PageSeo seo={seoMeta} />
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
