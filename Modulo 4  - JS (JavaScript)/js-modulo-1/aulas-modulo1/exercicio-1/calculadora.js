const x = parseFloat(prompt("Informe o primeiro número:"))
const y = parseFloat(prompt("Informe o segundo número:"))

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" + 
    "\nSoma total: " + soma + 
    "\nSubtração: " + subtracao + 
    "\nMultiplicação: " + multiplicacao + 
    "\nDivisão: " + divisao
)