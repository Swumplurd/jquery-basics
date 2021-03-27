$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    $('#my-form').val('Valor robable')  //Con el metodo .val() podemos ingresar un valor que pasemos por parametro.
    $('#btn-steal').click(() => {    //Seleccionamos por ID nuestro boton y mediante el evento click lanzamos un alert
        alert(`Me robe esto: ${$('#my-form').val()}`)   //Tambien con .val() podemos obtener el valor del input que contenga el Id seleccionado
    });
});