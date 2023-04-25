function inserePlacar () {
    var corpoTabela = $(".placar").find("tbody")
    var usuario = "Marcelo";
    var numPalavras = $("#quantPalavras").text()

    var linha = novaLinha(usuario, numPalavras)
    linha.find(".botao-remover").click(removeLinha)

    /*var linha = "<tr>"+
                    "<td>"+ usuario + "</td>"+
                    "<td>"+ numPalavras + "</td>"+
                    "<td>"+ botaoRemover + "</td>"+
                "</tr>" */

    corpoTabela.prepend(linha)
}

function novaLinha(usuario, numPalavras) {
    var linha = $("<tr>")
    var colunaUsuario = $("<td>").text(usuario)
    var colunaPalavras = $("<td>").text(numPalavras)
    var colunaRemover = $("<td>")
    var link = $("<a>").addClass("botao-remover").attr("href", "#")
    var icone = $("<i>").addClass("x-small").addClass("material-icons").text("delete")

    link.append(icone)
    colunaRemover.append(link)

    linha.append(colunaUsuario)
    linha.append(colunaPalavras)
    linha.append(colunaRemover)

    return linha

}

function removeLinha (e) {
        e.preventDefault()
        $(this).parent().parent().remove()
}