<script lang="ts">
	import NavPanelEnlace from '$lib/InterfazSitio/NavBar/NavPanel/NavPanelEnlace.svelte';
	import { Nodo } from '$lib/Logica/LogicaNodosDatos/NodosDatos.svelte';
	import { propiedadesElementosHTML, cambiarExpansion, generarIdHTML, agregarElementoHTML, cambiarPropiedadPorIdElementoHTML } from '$lib/Logica/LogicaPropiedadeseElementosHTML/PropiedadesElementosHTML';

	let { nodoLista }: { nodoLista: Nodo | undefined } = $props();
	function inicializarExpansionListas(nodo: Nodo|undefined){
		if(nodo!=undefined){
		for(let i in nodo.nodosInferiores){
			agregarElementoHTML(generarIdHTML("NavPanel","NavPanelLista",nodo.nodosInferiores[i].id))
			cambiarPropiedadPorIdElementoHTML(generarIdHTML("NavPanel","NavPanelLista",nodo.nodosInferiores[i].id), "expandido", false)
			inicializarExpansionListas(nodo.nodosInferiores[i])
		}
	}
	}
	inicializarExpansionListas(nodoLista);
	console.log(propiedadesElementosHTML)
</script>

{#snippet listaLinks(nodoLista: Nodo)}
	{#each nodoLista.nodosInferiores as nodoPagina}
		<div id={generarIdHTML("NavPanel","NavPanelEnlacePrincipal",nodoPagina.id)} class="NavPanelEnlacePrincipal" 
		style="margin-left: {nodoPagina.nivelAnidacion * 1}rem;">
			<NavPanelEnlace {nodoPagina} />
		</div>
		{#if nodoPagina.nodosInferiores.length > 0}
			<div id={generarIdHTML("NavPanel","NavPanelLista",nodoPagina.id)} class="NavLista Inicializada NoExpandida">
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
		max-height: 2rem;
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
		max-height: 2rem;
	}
	100% {
		max-height: 2000px;
	}
}

:global(.NavLista.Inicializada.NoExpandida) {
		overflow: hidden;
		max-height: 2000px;
		animation: animarListaColapsar 0s ease 1 both paused;
	}

	:global(.NavLista.NoExpandida) {
		overflow: hidden;
		animation: animarListaColapsar 0.16s ease both running;
	}

	:global(.NavLista.Expandida) {
		overflow: hidden;
		animation: animarListaExpandir 0.3s ease-in both running;
	}

	:global(.NavPanelEnlacePrincipal) {
		display: flex;
		padding-left: 1rem;
		}
</style>
