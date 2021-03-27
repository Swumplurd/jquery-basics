$(document).ready(() => {           //Estructura basica para usar jQuery; el evento ready ejecutara su funcion anonima cuando el documento este completamente cargado
    $('#btn-nuke').click(() => {    //Seleccionamos por ID nuestro boton y mediante el evento click lanzamos un alert
        $('#my-div').text('Corre !!, corre por tu vida !!');    //Colocamos el texto pasado por parametro al div
        /* 
            El metodo .text() funciona de dos maneras diferentes
            si le pasamos como parametrouna cadena pasara ese texto
            al elemento que estamos seleccionando con jquery, pero si
            no le pasamos parametros nos taera el texto que contenga
            dicho elemento
        */
       let text = $('#my-div').text();  //Obtenemos el texto que contiene el div
       console.log(text);
    });
});