export abstract class Animal {
    nome:string
    constructor(nome:string) {
        this.nome = nome;        
    }
    abstract fazerBarulho():void;
}
