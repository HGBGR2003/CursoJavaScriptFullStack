const nameTourist = prompt("Insira seu nome:")
let yesVisit = prompt("Visitou alguma cidade por esses dias: (sim/não)")
let accountant = 0
let nameCity
let nameTogther = ""

while (yesVisit == "sim") {
    nameCity = prompt("Qual o nome da cidade:")
    nameTogther += nameCity + ", "
    accountant++
    yesVisit = prompt("Visitou alguma cidade por esses dias: (sim/não)")
}

alert("O nome do turista é " + nameTourist 
     +"\nAs cidades são: " + nameTogther
    + "\nE a Quantidade de vezes foi de " + accountant
)