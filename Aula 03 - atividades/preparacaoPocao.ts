//Ingredientes para a poção Amortentia
const ovoCongeladoCinzal = new Ingrediente("Ovos congelados de Cinzal", 5);
const petalasRosa = new Ingrediente("Pétalas de rosa", 10);
const espinhosRosas = new Ingrediente("Espinhos de rosas", 3);
const hortelaPimenta = new Ingrediente("Hortelã-pimenta", 2);
const pedraLua = new Ingrediente("Pedra da lua", 1);
const poPerola = new Ingrediente("Pó de pérola", 4);

//Criando a poção Amortentia
const pocaoAmortentia = new Poção("Amortentia", "Prepara poção do amor mais poderosa do mundo");

//Adicionando ingredientes à poção Amortentia
pocaoAmortentia.adicionarIngrediente(ovoCongeladoCinzal);
pocaoAmortentia.adicionarIngrediente(petalasRosa);
pocaoAmortentia.adicionarIngrediente(espinhosRosas);
pocaoAmortentia.adicionarIngrediente(hortelaPimenta);
pocaoAmortentia.adicionarIngrediente(pedraLua);
pocaoAmortentia.adicionarIngrediente(poPerola);

//Exibindo ingredientes e preparando a poção Amortentia
pocaoAmortentia.exibirIngredientes();
pocaoAmortentia.prepararPoção();

//Ingredientes para a poção Felix Felicis
const ovoCinzal = new Ingrediente("Ovo de cinzal", 3);
const tentaculosMurtisco = new Ingrediente("Tentáculos de murtisco", 4);
const tinturaTimo = new Ingrediente("Tintura de timo", 2);
const cascaOvoOccami = new Ingrediente("Casca de ovo de Occami", 1);
const arrudaComumPo = new Ingrediente("Arruda comum em pó", 5);

//Criando a poção Felix Felicis
const pocaoFelixFelicis = new Poção("Felix Felicis", "Prepara poção da sorte líquida");

//Adicionando ingredientes à poção Felix Felicis
pocaoFelixFelicis.adicionarIngrediente(ovoCinzal);
pocaoFelixFelicis.adicionarIngrediente(tentaculosMurtisco);
pocaoFelixFelicis.adicionarIngrediente(tinturaTimo);
pocaoFelixFelicis.adicionarIngrediente(cascaOvoOccami);
pocaoFelixFelicis.adicionarIngrediente(arrudaComumPo);

//Exibindo ingredientes e preparando a poção Felix Felicis
pocaoFelixFelicis.exibirIngredientes();
pocaoFelixFelicis.prepararPoção();
