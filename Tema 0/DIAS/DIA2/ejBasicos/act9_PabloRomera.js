"use strict"
/**
 * Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado
 */
{
    let n = parseInt(prompt("Introduce un primer numero"));
    while(isNaN(n)){
        n = prompt("Introduce un numero");
    }

    let n2 = parseInt(prompt("Introduce un segundo numero"));
    while(isNaN(n2)){
        n2 = prompt("Introduce un numero");
    }

    console.log(`Suma = ${n+n2}`);
    console.log(`Resta = ${n-n2}`);
    console.log(`Multiplicación = ${n*n2}`);
    console.log(`División = ${n/n2}`);
}