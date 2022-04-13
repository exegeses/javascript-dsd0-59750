//ubicamos elemento/s dentro del DOM
let caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

//* propuesta Lucio
function mostrarOcultar(){
    if ( caja.style.display == "block" ){ // si se ve
        caja.style.display = "none";  // que no se vea
    } else { //si no
        caja.style.display = "block"; // que se vea
    }
}

//* prpuesta Adri
function ocultarmostrar() {
    let estado = caja.style.display; // averiguar estado inicial

    switch ( estado ) {

        case '':
            ocultar();
            break;

        case 'block':
            ocultar();
            break;

        case 'none':
            mostrar();
            break;
    }
}