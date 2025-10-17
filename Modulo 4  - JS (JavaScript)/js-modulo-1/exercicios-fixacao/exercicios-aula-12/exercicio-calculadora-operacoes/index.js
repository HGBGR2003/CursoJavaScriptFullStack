let primeiroValorNumerico
let segundoValorNumerico
let somatorio
let subtracao
let multiplicacao
let divisao

primeiroValorNumerico = parseFloat(prompt("Insira o primeiro valor numério:"))
segundoValorNumerico = parseFloat(prompt("Insira o segundo valor numérico:"))

somatorio = primeiroValorNumerico + segundoValorNumerico
subtracao = primeiroValorNumerico - segundoValorNumerico
multiplicacao = primeiroValorNumerico * segundoValorNumerico
divisao = primeiroValorNumerico / segundoValorNumerico

console.log("A soma total é: " + somatorio)
console.log("A subtração positiva: " + subtracao)
console.log("A multiplicação: " + multiplicacao)
console.log("A divisão dos dois valores: " + divisao)