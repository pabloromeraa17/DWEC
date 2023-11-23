"use strict"
/**
 * . Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */
{
    function obtenerNumeroAleatorioEntre501y600() {
        let numeroAleatorio = Math.random()*100+501; //100 de diferencia
        // Ajusta el número al rango entre 501 y 600
        let numero = Math.floor(numeroAleatorio);
        return numero;
      }
      
      // Ejemplo de uso:
      console.log("Número aleatorio entre 501 y 600: " + obtenerNumeroAleatorioEntre501y600());
      
}