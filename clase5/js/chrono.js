// resolución Mauro Olguín

let txt = document.getElementById('txt');
let horas = 0;
let minutos = 0;
let segundos = 0;

// declaramos funcion de control
function cronometro()
{

    //obtenemos las horas
    if (horas == 0){
        horas = '00';
    }

    //obtenemos las minutos
    if (minutos == 0){
        minutos = '00';
    }

    //obtenemos las segundos
    segundos++;
    if (segundos < 10){
        segundos = '0' + segundos;
    }
    if (segundos > 59){
        segundos = 0;
        minutos++
        if (minutos < 10){
            minutos = '0' + minutos;
        }
    }
    if (minutos > 59){
        minutos = 0;
        horas++
        if (horas < 10){
            horas = '0' + horas;
        }
    }


    //mostrar el reloj con formato 20:00:00
    txt.innerText = horas + ':' + minutos + ':' + segundos;
}

//invocamos funcion reloj
cronometro();

//actualizamos el reloj
setInterval( cronometro, 1000);