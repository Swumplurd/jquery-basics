$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    $('#my-btn').click(() => {
        if ($('#rad-si').is(':checked')) {          //Comprobamos si el radio si esta activo
            alert('El radio si esta activo')        //Si esta acrivo si lanzamos este alert
        } else if ($('#rad-no').is(':checked')) {   //Comprobamos si el radio no esta activo
            alert('El radio no esta activo')        //Si esta activo no lanzamos este alert
        } else {
            alert('Ningun radio esta activo')       //Si ninguno esta activo lanzamos este alert
        }
    });
});