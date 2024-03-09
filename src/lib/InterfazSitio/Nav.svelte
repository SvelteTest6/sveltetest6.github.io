<script lang="ts">
        import { NodoPagina, MapeadoSitio, type IdDictionary} from "$lib/Logica/LogicaMapeadoSitio/MapeadoSitio";
        let mapeado=new MapeadoSitio();
        let mapaArbol: NodoPagina[]=MapeadoSitio.generarMapaArbolSitio();
        let mapaArreglo= MapeadoSitio.generarMapaLinealSitio(mapaArbol) as IdDictionary;
        console.log(mapaArreglo);
        let raiz = "";
        function imprimirArbol(ruta: string){
                console.log(ruta);
                const nodos=mapaArreglo[ruta];
                for(let hijo in nodos){
                        imprimirArbol(nodos[hijo].link);
                }
        }
        imprimirArbol(raiz);
</script>
<div>
        {#snippet linkNav(link, contenido, hijos)}
                <ul>
                        <li><a href="{link}">{contenido}</a></li>
                {#each hijos as hijo}
                {@render linkNav(hijo.link,hijo.link, mapaArreglo[hijo.link])}
                {/each}
        </ul>
        {/snippet}
        {#each mapaArreglo[""] as mapa}
                {@render linkNav(mapa.link,mapa.link, mapa.hijos)}
        {/each}
</div>