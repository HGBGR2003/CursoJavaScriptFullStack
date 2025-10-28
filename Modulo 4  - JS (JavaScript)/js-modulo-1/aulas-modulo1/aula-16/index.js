const age = prompt("Informe a sua idade:")

if (age > 18) {
    alert("Você é maior de idade")
}else if (age > 12) {
    alert("Você é menor de idade")
}else if (age > 4) {
    alert("Você é criança")
}else{
    alert("..")
}

// console.log("\nValor do resultado:") //Usando operador ternário

// const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
// console.log(resultado)