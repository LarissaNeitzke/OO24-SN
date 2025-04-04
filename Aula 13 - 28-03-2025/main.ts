import { Aluno } from "./Aluno";
import { Avaliacao } from "./Avaliacao";
import { Equipamento } from "./Equipamento";
import { Exercicio } from "./Exercicio";
import { Instrutor } from "./Instrutor";
import { Treino } from "./Treino";
import { Usuario } from "./Usuario";

const usuario1 = new Usuario("Joao", "jose@gmail.com")

const instrutor1 = new Instrutor("Claudio", "claudio@gmail.com", "musculaçao", "RS4567")

const aluno1 = new Aluno("Bruno", "bruno@gmail.com", 23, 67, 1.65)

const avaliacao1 = new Avaliacao(aluno1, 10022001, aluno1.getPeso(), aluno1.getAltura(), aluno1.calcularIMC(), "Nunca praticou atividade física. Possui pressão alta.")

const exercicio1 = new Exercicio("Flexão", 3, 10)

const treino1 = new Treino(aluno1, instrutor1, exercicio1)

const equipamento1 = new Equipamento("Leg Press", "Treinamento de pernas", false)

usuario1.exibirInformacoes()
console.log(avaliacao1.calcularIMC())
console.log(treino1.getAluno())
console.log(equipamento1.verificarDisponibilidade())