import { Animal } from "./Animal";

class Gato extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} faz: Miau Miau!`);
    }
}

let myCat = new Gato("KaKa");
myCat.fazerBarulho()