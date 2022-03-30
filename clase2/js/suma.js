/*
    pedir al usuario que ingrese un número
        a ese número, guardarlo en una variable

    pedir al usuario que ingrese otro número
        a ese otro número, guardarlo en otra variable

    realizar suma de las variables
        mostrar el resultado
*/
let numero1 = prompt('ingrese el primer número');
let numero2 = prompt('ingrese el segundo número');

let resultado = parseInt( numero1 ) + parseInt( numero2 );

document.write( resultado );