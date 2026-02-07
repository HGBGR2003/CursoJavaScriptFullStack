let openDoor = parseInt(prompt("Esolha essas cinco opções:"
    + "\n 1 - Macarrão" + 
    "\n 2 - Sopa" + 
    "\n 3 - Strogonofe" +
    "\n 4 - X-Salada" +
    "\n 5 - Encerrar"
))

do{
    switch (openDoor) {
        case 1:
            alert("A opção escolhida foi macarrão")
            break;
    
        case 2:
            alert("A opção escolhida foi sopa")
            break;
        
        case 3:
            alert("A opção escolhida foi strogonofe")
            break;

        case 4:
            alert("A opção escolhida foi X-Salada")
            break;

        case 5:
            alert("O Programa será encerrado......")
            break;

        default:
            alert("Não econtrado, tente de novo!")
            break
    }

    openDoor = parseInt(prompt("Esolha essas cinco opções:"
    + "\n 1 - Macarrão" + 
    "\n 2 - Sopa" + 
    "\n 3 - Strogonofe" +
    "\n 4 - X-Salada" +
    "\n 5 - Encerrar"
))

} while(openDoor != 5)