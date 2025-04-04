export class Usuario{
    protected nome:string
    protected email:string

    constructor (nomeRecebido:string, emailRecebido:string){
        this.nome = nomeRecebido
        this.email = emailRecebido
    }

    exibirInformacoes():void {
        console.log(`Nome: ${this.nome} | Email: ${this.email}`)
    }

}