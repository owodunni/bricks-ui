<script lang="ts">
	let clazz = '';
	export { clazz as class };
</script>

<div class={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${clazz || ''}`}><slot /></div>
