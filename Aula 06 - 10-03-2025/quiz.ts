class Tributo {
    constructor(public nome: string, public vida: number) {}

    public sofrerDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} sofreu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

class Organizador {
    constructor(public tributos: Tributo[]) {}

    public punirTributo(tributo: Tributo, dano: number): void {
        tributo.sofrerDano(dano);
    }
}

const katniss = new Tributo("Katniss", 100);
const peeta = new Tributo("Peeta", 90);
const organizador = new Organizador([katniss, peeta]);

organizador.punirTributo(katniss, 20);

console.log(organizador.tributos);



