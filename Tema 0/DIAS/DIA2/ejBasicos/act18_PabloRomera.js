"use strict"
/**
 * . Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".
 */
{
    function recorte(cadena,numero){
        let recortado = cadena.substring(0,numero);
        console.log(recortado);
    }
    recorte("Hola mundo",4);
}
