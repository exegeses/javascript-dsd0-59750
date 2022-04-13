//ubicamos elemento/s dentro del DOM
let txt = document.getElementById('txt');

//declaramos función de control
function reloj()
{
    //creamos un objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();
    if ( horas < 10 ){
        horas = '0' + horas;
    }
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if ( minutos < 10 ){
        minutos = '0' + minutos;
    }
    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    if ( segundos < 10 ){
        segundos = '0' + segundos;
    }

    //mostrar el reloj con formato:
    // 20:14:36
    txt.innerText = horas + ':' + minutos + ':' + segundos;
}
//invocamos función reloj
reloj();

//actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );