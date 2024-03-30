<script lang="ts">
	import NavPanel from '$lib/InterfazSitio/NavBar/NavPanel/NavPanel.svelte';
    let {children}=$props()
</script>

{#snippet contenido()}
<NavPanel navRaiz={"/"}/>
{@render children()}
{/snippet}
{@render contenido()}

<style lang="scss">
</style>