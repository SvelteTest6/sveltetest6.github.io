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

export const arregloSitioEstadosNavLinks=arregloDatosNavLinks.obtener;

export function generarIdNavLinks(id:string):string{
    return "Nav-".concat(id)
}

export function cambiarExpansion(id: string) {
    let indice = arregloSitioEstadosNavLinks.findIndex((elemento) => elemento.id == id);
    arregloSitioEstadosNavLinks[indice]?.agregarDato(
        'listaExpandida',
        !arregloSitioEstadosNavLinks[indice].obtenerDato('listaExpandida')
    );
    let expansion = arregloSitioEstadosNavLinks[indice].obtenerDato('listaExpandida');
    if (expansion) {
        document.getElementById(generarIdNavLinks(id))?.classList.add('listaExpandida');
        document.getElementById(generarIdNavLinks(id))?.classList.remove('listaNoExpandida');
        document.getElementById(generarIdNavLinks(id))?.classList.remove('listaInicializada');
    } else {
        document.getElementById(generarIdNavLinks(id))?.classList.add('listaNoExpandida');
        document.getElementById(generarIdNavLinks(id))?.classList.remove('listaExpandida');
    }
}

export function obtenerExpansion(id: string) {
    let indice = arregloSitioEstadosNavLinks.findIndex((elemento) => elemento.id == id);
    return arregloSitioEstadosNavLinks[indice].obtenerDato('listaExpandida')
}
