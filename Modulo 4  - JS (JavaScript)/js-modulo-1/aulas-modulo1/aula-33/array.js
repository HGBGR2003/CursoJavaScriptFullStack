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

//Pesquisar por elementos:

//includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)
