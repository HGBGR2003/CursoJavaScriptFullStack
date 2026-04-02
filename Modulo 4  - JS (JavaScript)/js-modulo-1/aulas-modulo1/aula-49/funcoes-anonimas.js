//Na chamada de funções anônimas, ela deve sempre chamada depois de criada.

olaMundo()

function olaMundo(){
    console.log("Olá, mundo!")
}

const oiMundo = function(){
    console.log("Oi, mundo")
}

oiMundo()