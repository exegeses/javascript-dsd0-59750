//ubicar elemento dentro del DOM
let sol = document.getElementById('sol');

//variable auxiliar
let grados = 0;

//declaramos función de control
function rotar()
{
    //grados = grados + 1;
    grados++;
    sol.style.transform = 'rotate( '+ grados +'deg )';
}

rotar();
setInterval( rotar, 100 );
