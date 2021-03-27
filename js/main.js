$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    eventoClick();
    propText();
    propVal();
    selects();
    checks();
    radios()
});

function eventoClick() {
    $('#event-click').click(() => {
        alert('Este es el evento click')
    });
}

function propText() {
    $('#btn-txt').click(() => {
        $('#my-div').text('Colocaste un Texto con el boton, ahora ve la consola');
        console.log(`Obtubiste el texto: ${$('#my-div').text()}`);
    });
}

function propVal() {
    $('#my-form').val('Valor robable') 
    $('#btn-steal').click(() => {
        alert(`Me robe esto: ${$('#my-form').val()}`)
    });
}

function selects() {
    $('#my-btn').click(() => {
        alert(`El valor seleccionado es ${$('#my-select').val()}`)
    });
}

function checks() {
    $('#check').click(() => {
        if ($('#my-check').is(':checked')) {
            alert('Lo palomeaste')
        } else {
            alert('No lo palomeaste')
        }
    });
}

function radios() {
    $('#my-button').click(() => {
        if ($('#rad-si').is(':checked')) {
            alert('El radio si esta activo')
        } else if ($('#rad-no').is(':checked')) {
            alert('El radio no esta activo')
        } else {
            alert('Ningun radio esta activo')
        }
    });
}