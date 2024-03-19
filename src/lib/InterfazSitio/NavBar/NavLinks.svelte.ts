import { writable, get } from 'svelte/store'
import {Dato} from '$lib/Logica/LogicaNodosDatos/NodosDatos.svelte'
import { mapaArbolSitio } from '$lib/Logica/LogicaMapeadoSitio/MapeadoSitio.svelte';

function crearMapaArregloDatos(){
    let mapaDatos=$state(mapaArbolSitio.clonar().generarLineal())
    console.log(mapaDatos)

    function agregarDato(id: string, dato: Dato){
        let indice= mapaDatos.findIndex(elemento=>elemento.id==id)
        mapaDatos[indice].agregarDato(dato.propiedad, dato.valor)
    }
    return{
        get obtener(){return mapaDatos},
        agregarDato,
    }
}

let arregloDatosNavLinks= crearMapaArregloDatos()

export const arregloSitioEstadosNavLinks=arregloDatosNavLinks;
