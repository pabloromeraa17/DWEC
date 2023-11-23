"use strict"
/**
 * Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
 */
{
    function expRegulares(cadena){
        const regExp = /^[md].*[ao]$/ //i;
        console.log(regExp.test(cadena));
    }
    expRegulares("manzana");
    expRegulares("dorado");
    expRegulares("pera");
}
console.log("");
{
    function funcCadena(cadena){
        if((cadena.startsWith("m") || cadena.startsWith("d")) && (cadena.endsWith("a") || cadena.endsWith("o"))){
            console.log(true);
        } else {
            console.log(false);
        }
    }
    funcCadena("manzana");
    funcCadena("dorado");
    funcCadena("pera");
}