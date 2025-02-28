/*
1. Crie uma classe blocoDeMadeira com atributos como tipo(carvalho, madeira, etc) e durabilidade.
*/

export class blocoDeMadeira {
    //Atributos
    private tipo: string;
    private durabilidade: number;

    //Constructor
    constructor(tipo: string, durabilidade: number) {
        this.tipo = tipo;
        this.durabilidade = durabilidade;
    }

    //Getter e Setter para nome
    public setTipo(tipoRecebido: string): void {
        this.tipo = tipoRecebido;
    }

    public setDurabilidade(durabilidadeRecebida: number): void {
        this.durabilidade = durabilidadeRecebida;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getDurabilidade(): number {
        return this.durabilidade;
    }

    public infoBlocoDeMadeira(): void {
        console.log(`O tipo do Bloco de Madeira é ${this.tipo} com durabilidade de ${this.durabilidade}.`);
    }
}

const blocoDeMadeira1 = new blocoDeMadeira("Carvalho", 3);
blocoDeMadeira1.infoBlocoDeMadeira()

