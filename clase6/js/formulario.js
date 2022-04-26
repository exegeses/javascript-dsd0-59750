let formulario = document.querySelector('#formulario');
let nombre = document.querySelector('input[name="nombre"]');
let email = document.querySelector('input[name="email"]');
let comentarios = document.querySelector('textarea[name="comentarios"]');

let txtNombre = document.querySelector('#txtNombre');
let txtEmail = document.querySelector('#txtEmail');
let txtComentarios = document.querySelector('#txtComentarios');

formulario.addEventListener('submit', function ( evento )
{
    //evitamos envío del form
    evento.preventDefault();
    //reseteamos emnsajes de validaci´´on
    resetMensajes();
    //flag de chequeo
    let flag = true;

    let datoNombre = nombre.value;
    if( datoNombre == null || datoNombre.length == 0 ){
        txtNombre.innerText = 'Complete el campo Nombre';
        flag = false;
    }

    let datoEmail = email.value;
    if( !validarEmail( datoEmail ) ){
        txtEmail.innerText = 'Complete el campo Email';
        flag = false;
    }

    let datoComentarios = comentarios.value;
    if( datoComentarios == null  ||  datoComentarios.length < 5 ){
        txtComentarios.innerText = 'Complete el campo Comentarios';
        flag = false;
    }

    if( flag ){
        //enviamos el form
        formulario.submit();
    }

});

function validarEmail (email) {
    let exp = /\S+@\S+\.\S+/;
    return exp.test(email);
}

function resetMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '';
    txtComentarios.innerText = '';
}
