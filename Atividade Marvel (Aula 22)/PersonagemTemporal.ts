export class PersonagemTemporal {
    private nome:string
    private universo:string
    assinaturaTemporal:number


    constructor(nome:string, universo:string, assinaturaTemporal:number){
        this.nome = nome
        this.universo = universo
        this.assinaturaTemporal = assinaturaTemporal
    }

    public getNome():string{
        return this.nome
    }

    public getUniverso():string{
        return this.universo
    }

    public getAssinaturaTemporal():number{
        return this.assinaturaTemporal
    }

    public exibirInfo(){
        console.table(this)
    }
}
