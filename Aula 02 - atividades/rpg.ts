export class Personagem{
    nome: string
    classe: string
    vida: number
    arma: string
    forca: number

    constructor(nome: string, classe: string, vida: number, arma: string, forca: number){
        this.nome = nome
        this.classe = classe
        this.vida = vida
        this.arma = arma
        this.forca = forca
    }

    //MÉTODOS
    ataque(): void{
        console.log(`${this.nome} lançou um ataque com ${this.arma}!`)
    }

    informacao(): void{
        console.log(`Nome do Personagem: ${this.nome}`)
        console.log(`Classe: ${this.classe}`)
        console.log(`Vida: ${this.vida}`)
        console.log(`Arma: ${this.arma}`)
        console.log(`Forca: ${this.forca}`)
    }
}


const guerreiro1 = new Personagem ("Larissa", "Guerreiro", 100, "Espada", 100)
guerreiro1.ataque()
guerreiro1.informacao()

const monstro1 = new Personagem ("Lilith", "Monstro", 80, "Magia", 90)
monstro1.ataque()
monstro1.informacao()

