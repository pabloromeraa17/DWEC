"use strict"
//Modifica el programa anterior: si los números no son un número o son menores o iguales a
//ceros, que los vuelva a pedir.
function f(){ 
    let n = prompt ("Introduce un primer numero: ", 0);
    let res ="";

    while(isNaN(n) || n <= 0){
        n = prompt ("Introduce un numero mayor que cero: ", 0);
    }

    let n2 = prompt ("Introduce un segundo numero: ", 0);

    while(isNaN(n2) || n2 <= 0){
        n2 = prompt ("Introduce un numero mayor que cero: ", 0);
    }
    
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