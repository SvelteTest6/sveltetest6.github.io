<script lang="ts">
	import NavPanelExpandir from '$lib/InterfazSitio/NavBar/NavPanel/NavPanelExpandir.svelte';
	import {
		cambiarExpansion,
		obtenerExpansion,
		generarIdHTML
	} from '../../../Logica/LogicaPropiedadeseElementosHTML/PropiedadesElementosHTML';
	let { nodoPagina } = $props();

	function click(e: MouseEvent, idHTML: string) {
		if (obtenerExpansion(idHTML)) {
			cambiarExpansion(idHTML);
		}
	}
</script>

{#snippet link(nodoPagina)}
	<a
		class="NavLinkEnlace"
		href={nodoPagina.id}
		onclick={(e) => click(e, generarIdHTML('NavPanel', 'NavPanelLista', nodoPagina.id))}
		>{nodoPagina.id}</a
	>
	{#if nodoPagina.nodosInferiores.length > 0 && nodoPagina.id != '/'}
		<NavPanelExpandir {nodoPagina} />
	{/if}
{/snippet}
{@render link(nodoPagina)}

<style lang="scss">
	.NavLinkEnlace {
		font-size: 1.2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-right: 1rem;
		height: fit-content;
		width: -webkit-fill-available;
	}
</style>
