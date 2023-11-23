"use strict"
/**
 * Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
 */
{
    function ordenados (tabla){
        let copiaElementos = [...tabla];
        let ascendente = (tabla.sort( (a,b) => a-b )); //De forma ascendente
        let descendiente = (copiaElementos.sort( (a,b) => b-a )); //De forma descendente
        let tablasOrdenadas = {
            asc: ascendente,
            desc: descendiente 
        }
        return tablasOrdenadas;
    };
    let array = [7,5,7,8,6];
    console.log(ordenados(array));
}