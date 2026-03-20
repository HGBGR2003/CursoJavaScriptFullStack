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
        case "1":
            let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"))

            let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"))

            if (baseTriangulo || alturaTriangulo < 0) {

                baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"))

                alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"))

            } else {
                let chamadaTriangulo = areaTriangulo(baseTriangulo, alturaTriangulo)

                alert("A área do triângulo é: " + chamadaTriangulo)
            }

            break

        case "2":
            let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"))

            let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"))

            let chamadaRetangulo = areaRetangulo(baseRetangulo, alturaRetangulo)
            alert("A área do retângulo é: " + chamadaRetangulo)
            break

        case "3":
            let lado = parseFloat(prompt("Digite o lado do quadrado, para determinar sua área:"))

            let chamadaQuadrado = areaQuadrado(lado)
            alert("A área do retângulo é: " + chamadaQuadrado)
            break

        case "4":

            let baseMaior = parseFloat(prompt("Digite a maior base do trapézio:"))

            let baseMenor = parseFloat(prompt("Digite a menor base do trapézio:"))

            let altura = parseFloat(prompt("Digite a altura do trapézio:"))

            let chamadaTrapzeio = areaTrapezio(baseMaior, baseMenor, altura)
            alert("A área do trapézio é: " + chamadaTrapzeio)
            break


        case "5":
            let raio = parseFloat(prompt("Defina o raio da circunferência:"))
            let chamadaCirculo = areaCirculo(raio)
            alert("A área do círculo é: " + chamadaCirculo)
            break

        case "6":
            alert("Finalizando....")
            break

        default:
            alert("Operação Inválida tente novamente.")
            break;
    }

} while (opcao != "6");