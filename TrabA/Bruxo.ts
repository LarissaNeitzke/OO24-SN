import { Casa, grifinoria, lufaLufa, sonserina } from "./Casa";
import { CriaturaMagica } from "./CriaturaMagica";
import { Feitico } from "./Feitico";
import { Misc } from "./Misc";

export class Bruxo extends CriaturaMagica {
    private varinha:string
    private casa:Casa
    private habilidades:Feitico[]   // Feitiços que possui
    private poderMagico:number      // Dano do Bruxo

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string, varinhaRecebida:string, casaRecebida:Casa, habilidadesRecebidas:Feitico[], poderMagicoRecebido:number) {
        super(nomeRecebido, tipoRecebido, poderRecebido)
        this.varinha = varinhaRecebida
        this.casa = casaRecebida
        this.habilidades = habilidadesRecebidas
        this.poderMagico = poderMagicoRecebido
    }

    getPoderMagico():number {
        return this.poderMagico
    }

    getHabilidades():Feitico[] {
        return this.habilidades
    }

    usarMagia(feiticoRecebido:Feitico):number {
        if (this.habilidades.includes(feiticoRecebido)) {
            console.log(`${this.nome} está conjurando uma magia...`)
            this.lançarFeitiço(feiticoRecebido)
            return this.poderMagico+feiticoRecebido.getDano()
        }
        console.log(`${this.nome} não possui o feitiço especificado!`)
        return 0;
    }

    lançarFeitiço(feiticoRecebido:Feitico):void {
        feiticoRecebido.lançar()
    }
}

// Instâncias
const harry:Bruxo = new Bruxo(
    "Harry Potter",
    "Humano",
    "",
    "Azevinho e pena de fênix",
    grifinoria,
    Misc.retornarElementosAleatorios(Feitico.getAll(), 2),
    Math.floor(Math.random() * 140)
);
const voldemort:Bruxo = new Bruxo(
    "Lord Voldemort",
    "Humano",
    "",
    "Teixo e pena de fênix",
    sonserina,
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
const malfoy:Bruxo = new Bruxo(
    "Draco Malfoy",
    "Humano",
    "",
    "Madeira de pilriteiro e pelo de unicórnio",
    sonserina,
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
const hermione:Bruxo = new Bruxo(
    "Hermione Granger",
    "Humano",
    "",
    "Madeira de videira e fibra de coração de dragão",
    grifinoria,
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
const cedrico:Bruxo = new Bruxo(
    "Cedrico Diggory",
    "Humano",
    "",
    "Freixo e pelo de unicórnio",
    lufaLufa,
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);

export const membrosSonserina = [voldemort, malfoy]
export const membrosGrifinoria = [harry, hermione]
export const membrosLufaLufa = [cedrico]
export const membrosCorvinal = []