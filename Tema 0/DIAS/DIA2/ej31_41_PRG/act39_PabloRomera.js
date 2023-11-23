"use strict"
/**
 *  Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]
 */
{
    function eliminarDuplicados(tabla){
        let guardados = []
        let contador = 0;
        for(let i = 0; i <tabla.length; i++){
            if(guardados.includes(tabla[i])){
                continue;
            } else {
                guardados[contador]=tabla[i];
                contador++;
            };
        }
        return guardados;
    }
    let array = ["x",10,"x",2,"10",10, true,true];
    console.log(eliminarDuplicados(array));
}
