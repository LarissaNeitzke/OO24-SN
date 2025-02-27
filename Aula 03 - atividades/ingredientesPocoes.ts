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
