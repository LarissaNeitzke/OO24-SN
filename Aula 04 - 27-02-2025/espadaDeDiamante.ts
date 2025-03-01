/*
3. Crie uma classe espadaDeDiamante com atributos como dano e durabilidade.
*/

export class EspadaDeDiamante {
    //Atributos
    private dano: number;
    private durabilidade: number;

    //Constructor
    constructor(dano: number, durabilidade: number) {
        this.dano = dano;
        this.durabilidade = durabilidade;
    }

    //Getter e Setter para nome
    public setDano(danoRecebido: number): void {
        this.dano = danoRecebido;
    }

    public setDurabilidade(durabilidadeRecebida: number): void {
        this.durabilidade = durabilidadeRecebida;
    }

    public getDano(): number {
        return this.dano;
    }

    public getDurabilidade(): number {
        return this.durabilidade;
    }

    public infoEspadaDeDiamante(): void {
        console.log(`A Espada de Diamante possui ${this.dano} de dano e ${this.durabilidade} de durabilidade.`);
    }
}

const espadaDeDiamante1 = new EspadaDeDiamante(10, 12);
espadaDeDiamante1.infoEspadaDeDiamante()
