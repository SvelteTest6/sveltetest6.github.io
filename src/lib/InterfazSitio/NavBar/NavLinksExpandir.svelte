    }

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
