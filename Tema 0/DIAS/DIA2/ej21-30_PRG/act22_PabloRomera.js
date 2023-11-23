"use strict"
/**
 * . Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
{
    function contarRepetidos(cad, index){
        let aArray = cad.split(" ");
        let count=0;
        for(let i = 0; i <aArray.length;i++){
            if (aArray[i] == (index)){
                count++;
            }
        }
        console.log(count);
    }
    contarRepetidos("hola mundo adios mundo mundo cruel","mundo");
}