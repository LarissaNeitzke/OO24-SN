export class cat{
    //ATRIBUTOS
    name: string;
    weight: number;

    //CONSTRUCTOR
    /*TODA CLASSE TEM UM CONSTRUTOR. MESMO SE NÃO INFORMAR, ELE CRIA.*/
    constructor(nameCat: string, weightCat: number){
        this.name = nameCat
        this.weight = weightCat
    }

    //MÉTODOS
    meow(): void{
        console.log("Meow Meow")
    }
    eat(quantity: number): void{
    console.log("The cat has eaten " + quantity)
    }
    
}

const cat1 = new cat ("Fofo", 4)
cat1.meow()
cat1.eat(200)

const cat2 = new cat ("Lili", 5)
cat2.meow()
cat2.eat(150)

