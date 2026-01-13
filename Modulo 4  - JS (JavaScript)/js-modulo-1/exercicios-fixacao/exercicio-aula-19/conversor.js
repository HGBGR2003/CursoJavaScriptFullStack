const resultMeters = prompt(
    "Escolha uma unidade de medida que será convertidade de metros:\n" +
    "mm)\ncm)\ndm)\ndam)\nhm)\nkm)"
)

const resultNumbers = prompt("Digite o número a ser convertido:")
let resultFinal = parseFloat(resultNumbers)

let converter = 0

switch (resultMeters) {
    case "mm":
        converter = resultFinal * 1000
        alert("O resultado é " + converter + " mm")
        break;

    case "cm":
        converter = resultFinal * 100
        alert("O resultado é " + converter + " cm")
        break

    case "dm":
        converter = resultFinal * 10
        alert("O resultado é " + converter + " dm")
        break

    case "dam":
        converter = resultFinal / 10
        alert("O resultado é " + converter + " dam")
        break

    case "hm":
        converter = resultFinal / 100
        alert("O resultado é " + converter + " hm")
        break

    case "km":
        converter = resultFinal / 1000
        alert("O resultado é " + converter + " km")
        break

    default:
        alert("Sua opção está inválida")
        break;
}