"use strict"
/**
 * Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 */
{
    function nPrimo(){
        let n = parseInt(prompt("Introduce un numero para comprobar si es primo"));
        let suma = n+1;
        let res=0;
        for(let i = 0; i<=n;i++){
            if(n%i == 0){
                res += i;
            }
        }
        if (suma != res){
            console.log("El numero no es primo");
        } else if(suma == res){
            console.log("El numero es primo");
        }
    }
    console.log(nPrimo());
}