import { Pessoa } from "./Pessoa";
import { Conjuge } from "./Conjuge";
import { Node } from "./Node";
import { ArvoreGenealogica } from "./ArvoreGenealogica";

const diego = new Pessoa("Diego", [null, null])
const larissa = new Conjuge("Larissa", [null, null]);
const bruno = new Pessoa("Bruno", [diego, larissa]);

const nelci = new Pessoa("Nelci", [null, null])
const simone = new Pessoa("Simone", [null, null])
const adriana = new Pessoa("Adriana", [nelci, simone]);

const ricardo = new Pessoa("Ricardo", [null, null]);

const marli = new Conjuge("Marli", [simone, bruno])
const nilceu = new Conjuge("Nilceu", [simone, bruno])

const armando = new Conjuge("Armando", [null, null]);
const marisa = new Conjuge("Marisa", [null, null]);


const nodeLarissa = new Node<Pessoa>(larissa);
const nodeAdriana = new Node<Pessoa>(adriana);
const nodeRicardo = new Node<Pessoa>(ricardo);
const nodeMarli = new Node<Pessoa>(marli);
const nodeNilceu = new Node<Pessoa>(nilceu);
const nodeArmando = new Node<Pessoa>(armando);

// Montando a árvore
nodeLarissa.left = nodeAdriana
nodeLarissa.right = nodeRicardo

nodeAdriana.left = nodeMarli
nodeAdriana.right = nodeNilceu

nodeRicardo.left = nodeArmando;


const arvore = new ArvoreGenealogica(nodeLarissa);


console.table(arvore.encontrarPessoa("Adriana"));
arvore.adicionarFilho(ricardo, marisa)
larissa.listarRelacoes();