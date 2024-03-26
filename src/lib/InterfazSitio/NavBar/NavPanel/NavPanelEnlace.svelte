<script lang="ts">
	import NavPanelExpandir from '$lib/InterfazSitio/NavBar/NavPanel/NavPanelExpandir.svelte';
	import {
		cambiarExpansion,
		obtenerExpansion,
		generarIdHTML
	} from '../../../Logica/LogicaPropiedadeseElementosHTML/PropiedadesElementosHTML';
	let { nodoPagina } = $props();

	function click(e: MouseEvent, idNodo: string) {
        let idHTML=generarIdHTML("NavPanel", "NavPanelLista",idNodo)
        let elementoHTML=document.getElementById(idHTML)
        elementoHTML?.classList.remove("Inicializada")
		if (!obtenerExpansion(idHTML)) {
            elementoHTML?.classList.remove("NoExpandida")
            elementoHTML?.classList.add("Expandida")
			cambiarExpansion(idHTML);
        }
	}
</script>

{#snippet link(nodoPagina)}
	<a
		class="NavPanelEnlace"
		href={nodoPagina.id}
		onclick={(e) => click(e, nodoPagina.id)}
		>{nodoPagina.id}</a
	>
	{#if nodoPagina.nodosInferiores.length > 0 && nodoPagina.id != '/'}
		<NavPanelExpandir {nodoPagina} />
	{/if}
{/snippet}
{@render link(nodoPagina)}

<style lang="scss">
	.NavPanelEnlace {
		font-size: 1.2rem;
		padding-top: 0.75rem;
		padding-bottom: 0.5rem;
		padding-right: 1rem;
		width: -webkit-fill-available;
	}
</style>
