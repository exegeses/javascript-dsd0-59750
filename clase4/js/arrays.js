/*
let marca1 = 'Hermes';
let marca2 = 'Tommy';
let marca3 = 'Armani';
let marca4 = 'Zara';
let marca5 = 'Uniqlo';
*/
let marcas = [ 'Hermes', 'Tommy', 'Armani', 'Zara', 'Uniqlo' ];
console.log(marcas);
document.write( marcas[3] );

let txt = document.getElementById('txt');
//creamos un abjeto de fecha
let fecha = new Date();
//obtenemos el número del día de la semana
let diaSemana = fecha.getDay(); // 0=Domingo, al 6=Sábado
let diasDelaSemana = [
                        'Domingo', 'Lunes',
                        'Martes', 'Miécoles',
                        'Jueves', 'Viernes',
                        'Sábado'
                    ];
txt.innerText = diasDelaSemana[ diaSemana ];

