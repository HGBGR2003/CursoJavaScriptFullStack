function playerAdd() {
  const posicion = document.getElementById("posicion");
  const namePlayer = document.getElementById("name");
  const numberPlayer = document.getElementById("numberPlayer");

  if (!posicion.value || !namePlayer.value || !numberPlayer.value) {
    alert("Preencha todos os campos antes de escalar.");
    return;
  }

  const confirmation = confirm(
    "Deseja confirmar a escalação?\n\n" +
      "Posição: " +
      posicion.value +
      "\n" +
      "Nome: " +
      namePlayer.value +
      "\n" +
      "Camisa: " +
      numberPlayer.value,
  );

  if (confirmation == true) {
    const playersList = document.getElementById("players-list");

    const ul = document.createElement("ul");

    const posiLi = document.createElement("li");
    const nameLi = document.createElement("li");
    const numberLi = document.createElement("li");

    posiLi.innerText = "Posição do Jogador: " + posicion.value;
    nameLi.innerText = "Nome do Jogador: " + namePlayer.value;
    numberLi.innerText = "Número do Jogador: " + numberPlayer.value;

    ul.appendChild(posiLi);
    ul.appendChild(nameLi);
    ul.appendChild(numberLi);

    playersList.appendChild(ul);

    posicion.value = "";
    namePlayer.value = "";
    numberPlayer.value = "";
  }
}

function playerRemove() {
  const removeNumber = document.getElementById("removeNumber");

  if (!removeNumber.value) {
    alert("Informe  o número da camisa do jogador a remover.");
    return;
  }

  const playersList = document.getElementById("players-list");

  const entries = playersList.getElementsByTagName("ul");

  let found = 0;

  for (let i = 0; i < entries.length; i++) {
    if (
      entries[i].innerText.includes("Número do Jogador: " + removeNumber.value)
    ) {
      found = entries[i];
      break;
    }
  }

  if (!found) {
    alert(
      "Nenhum jogador com a camisa nº" +
        removeNumber.value +
        " foi encontrado.",
    );
    return;
  }

  const confirmation = confirm("Deseja exlcluir o Jogador");

  if (confirmation == true) {
    playersList.removeChild(found);
    removeNumber.value = "";
  }
}
