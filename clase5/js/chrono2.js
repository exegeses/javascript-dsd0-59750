//ubicamos elementos dentro del DOM
let txt = document.getElementById('txt');

//funcion cronometro
let segundos = 0;
let minutos = 0;
let horas = 0;

if (horas < 10){
    horas = '0' + horas;
}



function cronometraje()
{
    //imprimimos con inner, mostrar el reloj con formato 00:00:00
    segundos ++;
    if (segundos < 10){
        segundos = '0' + segundos;
    }
    if (segundos > 59){
        minutos++;
        segundos='00'
        if (minutos < 10){
            minutos = '0' + minutos;
        }
    };



     if (minutos>59){
         horas++;
         minutos='00';
     }
    if (horas>24){horas='00';}


    txt.innerText = horas + ":" + minutos +":" + segundos;
}

//invocamos función reloj
cronometraje();

setInterval(cronometraje, 1000)