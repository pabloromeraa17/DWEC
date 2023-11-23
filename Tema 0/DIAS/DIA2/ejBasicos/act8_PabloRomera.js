"use strict"
/**
 * Mostrar la tabla de multiplicar de
 *  un número introducido por pantalla
 */
{
    let n = prompt("Introduce un numero para mostrar tabla de multiplicar");
    while (isNaN(n)){
        n = prompt("Introduce un numero por favor");
    }
    console.log("Tabla del "+n);
    for(let i = 0; i<=10; i++){
        console.log(i+"x"+n+" = "+(i*n));
    }
}