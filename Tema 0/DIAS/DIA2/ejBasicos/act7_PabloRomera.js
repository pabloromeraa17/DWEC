"use strict"
/**
 * Mostrar todos los números divisores de un
 * número introducido por el usuario.
 */
{
    let n = prompt("Introduce un numero");
    while(isNaN(n)){
        n = prompt("Introduce un numero por favor");
    }

    console.log("Divisores:");
    for(let i = 0; i<=n; i++){
        if(n%i == 0){
            console.log(i);
        }
    }
}