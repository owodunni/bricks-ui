<!-- svelte-ignore a11y-mouse-events-have-key-events --><svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
	aria-hidden="true"
	{...$$restProps}
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:keydown
	><slot />
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
</svg>
