/* Pedir a usuario que ingrese un número y luego se guardará en una variable.
Seguido indicará si es menor o mayor a 100 */

let numero1 = prompt ('ingrese el numero')

if (numero1 < 100) {
    document.write( "El número " + numero1 + " es menor a 100")
}
else {
    document.write( "El número " + numero1 + " es mayor a 100")
}

