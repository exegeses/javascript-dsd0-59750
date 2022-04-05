let numero1 = prompt( 'Ingrese el primer numero');
let numero2 = prompt( 'Ingrese el segundo numero');

let convercion1 = parseInt(numero1);
let convercion2 = parseInt(numero2);


let suma = convercion1+convercion2;
console.log(suma);

document.write ("resultado: " + suma);
document.write("<br>");

if ( suma < 100 ) {
    document.write ( "el numero " + suma + " es menor a 100");
} else{
    document.write ("el numero "+ suma + " es mayor a 100");
}