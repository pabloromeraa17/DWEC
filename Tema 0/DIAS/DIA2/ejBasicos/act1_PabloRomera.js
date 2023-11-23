"use strict"
// Dados dos números indicar cuál es mayor, menor o si son iguales.
function f(){ 
    let n = prompt ("Introduce un numero: ", 0);
    let n2 = prompt ("Introduce un numero: ", 0);
    let res ="";
    if(n==n2){
        res = "Numeros iguales";
    } else if(n>n2){
        res= "El primer numero es mayor";
    } else {
        res = "El segundo numero es mayor";
    }
    return res;
}
console.log(f());