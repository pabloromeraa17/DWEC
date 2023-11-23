"use strict"
/**
 * Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres
 */
{
    function emailValido(cadena){
        const reg = new RegExp (/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/);
        console.log(reg.test(cadena));
    }
    emailValido("pabloromeraa_17@gmail.es");
}