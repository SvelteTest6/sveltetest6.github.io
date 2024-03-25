<script lang="ts">
	import NavPanel from '$lib/InterfazSitio/NavBar/NavPanel/NavPanel.svelte';
</script>

<main>
    <NavPanel navRaiz={"/"}/>
    <slot/>
</main>