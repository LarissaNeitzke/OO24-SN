
/*
3. CRIE UMA NOVA CLASSE CHAMADA Habilidade COM UM ATRIBUTO nome: string 
*/

/*
5. ATUALIZE O MÉTODO exibirHabilidades() PARA EXIBIR OS NOMES DAS HABILIDADES
*/

export class Habilidade {
    private nome:string;

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    public setNome(nomeRecebido:string): void {
        this.nome = nomeRecebido
    }

    public getNome(): string {
        return this.nome
    }

}