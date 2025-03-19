export class Recurso {
    private nome:string
    private funcao:string
    private quantidade:string


    constructor(nomeRecebido:string, funcaoRecebida:string, quantidadeRecebida:string) {
        this.nome = nomeRecebido;
        this.funcao = funcaoRecebida;
        this.quantidade = quantidadeRecebida;
    }

    public setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido;
    }
    public setFuncao(funcaoRecebido:string):void {
        this.funcao = funcaoRecebido;
    }
    public setQuantidade(quantidadeRecebida:string):void {
        this.quantidade = quantidadeRecebida;
    }

    public getNome():string {
        return this.nome;
    }
    public getFuncao():string {
        return this.funcao;
    }
    public getQuantidade():string {
        return this.quantidade;
    }

    

}

