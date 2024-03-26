<script lang="ts">
	import { propiedadesElementosHTML, cambiarExpansion, obtenerExpansion, generarIdHTML } from '../../../Logica/LogicaPropiedadeseElementosHTML/PropiedadesElementosHTML'
    let {nodoPagina}= $props();
    function click(e: MouseEvent, idHTML:string){
        let elementoHTML=document.getElementById(idHTML)
        elementoHTML?.classList.remove("Inicializada")
        if(obtenerExpansion(idHTML)){
            elementoHTML?.classList.remove("Expandida")
            elementoHTML?.classList.add("NoExpandida")
        }else{
            elementoHTML?.classList.remove("NoExpandida")
            elementoHTML?.classList.add("Expandida")
        }
        cambiarExpansion(idHTML)
    }
</script>

{#snippet tocarParaExpandir(nodoPagina)}
    <div class="NavPanelExpandir Contenedor" onclick={e=>click(e,generarIdHTML("NavPanel","NavPanelLista",nodoPagina.id))}> <div class="NavPanelExpandir Flecha"/></div> 
{/snippet}
{@render tocarParaExpandir(nodoPagina)}

<style lang="scss">

@keyframes animarExpandirRotar {
	0% {
		transform: rotate(45deg);
	}

	30% {
		transform: rotate(165deg);
	}

    100% {
		transform: rotate(225deg);
	}
}

    :global(.NavPanelExpandir.Contenedor){
        min-width:1rem;
        height:1rem;
        padding: 1rem;
    }
    :global(.NavPanelExpandir.Flecha){
        width: 0.5rem;
    height: 0.5rem;
    left: 0.15rem;
    border: 0.2rem solid #353535;
    border-radius: 0.1rem;
    border-left: 0;
    border-top: 0;
    position: relative;
    transform: rotate(45deg);
    transition: all 0.1s ease-out;
}

    :global(.NavPanelExpandir.Flecha.Expandida){
        width: 0.5rem;
        height: 0.5rem;
    left: 1rem;
    top: 1.5rem;
    border: 0.2rem solid #353535;
    border-radius: 0.1rem;
    border-right: 0;
    border-bottom: 0;
    position: relative;
    transform: rotate(45deg);
    transition: all 0.1s ease-out;
    }
</style>