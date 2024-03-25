<script lang="ts">
	import { propiedadesElementosHTML, cambiarExpansion, obtenerExpansion, generarIdHTML } from '../../../Logica/LogicaPropiedadeseElementosHTML/PropiedadesElementosHTML'
    let {nodoPagina}= $props();
    function click(e: MouseEvent, idHTML:string){
        e.stopPropagation()
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
    <a href="javascript:void(0)" class="NavPanelExpandir Contenedor" onclick={e=>click(e,generarIdHTML("NavPanel","NavPanelLista",nodoPagina.id))}> <div class="NavPanelExpandir Flecha"/></a> 
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
        width: 3rem;
        height:3rem;
    }
    :global(.NavPanelExpandir.Flecha){
        width: 1rem;
    height: 1rem;
    left: 0.75rem;
    top: 0.75rem;
    border: 0.1rem solid #32557f;
    border-left: 0;
    border-top: 0;
    animation: animarExpandirRotar 0.2s both reverse;
    position: relative;
}

    :global(.NavLinkExpandir.FlechaExpandida){
        width: 1rem;
    height: 1rem;
    left: 0.5rem;
    right: 0.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    border: 0.1rem solid #32557f;
    border-left: 0;
    border-top: 0;
    animation: animarExpandirRotar 0.16s both reverse;
    position: relative;
    }
</style>