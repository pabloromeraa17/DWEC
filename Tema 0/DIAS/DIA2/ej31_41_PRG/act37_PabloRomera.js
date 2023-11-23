"use strict"
/**
 * . Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares, pe.
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
 */
{
    function paresImpares(tabla){
        let pares = [];
        let impares = [];

        let contadorpar = 0;
        let contadorimpar = 0;

        for(let i = 0; i<tabla.length;i++){
            if(tabla[i]%2 == 0){
                pares[contadorpar] = tabla[i];
                contadorpar++;
            }
            if(tabla[i]%2 != 0){
                impares[contadorimpar] = tabla[i];
                contadorimpar++;
            }
        };
        let objeto = {
            Pares: pares,
            Impares: impares
        };
        return objeto;
    }
    let array = [1,2,3,4,5,6,7,8,9,0];
    console.log(paresImpares(array));
}