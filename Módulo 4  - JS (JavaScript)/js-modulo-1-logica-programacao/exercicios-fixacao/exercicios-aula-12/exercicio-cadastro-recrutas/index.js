let primeiroNomeDoRecruta
let sobrenomeDoRecruta
let campoDeEstudo
let anoDeNascimento
let idadeDoRecruta
let anoAtual
let juncaoDeNomes 
let conversaoAnoDoNascimento
let conversaoAnoAtual

primeiroNomeDoRecruta = prompt("Informe seu primeiro nome:")
sobrenomeDoRecruta = prompt("Informe seu sobrenome, ou seja seu segundo nome:")
juncaoDeNomes = primeiroNomeDoRecruta + " " + sobrenomeDoRecruta

campoDeEstudo = prompt("Qual é o seu campo de estudo:")
anoAtual = prompt("Informe o ano atual:")
anoDeNascimento = prompt("Qual é o seu ano de nascimento:")

anoDeNascimento = parseFloat(anoDeNascimento)
anoAtual = parseFloat(anoAtual)
idadeDoRecruta = anoAtual - anoDeNascimento

console.log("O Nome Completo do Recruta é " + juncaoDeNomes)
console.log("O seu campo de estudo" + " é " + campoDeEstudo)
console.log("A sua idade atualmente é " + idadeDoRecruta + " anos")