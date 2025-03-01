/*
5. Crie uma classe mundo com um atributo que seja um array de objetos do tipo blocoDeMadeira.
*/

import { BlocoDeMadeiraMundo } from "./blocoDeMadeiraMundo";

export class Mundo {
    private tipo: BlocoDeMadeiraMundo[]; 

    //Constructor //Se coloquei o tipo na classe, vou seguir o "tipo" no constructor
    constructor(tipo: BlocoDeMadeiraMundo[]) {
        this.tipo = tipo; 
    }

    public setTipo(tipoRecebido: BlocoDeMadeiraMundo[]): void {
        this.tipo = tipoRecebido;
    }

    public getTipo(): BlocoDeMadeiraMundo[] {
        return this.tipo;
    }

    public infoTipo(): void {
        console.log(`A lista de Bloco de Madeiras é:`);
        /*for (let i=0; i < this.tipo.length; i++) {
            console.log(this.tipo[i])
        }*/

        for(let bloco of this.tipo){
            console.log(bloco);
        }
        
    }
}

const blocoDeMadeiraMundo1 = new BlocoDeMadeiraMundo("Carvalho");
blocoDeMadeiraMundo1.infoBlocoDeMadeiraMundo()

const blocoDeMadeiraMundo2 = new BlocoDeMadeiraMundo("Pinheiro");
blocoDeMadeiraMundo2.infoBlocoDeMadeiraMundo()

let lista = [blocoDeMadeiraMundo1,blocoDeMadeiraMundo2]
let mundo = new Mundo(lista)
mundo.infoTipo()

