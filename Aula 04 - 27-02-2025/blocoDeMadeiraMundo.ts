export class BlocoDeMadeiraMundo {
    //Atributos
    private tipo: string;
    private durabilidade: number;

    //Constructor
    constructor(tipo: string) {
        this.tipo = tipo;
    }

    //Getter e Setter para nome
    public setTipo(tipoRecebido: string): void {
        this.tipo = tipoRecebido;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public infoBlocoDeMadeiraMundo(): void {
        console.log(`O tipo do Bloco de Madeira é ${this.tipo}.`);
    }
}