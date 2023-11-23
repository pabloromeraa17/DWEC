"use strict"
/**
 * Programa una función que determine si un número es par o impar, pe. miFuncion(29)
   devolverá Impar.
 */
{
    function parImpar(numero){
        if(numero%2 == 0){
            console.log("El numero es par");
        }else{
            console.log("El numero es impar");
        }
    }
    console.log(parImpar(10));
}