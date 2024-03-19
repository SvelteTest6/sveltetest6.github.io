export class Nodo {
    id!: string;
    idNodoSuperior: string | undefined;
	nodosInferiores!: Nodo[];
    tipo: string;
    nombre: string;
	nivelAnidacion: number;
    datos: Dato[];

	public constructor(id: string, nodosInferiores: Nodo[] = []) {
		this.id = id;
		this.nodosInferiores = nodosInferiores;
        this.tipo=""
        this.nombre="";
        this.nivelAnidacion=0;
        this.datos=[]
	}

    public esSubnodoAnidado(nodoAnalizado: Nodo): boolean{
        if(this.id==nodoAnalizado.id){
            return true;
        }
        if(this.nodosInferiores==undefined || this.nodosInferiores.length==0){
            return false;
        }else{
            for(let i in this.nodosInferiores){
                if(nodoAnalizado.id==this.nodosInferiores[i].id){
                    return true;
                }
                if(this.nodosInferiores[i].esSubnodoAnidado(nodoAnalizado)){
                    return true;
                }
            }
            return false;
        }
        
    }

    public agregarSubnodos(nodoAnalizado: Nodo): void{
        if(this.nodosInferiores==undefined){
            this.nodosInferiores=[];
        }else{
            if(this.esSubnodoAnidado(nodoAnalizado)){
                console.log("No se añadió el nodo solicitado.")
            }else{
                nodoAnalizado.idNodoSuperior=this.id;
                this.nodosInferiores.push(nodoAnalizado);
            }
        }
    }

    public actualizarNivelAnidacion(nivel: number) :void{
        if(this.nivelAnidacion==undefined || this.nivelAnidacion!=nivel){
            this.nivelAnidacion=nivel
        }
        for(let i in this.nodosInferiores){
            this.nodosInferiores[i].actualizarNivelAnidacion(this.nivelAnidacion+1)
        }
    }

    public clonar(){
        let clon=new Nodo(this.id, this.nodosInferiores)
        clon.idNodoSuperior= this.idNodoSuperior;
        clon.tipo=this.tipo;
        clon.nombre=this.nombre;
        clon.nivelAnidacion=this.nivelAnidacion;
        return clon
    }

    public generarArbol(): Nodo{
        let arbol=this.clonar()
        arbol.actualizarNivelAnidacion(0);
        return arbol;
    }

    public generarLineal(): Nodo[]{
        let lineal=[]
        lineal.push(this)
        function desacoplarNodo(nodo:Nodo){
            for(let i in nodo.nodosInferiores){
                lineal.push(nodo.nodosInferiores[i]);
                desacoplarNodo(nodo.nodosInferiores[i]);
            }
        }
        desacoplarNodo(this);
        return lineal;
    }

    public actualizarDatos(datos: Dato[]):void{
        this.datos=datos;
    }

    public agregarDato(propiedad:string, valor: any):void{
        let indicePropiedad=this.datos.findIndex(elemento=>elemento.propiedad==propiedad)
        let dato=new Dato(propiedad,valor)
        let datoR=$state(dato)
        if(indicePropiedad>=0){
            this.datos[indicePropiedad]=datoR
        }else{
            this.datos.push(datoR)
        }
    }

    public obtenerDato(propiedad:string):any{
        return this.datos.find(elemento=>elemento.propiedad=propiedad)?.valor
    }
}

export class Dato {
    propiedad: string;
    valor: any;
    public constructor (propiedad: string,valor:any=undefined){
        this.propiedad=propiedad;
        this.valor=valor;
    }

    public actualizarValor(valor:any){
        this.valor=valor;
    }

    public indefinirValor(){
        this.valor=undefined;
    }

    public clonar(): Dato{
        let clon= new Dato(this.propiedad, this.valor)
        return clon
    }
}