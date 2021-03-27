$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    $('#my-btn').click(() => {
        alert(`El valor seleccionado es ${$('#my-select').val()}`)  //De esta manera podemos obtener en valor de la opcion elegida en nuestro select
    });
});