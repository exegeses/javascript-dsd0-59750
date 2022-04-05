//ubicamos elemento/s dentro del DOM
let txt = document.getElementById('txt');

//mostrar la fecha
// con formato 05/04/2022

//creamos un objeto de fecha y lo gurdamos en una variable
let fecha = new Date();

//obtenemos el número del día del mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}
//obtenemos número del mes  enero -> 0
let mes = fecha.getMonth()+1;
if( mes < 10 ){
    mes = '0'+ mes;
}
//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos dato dentro del span
txt.innerText = diaMes + '/' + mes + '/' + anio;

