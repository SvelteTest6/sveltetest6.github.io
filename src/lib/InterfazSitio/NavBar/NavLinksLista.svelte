<script lang="ts">
	import NavLinksEnlace from '$lib/InterfazSitio/NavBar/NavLinksEnlace.svelte';
	import { Nodo } from '$lib/Logica/LogicaNodosDatos/NodosDatos.svelte';
	import { arregloSitioEstadosNavLinks, cambiarExpansion, generarIdNavLinks } from '$lib/InterfazSitio/NavBar/NavLinks.svelte';

	let { nodoLista }: { nodoLista: Nodo | undefined } = $props();

</script>

{#snippet listaLinks(nodoLista: Nodo)}
	{#each nodoLista.nodosInferiores as nodoPagina}
		<div id={nodoPagina.id} class="NavLinksListaEnlacePrincipal" onclick={() => cambiarExpansion(nodoPagina.id)}>
			<NavLinksEnlace {nodoPagina} />
		</div>
		{#if nodoPagina.nodosInferiores.length > 0}
			<div id={generarIdNavLinks(nodoPagina.id)} class="NavLista listaNoExpandidaInicializada">
				{@render listaLinks(nodoPagina)}
			</div>
		{/if}
	{/each}
{/snippet}

{#if nodoLista != undefined}
	{@render listaLinks(nodoLista)}
{/if}

<style lang="scss">
@keyframes #{animarListaColapsar} {
	0% {
		max-height: 2000px;
	}

	30% {
		max-height: 2em;
	}

    100% {
		max-height: 0;
	}
}

@keyframes #{animarListaExpandir} {
    0% {
		max-height: 0;
	}
	30% {
		max-height: 2em;
	}
	100% {
		max-height: 2000px;
	}
}

:global(.listaNoExpandidaInicializada) {
		overflow: hidden;
		max-height: 2000px;
		animation: animarListaColapsar 0s ease-out 1 both paused;
	}

	:global(.listaNoExpandida) {
		overflow: hidden;
		max-height: 2000px;
	}

	:global(.listaNoExpandida) {
		overflow: hidden;
		animation: animarListaColapsar 0.16s ease-out 1 both running;
	}

	:global(.listaExpandida) {
		overflow: hidden;
		animation: animarListaExpandir 0.4s ease 1 both;
	}

	:global(.NavLinksListaEnlacePrincipal) {
		display: flex;
	}
</style>
