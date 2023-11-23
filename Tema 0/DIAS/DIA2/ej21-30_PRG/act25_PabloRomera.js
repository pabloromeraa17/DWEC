"use strict"
/**
 * Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */
{
    function esCapicua(num){
        let copia = String(num);
        console.log("El numero es "+copia);
        
        let separarCadena = copia.split("");
        separarCadena.reverse();
        let revertirCad = separarCadena.join("");

        if(copia == revertirCad){
            console.log("Son iguales");
        } else{
            console.log("No son iguales");
        }
    }
    esCapicua(2002);
}