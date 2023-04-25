var tempoInicial = $("#contagemTempo").text();
var textArea = $("#caixaTexto")

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
     $("#botaoReiniciar").click(reiniciaJogo);
     addBordar();
});

function atualizaTamanhoFrase () {
    var frase = $(".texto").text() 
    var numPalavras = frase.split(" ").length 
    var tamanhoFrase = $("#contadorPalavra")
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    textArea.on("input", function() {
        var area = textArea.val()
        var qtdText = area.split(/\S+/).length -1;
        $("#quantPalavras").text(qtdText);
    
        var qtdCaracter = area.length;
        $("#contadorCaracter").text(qtdCaracter);
    })
}

function inicializaCronometro() {
    var tempoRestante = $("#contagemTempo").text();
    textArea.one("focus", function(){
        $("#botaoReiniciar").attr("disabled", true);
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $("#contagemTempo").text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(cronometroId);
                $("#botaoReiniciar").attr("disabled", false);
                finalizaJogo();
            }
        },1000)
    })
}

function addBordar(){
    var frase = $(".texto").text()
    textArea.on("input", function(){
        var digitado = textArea.val();
        var comparavel = frase.substr(0, digitado.length)
        if(digitado == comparavel){
            textArea.addClass("borda-verde")
            textArea.removeClass("borda-vermelha")
        }else{
            textArea.addClass("borda-vermelha")
            textArea.removeClass("borda-verde")
        }
    })
}

function reiniciaJogo () {
        textArea.attr("disabled", false)
        textArea.val("")
        $("#contadorCaracter").text("0")
        $("#quantPalavras").text("0")
        $("#contagemTempo").text(tempoInicial)
        inicializaCronometro();
        textArea.toggleClass("textarea")
        textArea.removeClass("borda-verde")
        textArea.removeClass("borda-vermelha")
    }

    function finalizaJogo() {
        textArea.attr("disabled", true);
        textArea.toggleClass("textarea");
        inserePlacar();
    }