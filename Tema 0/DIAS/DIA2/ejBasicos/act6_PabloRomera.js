"use strict"
/**
 * Mostrar todos los números impares que hay
 * entre dos números introducidos por el usuario
 */
{
    let n = prompt ("Introduce un primer numero: ", 0);
    let mayor,menor;
    while(isNaN(n)){
        n = prompt ("Introduce un numero", 0);
    }

    let n2 = prompt ("Introduce un segundo numero: ", 0);
    while(isNaN(n2)){
        n2 = prompt ("Introduce un numero", 0);
    }

    if(n > n2){
        mayor=n;
        menor=n2;
    } else if(n == n2){
        console.log("Los dos numeros son iguales");
    }else{
        mayor=n2;
        menor=n;
    }


    for(let i = menor; i <mayor; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
    console.log(mayor);
}