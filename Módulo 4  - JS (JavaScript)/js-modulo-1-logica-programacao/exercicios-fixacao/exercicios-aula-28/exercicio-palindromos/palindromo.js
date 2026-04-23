const word = prompt("Entre com uma palavra:")
let yesPalin = true

for (let i = 0; i < word.length / 2; i++) {
   if (word[i] != word[word.length - 1 - i]) {
     yesPalin = false
     break
   }
}

if (yesPalin) {
    alert("É um palíndromo!")
}else{
    alert("Não é um palíndromo.")
}