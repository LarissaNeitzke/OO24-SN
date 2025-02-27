/*Crie a classe FEITICO com os atributos PRIVADOS "nome", "tipo" (ex: defesa, ataque, cura) e "poder".
  Implemente os métodos GETTERS e SETTERS.
  Crie um método "lancarFeitico" que simule o lançamento do feitiço, como "O feitiço [nome] do tipo [tipo] com poder [poder] foi lançado!*/

export class Feitico {
    //Atributos privados
    private nome: string;
    private tipo: string;  // Tipo: defesa, ataque, cura
    private poder: number;

    //Constructor
    constructor(nome: string, tipo: string, poder: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
    }

    //Getter e Setter para nome
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    //Getter e Setter para tipo
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    //Getter e Setter para poder
    public getPoder(): number {
        return this.poder;
    }

    public setPoder(poder: number): void {
        this.poder = poder;
    }

    //Lançar o feitiço
    public lancarFeitico(): void {
        console.log(`O feitiço ${this.nome} do tipo ${this.tipo} com poder ${this.poder} foi lançado!`);
    }
}

const feitiço1 = new Feitico("Sectumsempra", "Ataque", 80);
feitiço1.lancarFeitico();

const feitiço2 = new Feitico("Expecto Patronum", "Defesa", 90);
feitiço2.lancarFeitico();

const feitiço3 = new Feitico("Episkey", "Cura", 50);
feitiço3.lancarFeitico();
