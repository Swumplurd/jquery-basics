$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    $('#check').click(() => {
        if ($('#my-check').is(':checked')) {    //Preguntamos si el checkbox con el id esta checkeado
            alert('Lo palomeaste')      //Si lo esta lanzamos este alert
        } else {
            alert('No lo palomeaste')   //Si no lo esta lanzamos este alert
        }
    });
});