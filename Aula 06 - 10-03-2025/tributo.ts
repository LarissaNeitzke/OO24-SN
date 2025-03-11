/*
1. CRIE UM METODO PRIVADO CHAMADO calcularDano() NA CLASSE QUE CALCULA O DANO COM BASE EM FATORES COMO resistencia E armadura
*/

import { Distrito} from "./distrito";

export class Tributo {
    private nome: string;
    private saude: number;
    private distrito: Distrito;
    private segredo: string;
    private habilidades: string[];
    private resistencia: number;
    private armadura: number;

constructor(nome: string, saude: number, distrito: Distrito, segredo: string, habilidades: string[], resistencia: number, armadura: number) {
    this.nome = nome;
    this.saude = saude;
    this.distrito = distrito;
    this.segredo = segredo;
    this.habilidades = habilidades;
    this.resistencia = resistencia;
    this.armadura = armadura;
}

public setNome(nomeRecebido: string): void {
    this.nome = nomeRecebido;
}

public setSaude(saudeRecebida: number): void {
    this.saude = saudeRecebida;
}

public setDistrito(distritoRecebido: Distrito): void {
    this.distrito = distritoRecebido;
}

public setSegredo(segredoRecebido: string): void {
    this.segredo = segredoRecebido;
}

public setHabilidades(habilidadesRecebidas: string[]): void {
    this.habilidades = habilidadesRecebidas;
}

public setResistencia(resistenciaRecebida: number): void {
    this.resistencia = resistenciaRecebida;
}

public setArmadura(armaduraRecebida: number): void {
    this.armadura = armaduraRecebida;
}

public getNome(): string {
    return this.nome;
}

public getSaude(): number {
    return this.saude;
}

public getDistrito(): Distrito {
    return this.distrito;
}

public getSegredo(): string {
    return this.segredo;
}

public getHabilidades(): string[] {
    return this.habilidades;
}

public getResistencia(): number {
    return this.resistencia;
}

public getArmadura(): number {
    return this.armadura;
}

private calcularDano(danoRecebido: number): number {
    
}



}