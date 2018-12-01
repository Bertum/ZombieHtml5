function cargarJuego() {
    window.location.href = "game.html"
}

function volverAPrincipal() {
    $("#creditos").hide();
    $("#instrucciones").hide();
    $("#opciones").show();
}

function mostrarCreditos() {
    $("#opciones").hide();
    $("#creditos").show();
}

function mostrarInstrucciones() {
    $("#opciones").hide();
    $("#instrucciones").show();
}

$(document).ready(function () {
    $("#creditos").hide();
    $("#instrucciones").hide();
});