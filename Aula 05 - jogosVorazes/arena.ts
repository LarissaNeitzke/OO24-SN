import { Distrito } from "./distrito";
import { Tributo } from "./tributo";
import { Organizador } from "./organizador";

const distrito1 = new Distrito('1', ['Ferro'], 30);
const distrito2 = new Distrito('2', ['Mel'], 45);
const distrito3 = new Distrito('3', ['Grãos'], 50);

const tributo1 = new Tributo('José', 98, distrito2, 'Escondeu irmão no dia da Seleção', ['Agilidade', 'Atirador de Facas']);
const tributo2 = new Tributo('Paola', 68, distrito1, 'Roubou a padaria do José', ['Força', 'Arco e Flecha']);