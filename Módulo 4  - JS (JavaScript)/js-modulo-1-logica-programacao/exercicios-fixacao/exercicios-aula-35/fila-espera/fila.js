let tape = []
let nameOfOperation = ""

do {
    let listOFPeople = "";

    for (let i = 0; i < tape.length; i++) {
        listOFPeople += (i + 1) + "º " + tape[i] + "\n";
    }

    nameOfOperation = prompt(
        "Fila de Espera:\n" +
        (listOFPeople || "Nenhum paciente na fila.") + 
        "\n\nEscolha uma opção:\n" +
        "1 - Novo Paciente\n" +
        "2 - Consultar Paciente\n" +
        "3 - Sair"
    )

    switch (nameOfOperation) {
        case "1":
            let newPatient = prompt("Nome do Paciente?")
            tape.push(newPatient)
            break

        case "2":
            if (tape.length > 0) {
               let patientConsult = tape.shift() 
               alert("Paciente já consultado: " + patientConsult)
            } else {
                alert("Não tem pacientes na fila.")
            }
            break

        case "3":
            alert("Saindo...")
            break

        default:
            alert("Operação Inválida tente novamente.")
    }

} while (nameOfOperation != "3");