export class NodoPagina {
	link!: string;
	hijos!: any[];
	nivel!: number;
	public constructor(linkValor: string = '/', hijosValor: any = [], nivelValor: number = 0) {
		this.link = linkValor;
		this.hijos = hijosValor;
		this.nivel = nivelValor;
	}
}

export interface IdDictionary {
	[index: string]: NodoPagina[];
}

export class MapeadoSitio {
	static generarMapaArbolSitio(): NodoPagina[] {
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
		let menuNodos: NodoPagina[] = [];
		function generarSubnodos(nodo: NodoPagina) {
			// Primero, checamos que si hay un elemento de menuModulo con el mismo link que nuestro nodo, lo eliminamos. De esta manera, no se anidará a sí mismo infinitamente.
			for (let menu in menuModulos) {
				const linkPrueba = menuModulos[menu];
				if (linkPrueba == nodo.link) {
					menuModulos = menuModulos.filter((m) => m != nodo.link);
				}
			}
			// Preparamos el array de hijos
			let hijos: NodoPagina[] = [];
			// Volvemos a checar cada elemento de menuModulos
			for (let menu in menuModulos) {
				// este es el link que vamos a analizar si es hijo
				const linkPrueba = menuModulos[menu];
				//Para analizar si es hijo:
				// Si el link satisface que la primera aparición de nodo.link es al inicio (0)
				// entonces el linkPrueba es la concatenación de nodo.link y linkPrueba.substring(nodo.link.length) (esta última es la cadena después de las coincidencias)
				// Si la primera aparición de "/" en dicha cadena es al final, es un hijo, es decir, la ruta sólo cambió a un nivel inferior.
				if (
					linkPrueba.indexOf(nodo.link) == 0 &&
					linkPrueba.substring(nodo.link.length).indexOf('/') ==
					linkPrueba.length - nodo.link.length - 1
				) {
					const subnodo: NodoPagina = new NodoPagina(linkPrueba, [], nodo.nivel + 1);
					hijos.push(subnodo);
				}
			}
			for (let hijo in hijos) {
				generarSubnodos(hijos[hijo]);
			}
			nodo.hijos = hijos;
		}
		menuNodos[0] = new NodoPagina('', [], 0);
		generarSubnodos(menuNodos[0]);
		console.log(menuModulos);
		return menuNodos;
	};
	static generarMapaLinealSitio(mapaSitio: NodoPagina[]){
	   let mapaLineal={} as IdDictionary;
	   function desacoplarNodo(nodo:NodoPagina){
		mapaLineal[nodo.link]=[];
		for(let hijo in nodo.hijos){
			mapaLineal[nodo.link].push(nodo.hijos[hijo]);
			desacoplarNodo(nodo.hijos[hijo]);
		}
	   }
	   desacoplarNodo(mapaSitio[0]);
	   return mapaLineal;
	}
}
