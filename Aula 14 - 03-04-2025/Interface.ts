interface Animal{
    nome:string
    emitirSom():void;
}

interface Voador{
    voar():void
}

interface Aquatico{
    nadar():void
}

class Cachorro implements Animal{
    nome:string
    constructor(nomeConst:string){
        this.nome = nomeConst;
    }
    emitirSom(): void {
        console.log(`${this.nome} faz: Au Au`)
    }
}

let myDog = new Cachorro("Kadu")
myDog.emitirSom()


class Pato implements Animal,Voador,Aquatico{
    nome:string
    constructor(nomeConst:string){
        this.nome = nomeConst
    }
    emitirSom(): void {
        console.log(`${this.nome} faz: Quack Quack`)
    }
    voar(): void {
        console.log(`${this.nome} está voando`)
    }
    nadar(): void {
        console.log(`${this.nome} está nadando`)
    }   
}
let myDuck = new Pato("Alexandre")
myDuck.emitirSom()
myDuck.voar()
myDuck.nadar()

/* 
*******************************************************************************************************
*/

interface Lista<T> {
    adicionar(item:T):void
    remover(item:T):void
    tamanho():number
}

class ListaNumerica implements Lista<number> {
    private items:number[] = []
    adicionar(item: number): void {
        this.items.push(item)
    }
    remover(item: number): void {
        const index = this.items.indexOf(item)
        if (index !== -1){
            this.items.splice(index, 1)
        }
    }
    tamanho(): number {
        return this.items.length
    }
}
let myList = new ListaNumerica()
myList.adicionar(5)
myList.adicionar(2)
myList.remover(5)
console.log(myList.tamanho())

