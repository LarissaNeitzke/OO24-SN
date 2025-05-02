// Criar uma classe pilha de pratos, que terá um array de strings como atributo
// Criar um método adicionarPrato
// Criar um método retirarPrato
// Criar um método estaVazio
// Criar um método tamanho

class PilhaDePratos {
    private pratos: string[] = [];

    // ADICIONA UM PRATO NO TOPO DA PILHA
    adicionarPrato(prato: string): void {
        this.pratos.push(prato);
    }

    // REMOVE E RETORNA O PRATO DO TOPO DA PILHA
    retirarPrato(): string | undefined {
        return this.pratos.pop();
    }

    // VERIFICA SE A PILHA ESTÁ VAZIA
    estaVazio(): boolean {
        return this.pratos.length === 0;
    }

    // RETORNA A QUANTIDADE DE PRATOS NA PILHA
    tamanho(): number {
        return this.pratos.length;
    }
}

const pilha = new PilhaDePratos();
pilha.adicionarPrato("Prato 1");
pilha.adicionarPrato("Prato 2");
pilha.adicionarPrato("Prato 3");

console.log(pilha.retirarPrato()); // "Prato 3"
console.log(pilha.tamanho());      // 2
console.log(pilha.estaVazio());    // false
