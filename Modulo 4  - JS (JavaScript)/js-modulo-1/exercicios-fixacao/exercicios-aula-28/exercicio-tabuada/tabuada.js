const numberUser = prompt("Entre com um número para ser calculado em nossa tabuada:")

let valueResults = ""

for (let i = 0; i <= 20; i++) {
    let multi = i * numberUser
    valueResults += "\n " + numberUser + " X " + i + " = " + multi
}

alert(valueResults)

