/*ENVOLVE E PROTEGE O CONTEÚDO*/
/*ATRIBUTOS VÃO FICAR ESCONDIDOS E OS MÉTODOS DISPONIBILIZADOS*/
/*KEYWORDS: PUBLIC e PRIVATE*/

import { cat } from "./classes";

export class user{
    //ATRIBUTOS
    private nome: string;
    private cat:cat;

    setNome(meuNome: string): void{this.nome=meuNome}
    setCat(meuCat: cat): void{this.cat=meuCat}
    adicionarTarefa(): void{console.log("Tarefa adicionada.")}


}

const userLarissa = new user()
userLarissa.setNome("Larissa")
const meuGato = new cat()
meuGato.setNome("Daeny")
userLarissa.setCat(meuGato)
    