let quantityMoneyInitial = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível ?"))

let chooseOptions = parseInt(prompt("Esoclha essas opções, abaixo"
    + "\nDinheiro inicial: " + quantityMoneyInitial +
    "\n 1 - Adicionar Dinheiro" +
    "\n 2 - Remover Dinehrio" +
    "\n 3 - Sair do Terminal"
))

do {
    switch (chooseOptions) {
        case 1:
            let addMoney = parseFloat(prompt("Quanto de dinheiro deseja adicionar ?"))
            quantityMoneyInitial += addMoney
            break;

        case 2:
            let removeMoney = parseFloat(prompt("Quanto de dinheiro deseja remover ?"))
            quantityMoneyInitial -= removeMoney
            break;

        default:
            alert("Resultado não encontrado.......")
            break;
    }

    chooseOptions = parseInt(prompt("Esoclha essas opções, abaixo"
        + "\nDinheiro inicial: " + quantityMoneyInitial +
        "\n 1 - Adicionar Dinheiro" +
        "\n 2 - Remover Dinehrio" +
        "\n 3 - Sair do Terminal"
    ))

} while (chooseOptions != 3)