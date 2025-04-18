import { CriaturaMagica } from "./CriaturaMagica";
import "./Bruxo";
import { membrosCorvinal, membrosGrifinoria, membrosLufaLufa, membrosSonserina } from "./Bruxo";

export class Casa {
    private nome:string
    private membros:CriaturaMagica[] = []

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    getNome():string {
        return this.nome
    }
    getMembros():CriaturaMagica[] {
        return this.membros
    }

    setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido
    }
    setMembros(membrosRecebidos:CriaturaMagica[]):void {
        this.membros = membrosRecebidos
    }

    adicionarMembro(membroRecebido:CriaturaMagica):void {
        this.membros.push(membroRecebido)
    }
    removerMembro(membroRecebido:CriaturaMagica):void {
        for (let i=0; i < this.membros.length; i++) {
            if (this.membros[i] == membroRecebido) {
                this.membros.splice(i, 1)
            }
        }
    }
}

export const grifinoria = new Casa("Grifinória")
grifinoria.setMembros(membrosGrifinoria)

export const sonserina = new Casa("Sonserina")
sonserina.setMembros(membrosSonserina)

export const corvinal = new Casa("Corvinal")
corvinal.setMembros(membrosCorvinal)

export const lufaLufa = new Casa("Lufa-Lufa")
lufaLufa.setMembros(membrosLufaLufa)
