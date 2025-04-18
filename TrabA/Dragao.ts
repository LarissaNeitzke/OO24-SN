import { CriaturaMagica } from "./CriaturaMagica";

export class Dragao extends CriaturaMagica {

    private dano:number

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string, danoRecebido:number) {
        super(nomeRecebido, tipoRecebido, poderRecebido)
        this.dano = danoRecebido
    }

    getDano():number {
        return this.dano
    }

    usarMagia():number {
        console.log(`${this.nome} começou a ${this.poder.toLowerCase()}.`)
        return this.dano
    }
}

// Instâncias
const dragao1 = new Dragao("Rabo-Córneo", "Voador", "Soprar um fogo devastador", Math.floor(Math.random() * 200)+1);
const dragao2 = new Dragao("Verde-Galês", "Voador", "Confundir-se com a vegetação", Math.floor(Math.random() * 200)+1);
const dragao3 = new Dragao("Meteoro-Chinês", "Voador", "Soprar labaredas como um meteoro", Math.floor(Math.random() * 200)+1);