/*Crie a classe VARINHA com os ATRIBUTOS PRIVADOS: MADEIRA, NÚCLEO e TAMANHO. 
  Crie os métodos GETTERS e SETTERS.
  Crie um método "exibirDetalhes", como "Varinha de madeira de [madeira], núcleo de [núcleo] e tamanho [tamanho]".*/

  export class Varinha {
    //Atributos privados
    private madeira: string;
    private nucleo: string;
    private tamanho: number;

    //Constructor
    constructor(madeira: string, nucleo: string, tamanho: number) {
        this.madeira = madeira;
        this.nucleo = nucleo;
        this.tamanho = tamanho;
    }

    //Getter e Setter para madeira
    public getMadeira(): string {
        return this.madeira;
    }

    public setMadeira(madeira: string): void {
        this.madeira = madeira;
    }

    //Getter e Setter para núcleo
    public getNucleo(): string {
        return this.nucleo;
    }

    public setNucleo(nucleo: string): void {
        this.nucleo = nucleo;
    }

    //Getter e Setter para tamanho
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    //Para exibir detalhes da varinha
    public exibirDetalhes(): void {
        console.log(`Varinha de madeira de ${this.madeira}, núcleo de ${this.nucleo} e tamanho ${this.tamanho} cm.`);
    }
}

const varinha1 = new Varinha("Carvalho", "Pena de Fenix", 32);
varinha1.exibirDetalhes();

const varinha2 = new Varinha("Salgueiro", "Fibra de Coração de Dragão", 27);
varinha2.exibirDetalhes();
