//propuest de  Nico Scialpini
let txt = document.getElementById("txt");
 segundos = 0;
 minutos = 0;
 horas = 0;
 flag = false;
/**
 * inicia el cronómetro
 * */
function refreshInterval()
{
    intervalID = setInterval(Cronometro, 1000 );
}

function Cronometro()
{


    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (min >= 60) {
            min = 0;
            horas++;
        }
    }
    txt.innerText = horas + ":" + minutos + ":" + segundos;
}
function start(){
    if( flag == false ){
        refreshInterval();
    }
    flag = true;
}

function reset(){
    segundos = 0;
    minutos = 0;
    horas = 0;
    txt.innerText = horas + ":" + minutos + ":" + segundos;
}
function stop(){
    clearInterval(intervalID);
    flag = false;
}

txt.innerText = horas + ":" + minutos + ":" + segundos;