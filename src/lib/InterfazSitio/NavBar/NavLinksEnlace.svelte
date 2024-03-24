<script lang="ts">
    import NavLinksExpandir from './NavLinksExpandir.svelte'
	import { arregloSitioEstadosNavLinks, cambiarExpansion, obtenerExpansion } from './NavLinks.svelte'
    let {nodoPagina}= $props();
    function clic(e: MouseEvent, id:string){
        if(obtenerExpansion(id)){
            cambiarExpansion(id)
        }
    }
</script>

{#snippet link(nodoPagina)}
    <a class="NavLinkEnlace" style="padding-left: {nodoPagina.nivelAnidacion * 1}em;" href={nodoPagina.id} onclick={(e)=>clic(e,nodoPagina.id)}>{nodoPagina.id}</a>
    {#if nodoPagina.nodosInferiores.length>0}
    <NavLinksExpandir nodoPagina={nodoPagina}/>
    {/if}
{/snippet}
{@render link(nodoPagina)}

<style lang="scss">
    .NavLinkEnlace{
        font-size: 1.2em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        width: -webkit-fill-available;
    }
</style>

