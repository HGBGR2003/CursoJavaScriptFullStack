const lista = [];

let listaDePessoas = "";

function novaVaga() {
  let novaVaga = prompt("Nome da Vaga:");
  let descricao = prompt("Descrição da vaga:");
  let dataLimite = prompt("Informe a data limite para a vaga continuar");

  if (
    confirm(
      "Confirmar nova vaga?\n\nNome: " +
        novaVaga +
        "\nDescrição: " +
        descricao +
        "\nData limite: " +
        dataLimite,
    )
  ) {
    lista.push({
      indice: lista.length + 1,
      nomeDaVaga: novaVaga,
      descricao: descricao,
      dataLimite: dataLimite,
      candidatos: [],
    });
    alert("Vaga criada com sucesso!");
  }
}

function visualizarVaga() {
  if (lista.length > 0) {
    let indice = parseInt(prompt("Índice da vaga:")) - 1;
    let vagaConsultada = lista[indice];
    alert(
      "Nome: " +
        vagaConsultada.nomeDaVaga +
        "\nDescrição: " +
        vagaConsultada.descricao,
    );
  } else {
    alert("Não tem vagas disponiveis.");
  }
}

function incresver() {
  let nomeCandidato = prompt("Insira o seu nome Candidato para a Vaga.");

  let indice = parseInt(prompt("Índice da vaga:")) - 1;

  if (confirm("Confirme suas informações para Salvar:")) {
    lista[indice].candidatos.push(nomeCandidato);
  }
}

function excluirVaga() {
  let indice = parseInt(prompt("Informe o índice da vaga:")) - 1;
  let vaga = lista[indice];

  alert(
    "Nome: " +
      vaga.nomeDaVaga +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nCandidatos: " +
      vaga.candidatos.length,
  );

  if (confirm("Confirma a exclusão da vaga?")) {
    lista.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  }
}

function principal() {
  let nomeOperacao;

  do {
    listaDePessoas = "";

    for (let i = 0; i < lista.length; i++) {
      listaDePessoas +=
        i +
        1 +
        "º " +
        lista[i].nomeDaVaga +
        " | Candidatos: " +
        lista[i].candidatos.length +
        "\n";
    }

    nomeOperacao = prompt(
      "Vagas de Emprego\n" +
        (listaDePessoas || "Nenhuma vaga disponivel.") +
        "\n\nEscolha uma opção:\n" +
        "1 - Criar um nova vaga\n" +
        "2 - Visualizar uma vaga\n" +
        "3 - Inscrever um canditado em uma vaga\n" +
        "4 - Exclir uma vaga\n" +
        "5 - Sair",
    );

    switch (nomeOperacao) {
      case "1":
        novaVaga();
        break;

      case "2":
        visualizarVaga();
        break;

      case "3":
        incresver();
        break;

      case "4":
        excluirVaga();
        break;

      case "5":
        alert("Saindo....");
        break;

      default:
        alert("Opção Não Encontrada tente de novo.");
        break;
    }
  } while (nomeOperacao != "5");
}

principal();
