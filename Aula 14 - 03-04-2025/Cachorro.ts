import { Animal } from "./Animal";

class Cachorro extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} faz: Au Au!`);
    }
}

let myDog = new Cachorro("Kadu");
myDog.fazerBarulho()