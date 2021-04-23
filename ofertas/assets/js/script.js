//HORA E DATA ATUAL
var data = new Date();

var dia = data.getDate();
var mes = (data.getMonth() < 9 ? "0" : "") + (data.getMonth() + 1);
var ano = data.getFullYear();
var dia_atual = dia + "/" + mes + "/" + ano;

$(document).ready(function() {
    $(".data").append(dia_atual);
});