$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    $('#btn-nuke').click(() => {    //Seleccionamos por ID nuestro boton y mediante el evento click lanzamos un alert
        alert('Ya lanzaste el misil !!!');
    });
});