//Ingrediente
export class Ingrediente {
    //Atributos privados
    private nome: string;
    private quantidade: number;

    //Constructor
    constructor(nome: string, quantidade: number) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    //Getters e Setters
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
}

//Poção
export class Poção {
    //Atributos privados
    private nome: string;
    private ingredientes: Ingrediente[]; //Lista ingredientes
    private efeito: string;

    //Constructor
    constructor(nome: string, efeito: string) {
        this.nome = nome;
        this.efeito = efeito;
        this.ingredientes = []; //Inicializa a lista de ingredientes vazia
    }

    //Para adicionar ingredientes à poção
    public adicionarIngrediente(ingrediente: Ingrediente): void {
        this.ingredientes.push(ingrediente); //Adiciona o ingrediente à lista
    }

    //Para exibir a lista de ingredientes
    public exibirIngredientes(): void {
        console.log(`Ingredientes da poção ${this.nome}:`);
        this.ingredientes.forEach(ingrediente => {
            console.log(`- ${ingrediente.getNome()} (Quantidade: ${ingrediente.getQuantidade()})`);
        });
    }

    //Para preparar a poção (combina os efeitos dos ingredientes)
    public prepararPoção(): void {
        console.log(`Preparando a poção ${this.nome}...`);
        let efeitoFinal = `${this.efeito} com os efeitos dos ingredientes:`;
        this.ingredientes.forEach(ingrediente => {
            efeitoFinal += ` ${ingrediente.getNome()}`;
        });
        console.log(efeitoFinal);
    }
}

//Ingredientes para a poção Amortentia
const ovoCongeladoCinzal = new Ingrediente("Ovos congelados de Cinzal", 5);
const petalasRosa = new Ingrediente("Pétalas de rosa", 10);
const espinhosRosas = new Ingrediente("Espinhos de rosas", 3);
const hortelaPimenta = new Ingrediente("Hortelã-pimenta", 2);
const pedraLua = new Ingrediente("Pedra da lua", 1);
const poPerola = new Ingrediente("Pó de pérola", 4);

//Criando a poção Amortentia
const pocaoAmortentia = new Poção("Amortentia", "Prepara poção do amor mais poderosa do mundo");

//Adicionando ingredientes à poção Amortentia
pocaoAmortentia.adicionarIngrediente(ovoCongeladoCinzal);
pocaoAmortentia.adicionarIngrediente(petalasRosa);
pocaoAmortentia.adicionarIngrediente(espinhosRosas);
pocaoAmortentia.adicionarIngrediente(hortelaPimenta);
pocaoAmortentia.adicionarIngrediente(pedraLua);
pocaoAmortentia.adicionarIngrediente(poPerola);

//Exibindo ingredientes e preparando a poção Amortentia
pocaoAmortentia.exibirIngredientes();
pocaoAmortentia.prepararPoção();

//Ingredientes para a poção Felix Felicis
const ovoCinzal = new Ingrediente("Ovo de cinzal", 3);
const tentaculosMurtisco = new Ingrediente("Tentáculos de murtisco", 4);
const tinturaTimo = new Ingrediente("Tintura de timo", 2);
const cascaOvoOccami = new Ingrediente("Casca de ovo de Occami", 1);
const arrudaComumPo = new Ingrediente("Arruda comum em pó", 5);

//Criando a poção Felix Felicis
const pocaoFelixFelicis = new Poção("Felix Felicis", "Prepara poção da sorte líquida");

//Adicionando ingredientes à poção Felix Felicis
pocaoFelixFelicis.adicionarIngrediente(ovoCinzal);
pocaoFelixFelicis.adicionarIngrediente(tentaculosMurtisco);
pocaoFelixFelicis.adicionarIngrediente(tinturaTimo);
pocaoFelixFelicis.adicionarIngrediente(cascaOvoOccami);
pocaoFelixFelicis.adicionarIngrediente(arrudaComumPo);

//Exibindo ingredientes e preparando a poção Felix Felicis
pocaoFelixFelicis.exibirIngredientes();
pocaoFelixFelicis.prepararPoção();
