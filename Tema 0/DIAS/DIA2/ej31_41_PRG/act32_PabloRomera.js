"use strict"
/**
 * Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
 */
{
    function numVocalesConsonantes (cadena){
        let junto = cadena.replace(" ", "");
        console.log(junto);
        let separarCadena = junto.split("");

        let vocales = [];
        let contVocales = 0;
        let consonantes = [];
        let contConsonantes = 0;
        
        for(let i = 0; i < separarCadena.length;i++){
            if(separarCadena[i] == "a" || separarCadena[i] == "e" || separarCadena[i] == "i" || separarCadena[i] == "o" || separarCadena[i] == "u" ){
                vocales[contVocales] += separarCadena[i];
                contVocales ++;
            }
            else{
                consonantes[contConsonantes] += separarCadena[i];
                contConsonantes ++;
            };
        };
        console.log("El numero de vocales es "+vocales.length);
        console.log("El numero de consonantes es "+consonantes.length);
    }
    numVocalesConsonantes("Hola mundo")
}