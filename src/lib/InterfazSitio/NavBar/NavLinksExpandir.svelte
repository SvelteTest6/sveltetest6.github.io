<script lang="ts">
	import { arregloSitioEstadosNavLinks, cambiarExpansion } from './NavLinks.svelte'
    let {nodoPagina}= $props();
    function clic(e: MouseEvent, id:string){
        cambiarExpansion(id)
        e.stopPropagation()
    }
</script>

{#snippet tocarParaExpandir(nodoPagina)}
    <div class="NavLinkExpandir" style="padding-left: {nodoPagina.nivelAnidacion * 1}em;" onclick={(e)=>clic(e,nodoPagina.id)}>v</div>
{/snippet}
{@render tocarParaExpandir(nodoPagina)}

<style lang="scss">
    .NavLinkExpandir{
        font-size: 1.2em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
        display: block;
        background-color: yellow;
        width: fit-content;
    }
</style>