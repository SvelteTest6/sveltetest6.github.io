<script lang="ts" >
    let {clase, id, display, style, children}=$props()
</script>

{#if display!=true}
    {#if id!=undefined}
    <div id={id} class={clase==undefined?"Math Inline":"Math Inline ".concat(clase)} {style}>\( {@render children()} \)</div>
    {:else}
    <div class={clase==undefined?"Math Inline ":"Math Inline ".concat(clase)} {style}>\( {@render children()} \)</div>
    {/if}
{:else}
    {#if id!=undefined}
    <div {id} class={clase==undefined?"Math Display":"Math Display ".concat(clase)} {style}>\[ {@render children()} \]</div>
    {:else}
    <div class={clase==undefined?"Math Display":"Math Display ".concat(clase)} {style}>\[ {@render children()} \]</div>
    {/if}
{/if}

<style lang="scss">
    :global(.Math){
        max-width:0;
        max-height:0;
        opacity: 0;
    }
    :global(.Math.Inline){
        display:inline;
    }
    :global(.Math.Display){
        display: contents;
    }
    @keyframes #{aparecer} {
    0% {
        background-color:black;
		opacity: 0;
	}
	100% {
        background-color:yellow;
		opacity: 1;
	}
}
  :global(div:has(.Math)){
    animation: aparecer 0.2s both ease-in-out running;
    animation-delay: 0.2s;
  }
  :global(.Math){
    animation: aparecer 0.2s both ease-in-out running;
    animation-delay: 0.2s;
  } 
</style>