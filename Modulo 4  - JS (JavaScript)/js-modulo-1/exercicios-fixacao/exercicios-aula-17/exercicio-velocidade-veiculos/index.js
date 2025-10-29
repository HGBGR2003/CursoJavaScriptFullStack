let primeiroVeiculo
let segundoVeiculo
let velocidadePrimeiro
let velocidadeSegundo

primeiroVeiculo = prompt("Informe o nome do primeiro veiculo:")

velocidadePrimeiro = parseFloat(prompt("Informe a velocidade do primeiro veiculo:"))

segundoVeiculo = prompt("Informe o nome do segundo veiculo:")

velocidadeSegundo = parseFloat(prompt("Informe a velocidade do segundo veiculo:"))

if (velocidadePrimeiro > velocidadeSegundo) {
    console.log("O mais rápido é o primeiro carro.")
}else if (velocidadeSegundo > velocidadePrimeiro) {
    console.log("O mais rápido é o segundo veículo.")
}else if(velocidadePrimeiro == velocidadeSegundo){
    console.log("Os dois tiveram a mesma velocidade.")
}