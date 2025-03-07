import { Distrito } from "./distrito";

export class Organizador {
    private nome: string;
    private distritos: Distrito[]

    constructor(nome: string, distritos: Distrito[]) {
        this.nome = nome;
        this.distritos = distritos;        
}

public setNome(nomeRecebido: string): void {
    this.nome = nomeRecebido;
}

public setDistritos(distritosRecebidos: Distrito[]): void {
    this.distritos = distritosRecebidos;
}

public getNome(): string {
    return this.nome;
}

public getDistritos(): Distrito[] {
    return this.distritos;
}

public liberarAnimais(): void {
    const distritoAleatorio = Math.floor(Math.random() * this.distritos.length);
    console.log(`O Organizador ${this.nome} soltou animais no Distrito ${this.distritos[distritoAleatorio]}! Corra!`)
}

public criarDesastre(): void {
    let listaDesastre = ['Chuva Ácida', 'Terremoto', 'Fumaça Tóxica', 'Lanças de Fogo']
    const desastreAleatorio = Math.floor(Math.random() * listaDesastre.length);
    const distritoAleatorio = Math.floor(Math.random() * this.distritos.length);
    console.log(`O Organizador ${this.nome} liberou o Desastre ${listaDesastre[desastreAleatorio]} no Distrito ${this.distritos[distritoAleatorio]}!`)
}

}