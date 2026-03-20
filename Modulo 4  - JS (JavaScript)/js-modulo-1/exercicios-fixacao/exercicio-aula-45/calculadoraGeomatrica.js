let opcao = ""

function areaTriangulo(base, altura) {
    let areaTrian = (base * altura) / 2
    return areaTrian
}

function areaRetangulo(base, altura) {
    let areaRetan = base * altura
    return areaRetan
}

function areaQuadrado(lado) {
    let calculoArea = Math.pow(lado, 2)
    return calculoArea
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    let calculoArea = (baseMaior + baseMenor) * (altura / 2)
    return calculoArea
}

function areaCirculo(raio) {
    const pi = 3.14
    let calculoAreaCirculo = pi * Math.pow(raio, 2)
    return calculoAreaCirculo
}

do {

    opcao = prompt(
        "Calculo de Áreas: - Escolha Uma\n\n" +
        "1. Área do Triângulo\n2. Área do Retângulo\n" +
        "3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Circulo\n" +
        "6. Sair\n"
    )

    switch (opcao) {
        case "1": {
            let base = parseFloat(prompt("Digite a base do triângulo:"))
            let altura = parseFloat(prompt("Digite a altura do triângulo:"))

            while (base < 0 || altura < 0) {
                alert("Valores não podem ser negativos!")
                base = parseFloat(prompt("Digite a base do triângulo:"))
                altura = parseFloat(prompt("Digite a altura do triângulo:"))
            }

            alert("A área do triângulo é: " + areaTriangulo(base, altura))
            break
        }

        case "2": {
            let base = parseFloat(prompt("Digite a base do retângulo:"))
            let altura = parseFloat(prompt("Digite a altura do retângulo:"))

            while (base < 0 || altura < 0) {
                alert("Valores não podem ser negativos!")
                base = parseFloat(prompt("Digite a base do retângulo:"))
                altura = parseFloat(prompt("Digite a altura do retângulo:"))
            }

            alert("A área do retângulo é: " + areaRetangulo(base, altura))
            break
        }

        case "3": {
            let lado = parseFloat(prompt("Digite o lado do quadrado:"))

            while (lado < 0) {
                alert("O valor não pode ser negativo!")
                lado = parseFloat(prompt("Digite o lado do quadrado:"))
            }

            alert("A área do quadrado é: " + areaQuadrado(lado))
            break
        }

        case "4": {
            let baseMaior = parseFloat(prompt("Digite a maior base do trapézio:"))
            let baseMenor = parseFloat(prompt("Digite a menor base do trapézio:"))
            let altura = parseFloat(prompt("Digite a altura do trapézio:"))

            while (baseMaior < 0 || baseMenor < 0 || altura < 0) {
                alert("Valores não podem ser negativos!")
                baseMaior = parseFloat(prompt("Digite a maior base do trapézio:"))
                baseMenor = parseFloat(prompt("Digite a menor base do trapézio:"))
                altura = parseFloat(prompt("Digite a altura do trapézio:"))
            }

            alert("A área do trapézio é: " + areaTrapezio(baseMaior, baseMenor, altura))
            break
        }

        case "5": {
            let raio = parseFloat(prompt("Defina o raio da circunferência:"))

            while (raio < 0) {
                alert("O valor não pode ser negativo!")
                raio = parseFloat(prompt("Defina o raio da circunferência:"))
            }

            alert("A área do círculo é: " + areaCirculo(raio))
            break
        }

        case "6":
            alert("Finalizando....")
            break

        default:
            alert("Operação inválida, tente novamente.")
            break
    }

} while (opcao != "6")