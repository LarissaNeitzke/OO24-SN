import { PersonagemTemporal } from "./PersonagemTemporal";

class FilaTemporal {
    private personagens:PersonagemTemporal[] = []

    enfileirar(personagem: PersonagemTemporal):void{
        this.personagens.push(personagem)
        console.log(`${personagem.getNome()} (${personagem.getUniverso()}) foi adicionado.`)
    }
    desenfileirar(): PersonagemTemporal | undefined {
        if (this.estaVazia()){
            console.log("A fila está vazia.");
            return undefined;
        } 
        console.log(`${this.personagens[0].getNome()} (${this.personagens[0].getUniverso()}) foi removido.`)
        return this.personagens.shift();
    }
    primeiroDaFila(): PersonagemTemporal | undefined {
        if (this.estaVazia()){
            console.log("A fila está vazia.");
            return undefined;
        }
        return this.personagens[0];
    }
    estaVazia(): boolean {
        return this.personagens.length === 0;
    }
    tamanho(): number{
        return this.personagens.length;
    }
    exibirFila():void {
        console.table(this.personagens)
    }
}

const homemAranha = new PersonagemTemporal("Homem Aranha", "Terra-928", 1)
const homemAranha2 = new PersonagemTemporal("Homem Aranha", "Terra-616", 5)
const capitaoAmerica = new PersonagemTemporal("Capitão América", "Terra-616", 2)
const capitaoAmerica2 = new PersonagemTemporal("Capitão América", "Terra-982", 4)
const panteraNegra = new PersonagemTemporal("Pantera Negra", "Terra-982", 3)
const panteraNegra2 = new PersonagemTemporal("Pantera Negra", "Terra-1610", 6)
const surfistaPrateado = new PersonagemTemporal("Surfista Prateado", "Terra-1610", 4)
const surfistaPrateado2 = new PersonagemTemporal("Surfista Prateado", "Terra-928", 7)


const filaTemporal:FilaTemporal = new FilaTemporal();
filaTemporal.enfileirar(homemAranha)
filaTemporal.enfileirar(homemAranha2)
filaTemporal.enfileirar(capitaoAmerica)
filaTemporal.enfileirar(capitaoAmerica2)
filaTemporal.enfileirar(panteraNegra)
filaTemporal.enfileirar(panteraNegra2)
filaTemporal.enfileirar(surfistaPrateado)
filaTemporal.enfileirar(surfistaPrateado2)
filaTemporal.desenfileirar()
filaTemporal.desenfileirar()
filaTemporal.exibirFila()
