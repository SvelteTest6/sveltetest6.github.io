import { writable, get } from 'svelte/store'
import {Dato, Nodo, crearArregloNodosConDatosDinamicos} from '$lib/Logica/LogicaNodosDatos/NodosDatos.svelte'
import { mapaArbolSitio } from '$lib/Logica/LogicaMapeadoSitio/MapeadoSitio.svelte';


export const propiedadesElementosHTML= crearArregloNodosConDatosDinamicos([]).obtenerArregloDinamico


export function agregarElementoHTML(idHTML:string){
    if(propiedadesElementosHTML.findIndex(elemento=>elemento.id==idHTML)<0){
        propiedadesElementosHTML.push(new Nodo(idHTML))
    }
}
export function generarIdHTML(ubicacion: string,tipo: string, id:string):string{
    return ubicacion.concat("_").concat(tipo).concat("_").concat(id)
}

export function cambiarPropiedadPorIdElementoHTML(idHTML: string, propiedad: string, valor:any) {
    let indice = propiedadesElementosHTML.findIndex((elemento) => elemento.id == idHTML);
    propiedadesElementosHTML[indice]?.agregarDato(propiedad,valor)
}

export function obtenerPropiedadPorIdElementoHTML(idHTML: string, propiedad: string) {
    let indice = propiedadesElementosHTML.findIndex((elemento) => elemento.id== idHTML);
    return propiedadesElementosHTML[indice].obtenerDato(propiedad)
}

export function obtenerExpansion(idHTML: string) {
    let indice = propiedadesElementosHTML.findIndex((elemento) => elemento.id == idHTML);
    return propiedadesElementosHTML[indice].obtenerDato('expandido')
}

export function cambiarExpansion(idHTML:string){
    cambiarPropiedadPorIdElementoHTML(idHTML, "expandido", !obtenerPropiedadPorIdElementoHTML(idHTML, "expandido"))
}
