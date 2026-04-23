const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//Map

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function (personagem) {
  return personagem.nome;
  // O map ele utiliza de elementos antigos de um array especifico e coloca em um novo.
});

console.log(nomes);

//Filter

// for (let i = 0; i < personagens.length; i++) {
//     const personagem = personagens[i]
//     if (personagem.raca === "Orc") {
//         orcs.push(personagem)
//     }
// }

const orcs = personagens.filter(function (personagem) {
  //Valor Atual = Personagem
  return personagem.raca === "Orc";
});

console.log(orcs);

// Reduce: serve para reduzir um array existente a um valor final qualquer.

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

//Usando as raças para personalizar a procura para o novo array de forma simplificada.

const racas = personagens.reduce(function (valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado

}, {})

console.log(racas)

//Sort: ordena os elementos de um array a partir de comparações entre duplas de elementos.

 const ordenacao = personagens.slice().sort(function (personagemA, personagemB){
  return personagemA.nivel - personagemB.nivel
})

console.log(ordenacao)