let nameCharacterGame
let powerOfCharacter
let pointsLife
let haveShield
let powerDefense

let nameCharacterSecond
let pointsLifeOfSecondPlayer
let powerDefenseSecondPlayer
let haveShieldSecondPlayer

let damage = 0

nameCharacterGame = prompt("Insira seu nome de jogador:")
powerOfCharacter = prompt("Qual é seu poder de ataque:")
pointsLife = parseFloat(prompt("Quantos pontos de vida você possui:"))
powerDefense = parseFloat(prompt("Qual é o seu poder defesa"))
haveShield = prompt("Possui escudo: (sim/não)")

nameCharacterSecond = prompt("Insira seu nome de jogador defensor:")
pointsLifeOfSecondPlayer = parseFloat(prompt("Quantos pontos de vida você possui, player 2:"))
powerDefenseSecondPlayer = parseFloat(prompt("Qual é o seu poder defesa, jogador 2"))
haveShieldSecondPlayer = prompt("Possui escudo, jogador 2: (sim/não)")



if (powerOfCharacter > powerDefenseSecondPlayer) {
    if (haveShieldSecondPlayer.toLowerCase() === "sim") {
        damage = (powerOfCharacter - powerDefenseSecondPlayer) / 2
    } else {
        damage = powerOfCharacter - powerDefenseSecondPlayer
    }
} else {
    damage = 0
}

pointsLifeOfSecondPlayer -= damage

alert(
  `Dano causado: ${damage}\n\n` +
  `Atacante:\n` +
  `  Nome: ${nameCharacterGame}\n` +
  `  Poder de Ataque: ${powerOfCharacter}\n` +
  `  Vida: ${pointsLife}\n` +
  `  Defesa: ${powerDefense}\n` +
  `  Escudo: ${haveShield}\n\n` +
  `Defensor:\n` +
  `  Nome: ${nameCharacterSecond}\n` +
  `  Vida: ${pointsLifeOfSecondPlayer}\n` +
  `  Defesa: ${powerDefenseSecondPlayer}\n` +
  `  Escudo: ${haveShieldSecondPlayer}`
)



