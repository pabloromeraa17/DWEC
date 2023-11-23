"use strict"
/**
 * Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
hasta introducir un número negativo y entonces mostrar el resultado
 */
{
let suma = 0;
let producto = 1;
let contador = 0;

let numero = parseInt(prompt("Introduce un número (introduce un número negativo para finalizar):"));
    while (numero >= 0) {
        suma += numero;
        producto *= numero;
        contador++;
        numero = parseInt(prompt("Introduce un número (introduce un número negativo para finalizar):"));
    }
    let media = suma / contador;
    console.log("Suma: "+suma);
    console.log("Producto: "+producto);
    console.log("Media: "+media);
} 