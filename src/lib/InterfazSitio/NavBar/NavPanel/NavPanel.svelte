<script lang="ts">
	import { writable, get } from 'svelte/store';
	import { mapaArbolSitio, mapaArregloSitio } from '$lib/Logica/LogicaMapeadoSitio/MapeadoSitio.svelte';

	import {propiedadesElementosHTML} from "../../../Logica/LogicaPropiedadeseElementosHTML/PropiedadesElementosHTML"

	import NavPanelLista from './NavPanelLista.svelte';
	import NavPanelEnlace from './NavPanelEnlace.svelte';
	//El panel de links de navegación recibe una ruta con navRaiz, la más probable es "/"
	let { navRaiz } = $props();
	//se genera el arbol del sitio, buscando en el $mapaArregloSitio aquel elemento (tipo Nodo) tal que su id sea igual a navRaiz. Se clona para realizar una copia y se genera su arbol
	let arbolSitio=mapaArregloSitio.find(elemento=> elemento.id==navRaiz)?.clonar().generarArbol()
	//Se genera arbolSitioInferior, el cual servirá en el siguiente paso
	let arbolSitioInferior=$state(arbolSitio?.clonar().generarArbol())
	//En este paso, se recorre la anidación, de manera que el elemento de $mapaArregloSitio cuyo id es navRaiz, y los elementos de la propiedad nodosInferiores $mapaArregloSitioInferior cuyo id es navRaiz tienen la misma anidación

	/*
	Ejemplo: Si navRaiz="/", la anidación de los links seguiría la siguiente lógica

	/
	/subruta-1/
		/subruta-1/subruta1-1/
			/subruta-1/subruta-1-1/subruta-3/
	/subruta-2/
		/subruta-2/subruta2-1/
		/subruta-2/subruta-2-2/
	...
	etc

	es decir, el link de página de inicio "/" no encierra a los links "principales", pero si se aumenta la anidación se encierran automáticamente.
	*/
	arbolSitioInferior?.actualizarNivelAnidacion(-1)
	let arregloSitioInferior=arbolSitioInferior?.generarLineal()
</script>

{#snippet navBar(navRaiz)}
		<NavPanelLista
			nodoLista={arregloSitioInferior?.find((element) => element.id == navRaiz)}
		/>
{/snippet}

<div class="NavPanel">
	<div class="NavPanelInicio"><NavPanelEnlace nodoPagina={arbolSitio}/>
	</div>
	{@render navBar(navRaiz)}
</div>

<style lang="scss">
	.NavPanel {
		position: fixed;
		width: auto;
		left: 0rem;
		right: 0rem;
		margin:0;
		background-color: rgb(255, 200, 200);
		border-radius: 0.5rem;
		padding-left: 1rem;
		padding: 0rem;
		top: 3em;
	}

	.NavPanelInicio{
		display: flex;
		padding-left: 1rem;
	}
</style>
