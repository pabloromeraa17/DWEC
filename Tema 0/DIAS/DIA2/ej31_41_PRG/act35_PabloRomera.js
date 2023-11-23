"use strict"
/**
 * Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
 */
{
    function alCuadrado(tabla){
        for(let i = 0; i<tabla.length;i++){
            tabla[i] = Math.pow(tabla[i],2);
        };
        console.log(tabla.toString())
    };
    let array = [1,4,5];
    alCuadrado(array);
}