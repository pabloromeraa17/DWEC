"use strict"
/**
 *  Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60] ✔
 */
{
    function altoBajo(array){
        let ordenado = array.sort();
        let array2 = [];
        array2[0]=ordenado[ordenado.length-1];
        array2[1]=ordenado[0];
        return "["+array2.toString()+"]";
    }
    let tabla = [1,5,34,99,-2];
    console.log(altoBajo(tabla));
}