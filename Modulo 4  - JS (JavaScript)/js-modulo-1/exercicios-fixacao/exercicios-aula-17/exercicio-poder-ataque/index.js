//[
const characterAtack = prompt("Insira seu nome de jogador atacante:")

const powerOfAtack =  prompt("Qual é seu poder de ataque:")

const defender = prompt("Insira seu nome de jogador defensor:")

const pointsLife = parseFloat(prompt("Quantos pontos de vida você possui:"))

const powerDefense = parseFloat(prompt("Qual é o seu poder defesa?"))

const haveShield = prompt("Possui o escudo: (Sim/Não)")

let damage = 0
// Corrigido as variáveis.] 
//{
if (powerOfCharacter > powerDefense && haveShield === "Não") {
    damage = powerOfCharacter - powerDefense
}else if(powerOfCharacter > powerDefense && haveShield === "Sim"){
    damage = (powerOfCharacter - powerDefense) / 2
}
// Corrigindo a lógica do if e else.}
pointsLifeOfSecondPlayer -= damage

alert(characterAtack + " causou " + damage + " pontos de dano em " + defender)
alert(
    characterAtack + "\nPoder de ataque: " + powerOfAtack + "\n\n" +
    defender + "\nPontos de vida: " + pointsLife + 
    "\nPoder de defesa: " + powerDefense + "\nPossui escudo: " + haveShield 
)



