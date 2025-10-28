const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastro com sucesso!\n" + 
    "Nome completo: " + primeiroNome + " " + sobrenome + "\n" +
    "Campo de estudo: " + campoDeEstudo + "\n" +
    "Idade: " + (2025 - anoDeNascimento)
)