let txtCalc = document.getElementById('txtCalc');

resultado = 0;
operacion = '';

function sumar()
{
    //obtener el valor en caja de resultado
    resultado = parseInt(txtCalc.value);
    //establecer operación de suma
    operacion = 'suma';
    console.log( operacion );
}
function calcular( operacion )
{
    //obtener el valor en caja de resultado
    let valor = parseInt(txtCalc.value);

    if( operacion == 'suma' ){
        txtCalc.value = resultado + valor;
        console.log('llega');
    }
}