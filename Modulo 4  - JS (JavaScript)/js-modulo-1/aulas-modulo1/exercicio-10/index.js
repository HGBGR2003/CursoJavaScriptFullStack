const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.canditados.length + " canditados)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome
    const descricao
    const dataLimite
}
