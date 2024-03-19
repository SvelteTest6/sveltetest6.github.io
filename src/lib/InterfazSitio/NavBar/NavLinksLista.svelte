<script lang="ts">
	import NavLinksEnlace from './NavLinksEnlace.svelte';
	import { Nodo } from '$lib/Logica/LogicaNodosDatos/NodosDatos.svelte';
	import { arregloSitioEstadosNavLinks } from './NavLinks.svelte';

	let { nodoLista }: { nodoLista: Nodo | undefined } = $props();

	function cambiarExpansion(id: string) {
		let indice = arregloSitioEstadosNavLinks.obtener.findIndex((elemento) => elemento.id == id);
		arregloSitioEstadosNavLinks.obtener[indice]?.agregarDato(
			'expandido',
			!arregloSitioEstadosNavLinks.obtener[indice].obtenerDato('expandido')
		);
		let expansion = arregloSitioEstadosNavLinks.obtener[indice].obtenerDato('expandido');
		if (expansion) {
			document.getElementById('NavLista-'.concat(id))?.classList.add('expandida');
			document.getElementById('NavLista-'.concat(id))?.classList.remove('noExpandida');
		} else {
			document.getElementById('NavLista-'.concat(id))?.classList.add('noExpandida');
			document.getElementById('NavLista-'.concat(id))?.classList.remove('expandida');
		}
	}
</script>

{#snippet listaLinks(nodoLista: Nodo)}
	{#each nodoLista.nodosInferiores as nodoPagina}
		<div id={nodoPagina.id} onclick={() => cambiarExpansion(nodoPagina.id)}>
			<NavLinksEnlace {nodoPagina} />
		</div>
		{#if nodoPagina.nodosInferiores.length > 0}
			<div id="NavLista-{nodoPagina.id}" class="NavLista noExpandida">
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
	:global(.noExpandida > *) {
		overflow: hidden;
		animation: animarListaColapsar 0.16s ease-out 1 both;
	}

	:global(.expandida > *) {
		overflow: hidden;
		animation: animarListaExpandir 0.4s ease 1 both;
	}
</style>
