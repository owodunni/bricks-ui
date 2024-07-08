<script lang="ts">
	import Container from '../containers/Container.svelte';
	import MenuIcon from '../icons/Menu.svelte';
	import ChevronUpIcon from '../icons/ChevronUp.svelte';
	import { fade, fly } from 'svelte/transition';
	import type { PageLink } from './types.js';

	export let navLinks: PageLink[];

	let open = false;

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}
</script>

<header>
	<nav>
		<Container class={'relative z-50 flex justify-between py-8 '}>
			<div class="relative z-10 flex items-center gap-16">
				<slot name="logo" />
				<div class="hidden lg:flex lg:gap-12 lg:pl-48">
					{#each navLinks as link}
						<a href={link.href} class="btn variant-ghost text-base font-normal">
							{link.title}
						</a>
					{/each}
				</div>
			</div>
			<div class="flex items-center gap-6">
				<div class="flex gap-4 lg:hidden">
					<div aria-hidden on:click={close}>
						<slot name="action-extra-sm" />
					</div>
					<button
						type="button"
						aria-haspopup="menu"
						aria-expanded={open}
						aria-label={'menu'}
						aria-controls={open ? 'popover-panel' : undefined}
						class="btn-icon relative z-10 -m-2"
						on:click={toggle}
					>
						{#if open}
							<ChevronUpIcon class="h-8 w-8" />
						{:else}
							<MenuIcon class="h-8 w-8" />
						{/if}
					</button>
					{#if open}
						<div
							aria-hidden="true"
							class="bg-background-300/60 fixed inset-0 z-0 backdrop-blur-sm"
							in:fade|global={{ duration: 150 }}
							out:fade|global={{ duration: 200 }}
							on:click={close}
						/>
						<div
							class="absolute inset-x-0 top-0 origin-top"
							in:fly|global={{ y: -64, duration: 150 }}
							out:fly|global={{ y: -64, duration: 200 }}
						>
							<div
								id="popover-panel"
								class="bg-background-100 z-0 w-screen rounded-b-2xl px-6 pb-6 pt-32 shadow-2xl shadow-neutral-900/20"
							>
								<div class="flex flex-col items-start space-y-4">
									{#each navLinks as link}
										<a
											href={link.href}
											class="btn text-neutral-700 hover:text-neutral-900"
											on:click={toggle}>{link.title}</a
										>
									{/each}
								</div>
								<div class="mt-8 flex flex-col gap-4" on:click={close} aria-hidden>
									<slot name="action-sm" />
								</div>
							</div>
						</div>
					{/if}
				</div>
				<slot name="action-extra-lg" />
				<slot name="action-lg" />
			</div>
		</Container>
	</nav>
</header>
