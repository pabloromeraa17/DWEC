"use strict"
/**
 * Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
    miFuncion(0,"C") devolverá 32°F
 */
{
    function convertir(num, tipo){
        if(tipo == "C"){
            console.log("La temperatura en Fahrenheit es de: "+(num*(9/5)+32)+"ºF");
        }else if (tipo == "F"){
            console.log("La temperatura en Fahrenheit es de: "+((num-32)*5/9)+"ºC");
        }
    }
    console.log(convertir(0,"C"));
}