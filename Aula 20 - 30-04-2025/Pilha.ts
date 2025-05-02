/*
push(item): Adiciona
pop(): Remove
peek(): Retorna
isEmpty()
size()
clear()
*/

class Pilha<T>{
    private elementos: T[] = [];
    push(item: T):void {this.elementos.push(item);} // ADICIONA UM ELEMENTO AO FIM DA LISTA
    pop(): T | undefined {                  // REMOVE UM ELEMENTO DO FIM DA LISTA
        return this.elementos.pop();} 
    peek(): T | undefined {                 // RETORNA O ÚLTIMO ELEMENTO DA LISTA
        return this.elementos[this.elementos.length -1];}
    isEmpty(): boolean{                     // VERIFICA SE A ESTRUTURA ESTÁ VAZIA
        return this.elementos.length === 0;}
    size(): number {return this.elementos.length;}  // RETORNA A QUANTIDADE DE ELEMENTOS CONTIDOS NA ESTRUTURA
    clear():void {this.elementos = [];}     //ESVAZIA A ESTRUTURA
}

const minhaPilha = new
Pilha<number>();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);

console.log(minhaPilha.pop()); //saída 3
console.log(minhaPilha.pop()); //saída 2
console.log(minhaPilha.size()); // saída 2
console.log(minhaPilha.isEmpty()); //false
minhaPilha.clear();
console.log(minhaPilha.isEmpty()); //true

