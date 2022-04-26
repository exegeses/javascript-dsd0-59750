//let enlace = document.getElementById('enlace');
let enlace = document.querySelector('#enlace');
//let verde = document.getElementsByClassName('verde');
let verde = document.querySelector('.verde');
let formulario = document.querySelector('#formulario');

enlace.addEventListener('click', function ( evento )
{
    console.log( evento );
    //evitar acción natural
    evento.preventDefault();
});

formulario.addEventListener('submit', function ( evento )
{
    console.log( evento );
    //evitamos envío del formulario
    evento.preventDefault();
    //acá generamos la lógica de validación
})
