"use strict"
/**
 * Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH"
 */
{
    function revertir(cadena){
        // let cad = cadena;
        // let num = cad.length;
        // for (let i = cad.length; i>=0; i--){
        //     console.log(cad.charAt(num));
        //     num--;
        // }
        let separarCadena = cadena.split("");
        separarCadena.reverse();
        let revertirCad = separarCadena.join("");
        console.log(revertirCad);
    }
    console.log(revertir("Hola Mundo"));
}