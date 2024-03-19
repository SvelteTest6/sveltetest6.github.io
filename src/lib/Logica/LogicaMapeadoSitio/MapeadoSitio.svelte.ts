import {Nodo} from "$lib/Logica/LogicaNodosDatos/NodosDatos.svelte"
import { writable, get } from "svelte/store";

function generarMapaArbolSitio(): Nodo {
	const modulos = import.meta.glob('/src/**/*+page.svelte');
	let menuModulos: string[] = [];
	function obtenerRutas() {
		for (let rutaModulo in modulos) {
			let ruta = rutaModulo.replace('+page.svelte', '').replace("./","").replace("/src/routes/","/");
			if(ruta.indexOf("/src/lib")<0){
				menuModulos.push(ruta);
			}
		}
	}
	obtenerRutas();
	function generarSubnodos(nodo: Nodo) {
		// Primero, checamos que si hay un elemento de menuModulo con el mismo link que nuestro nodo, lo eliminamos. De esta manera, no se anidará a sí mismo infinitamente.
		for (let i in menuModulos) {
			const linkPrueba = menuModulos[i];
			if (linkPrueba == nodo.id) {
				menuModulos = menuModulos.filter((m) => m != nodo.id);
			}
		}
		// Preparamos el array de hijos
		let hijos: Nodo[] = [];
		// Volvemos a checar cada elemento de menuModulos
		for (let i in menuModulos) {
			// este es el link que vamos a analizar si es hijo
			const linkPrueba = menuModulos[i];
			//Para analizar si es hijo:
			// Si el link satisface que la primera aparición de nodo.link es al inicio (0)
			// entonces el linkPrueba es la concatenación de nodo.link y linkPrueba.substring(nodo.link.length) (esta última es la cadena después de las coincidencias)
			// Si la primera aparición de "/" en dicha cadena es al final, es un hijo, es decir, la ruta sólo cambió a un nivel inferior.
			if (
				linkPrueba.indexOf(nodo.id) == 0 &&
				linkPrueba.substring(nodo.id.length).indexOf('/') ==
				linkPrueba.length - nodo.id.length - 1
			) {
				const subnodo: Nodo = new Nodo(linkPrueba, []);
				hijos.push(subnodo);
			}
		}
		for (let i in hijos) {
			generarSubnodos(hijos[i]);
		}
		nodo.nodosInferiores = hijos;
	}
	let nodoMapaArbol = new Nodo('', []);
	generarSubnodos(nodoMapaArbol);
	nodoMapaArbol.actualizarNivelAnidacion(0);
	return nodoMapaArbol.generarArbol();
};

function generarMapaArregloSitio(mapaSitio: Nodo): Nodo[]{
   let mapaLineal:Nodo[]=[];
   mapaLineal.push(mapaSitio);
   function desacoplarNodo(nodo:Nodo){
	for(let i in nodo.nodosInferiores){
		mapaLineal.push(nodo.nodosInferiores[i]);
		desacoplarNodo(nodo.nodosInferiores[i]);
	}
   }
   desacoplarNodo(mapaSitio);
   return mapaLineal;
}

export  const mapaArbolSitio= $state(generarMapaArbolSitio())

export  const mapaArregloSitio= $state(generarMapaArregloSitio(mapaArbolSitio))
