/*Desenvolva a classe CHAPEUSELETOR com atributo PRIVADO "CASA".
  Crie um método "selecionarCasa" que, aleatoriamente (Math.floor(Math.random() * 4+1)), atribui uma das quatro casas de Hogwarts.
  Crie um método "exibirCasa" para mostrar a casa.*/

export class ChapeuSeletor {
    //Atributo privado
    private casa: string;

    //Constructor
    constructor() {
        this.casa = ""; //Inicializa a casa como uma string vazia
    }

    //Para selecionar a casa aleatoriamente
    public selecionarCasa(): void {
        const casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
        const casaEscolhida = Math.floor(Math.random() * 4); //Gera um número aleatório entre 0 e 3
        this.casa = casas[casaEscolhida]; //Atribui a casa aleatória
    }

    //Para exibir a casa selecionada
    public exibirCasa(): void {
        if (this.casa) {
            console.log(`A casa selecionada foi: ${this.casa}`);
        } else {
            console.log("Nenhuma casa foi selecionada ainda.");
        }
    }
}

const chapeu = new ChapeuSeletor();
chapeu.selecionarCasa(); //Seleciona uma casa aleatória
chapeu.exibirCasa(); //Exibe a casa selecionada
