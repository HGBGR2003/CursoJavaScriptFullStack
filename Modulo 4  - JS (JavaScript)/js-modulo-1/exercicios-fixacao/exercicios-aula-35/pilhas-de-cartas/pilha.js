let nameOfCard
let tape = []
let addCard

do {
    nameOfCard = prompt(
        "Cartas no baralho: " + (tape.length > 0 ? tape.join(", ") : "Nenhuma") + "\n" +
        "1 - Adicionar Carta\n" +
        "2 - Puxar Carta\n" +
        "3 - Sair"
    )

    switch (nameOfCard) {
        case "1'":
            addCard = prompt("Qual o nome da carta a ser adicionada:")
            tape.unshift(addCard)
            break;
    
         case "2":
            if (tape.length > 0) {
                 let pull = tape.shift()
                 alert("Carta Puxada: " + pull)
            }else{
                alert("O Baralho está vazio!")
            }
           
            break;

        case "3":
            alert(
                "Estamos saindo e as cartas que sobrou são essas: " + tape.join(", ")
            )
            break

        default:
        alert("Valores Contrários, tente de novo!")
            break;
    }

} while (nameOfCard != "3");