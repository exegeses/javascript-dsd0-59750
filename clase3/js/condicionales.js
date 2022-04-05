let numero = prompt ( 'Ingresá tu número fav' );

let esmenor = ( numero < 100 );
let igual = ( numero == 100 );

if ( esmenor ) {
    document.write ( ' Es  menor amigo, intenta con otro. ' );
} else
    {
        if
        (igual)  {
            document.write ( ' ¡Vaya! es igual a 100. ' );
        }
        else
            document.write ( ' El número ingresado es mayor a 100. ' );
    }