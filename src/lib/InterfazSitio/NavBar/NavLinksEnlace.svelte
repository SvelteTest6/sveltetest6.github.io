<script lang="ts">
    let {nodoPagina}= $props();
</script>

{#snippet link(nodoPagina)}
    <a class="NavLinkEnlace" style="padding-left: {nodoPagina.nivelAnidacion * 1}em;" href={nodoPagina.id}>{nodoPagina.id}</a>
{/snippet}
{@render link(nodoPagina)}

<style lang="scss">
    .NavLinkEnlace{
        font-size: 1.2em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
        display: block;
    }
</style>

