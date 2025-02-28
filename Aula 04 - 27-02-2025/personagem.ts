/*
2. Crie uma classe personagem com atributos como vida, forca e inventario.
*/

export class personagem {
    //Atributos
    private vida: number;
    private forca: number;
    private inventario: string[];

    //Constructor
    constructor(vida: number, forca: number, inventario: string[]) {
        this.vida = vida;
        this.forca = forca;
        this.inventario = inventario;
    }

    //Getter e Setter para nome
    public setVida(vidaRecebida: number): void {
        this.vida = vidaRecebida;
    }

    public setForca(forcaRecebida: number): void {
        this.forca = forcaRecebida;
    }

    public setInventario(inventarioRecebido: string[]): void {
        this.inventario = inventarioRecebido
    }
*********************************************************************************
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

