/*
2. Crie uma classe personagem com atributos como vida, forca e inventario.
*/

export class Personagem {
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

    public getVida(): number {
        return this.vida;
    }

    public getForca(): number {
        return this.forca;
    }

    public getInventario(): string[] {
        return this.inventario;
    }

    public infoPersonagem(): void {
        console.log(`A vida do personagem é de ${this.vida} e a força é de ${this.forca}. A lista de itens que o personagem possui é: ${this.inventario}.`);
    }
}

const personagem1 = new Personagem(8, 10, ["Machado", "Poção", "Espada"]);
personagem1.infoPersonagem()

