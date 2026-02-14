const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragon",
    "Legolas", "Gimli"]

console.log(arr)

//Adicionar elementos: 
//push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift
tamanho = arr.unshift("Valdir")
console.log(arr)
console.log(tamanho)

//Remover elementos:

//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

