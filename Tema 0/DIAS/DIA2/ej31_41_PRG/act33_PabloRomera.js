"use strict"
/**
 * Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿
 */
{
    function nombreValido(cadena){
        const reg = new RegExp("^[A-Z a-z]+$","i");
        console.log(reg.test(cadena));
    }
    nombreValido("Pablo Romera");
}