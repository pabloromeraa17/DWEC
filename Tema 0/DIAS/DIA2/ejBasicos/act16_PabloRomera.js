"use strict"
/**
 * . Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A
 */
{
    function dienteSierra (caracter,num){
        let cadena ="";
        for(let i = num; i>0; i--){
            cadena += caracter.repeat(i)+"\n";
        }
        console.log(cadena);
    }
    console.log(dienteSierra("A",5));
}