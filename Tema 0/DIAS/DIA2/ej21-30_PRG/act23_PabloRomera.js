"use strict"
/**
 * Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true
 */
{
    function palindromo(cadena){
        let copia = cadena;
        cadena = cadena.toUpperCase();
        let separarCadena = cadena.split("");
        separarCadena.reverse();
        let revertirCad = separarCadena.join("");
        console.log("La cadena introducida es "+copia);
        if(cadena == revertirCad){
            console.log("true");
        } else{
            console.log("false");
        }
    }
    palindromo("salaS");
}