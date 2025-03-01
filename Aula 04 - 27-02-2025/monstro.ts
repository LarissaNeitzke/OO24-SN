/*
4. Crie uma classe monstro com atributos como vida, poderDeExplosao e distanciaDeExplosao.
*/

export class Monstro {
    //Atributos
    private vida: number;
    private poderDeExplosao: number;
    private distanciaDeExplosao: number;

    //Constructor
    constructor(vida: number, poderDeExplosao: number, distanciaDeExplosao: number) {
        this.vida = vida;
        this.poderDeExplosao = poderDeExplosao;
        this.distanciaDeExplosao = distanciaDeExplosao;
    }

    //Getter e Setter para nome
    public setVida(vidaRecebida: number): void {
        this.vida = vidaRecebida;
    }

    public setPoderDeExplosao(poderDeExplosaoRecebido: number): void {
        this.poderDeExplosao = poderDeExplosaoRecebido;
    }

    public setDistanciaDeExplosao(distanciaDeExplosaoRecebida: number): void {
        this.distanciaDeExplosao = distanciaDeExplosaoRecebida;
    }

    public getVida(): number {
        return this.vida;
    }

    public getPoderDeExplosao(): number {
        return this.poderDeExplosao;
    }

    public getDistanciaDeExplosao(): number {
        return this.distanciaDeExplosao;
    }

    public infoMonstro(): void {
        console.log(`O monstro possui ${this.vida} de vida, ${this.poderDeExplosao} de poder de explosão e ${this.distanciaDeExplosao} de distância de explosão.`);
    }
}

const monstro1 = new Monstro(8, 7, 5);
monstro1.infoMonstro()
