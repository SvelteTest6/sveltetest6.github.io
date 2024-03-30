<script lang="ts" >
    let {clase, id, display, style, children}=$props()
</script>

{#snippet mat(clase, id, display, style)}
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
{/snippet}
{@render mat(clase, id, display, style)}

<style lang="scss">
    :global(.Math){
        max-width:0;
        max-height:0;
    }
    :global(.Math.Inline){
        display:inline;
    }
    :global(.Math.Display){
        display:block;
    }
    @keyframes #{aparecer} {
    0% {
        background-color:black;
		opacity: 0;
        max-width:0;
        max-height:0;
	}
	100% {
        background-color:yellow;
		opacity: 1;
        max-width:100vw;
        max-height:2000px;
	}
}
    @for $i from 1 through 25{
  :global(div:nth-child(#{$i}).Math){
    //animation: aparecer calc(0.5s*$i) 1 both ease-in-out running;
  } 
}
</style>