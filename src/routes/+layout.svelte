<script lang="ts">
	import NavLinksPanel from '$lib/InterfazSitio/NavBar/NavLinksPanel.svelte';
</script>

<main>
    <NavLinksPanel navRaiz={"/"}/>
    <slot/>
</main>