"use strict"
/**
 * . Programa una función que dada una String te devuelva un Array de textos separados por
cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
 */
{
    function separarTextoPorCaracter(texto, caracter) {
        let arrayDeTexto = texto.split(caracter);
        return arrayDeTexto;
      }
      
      let texto = 'hola que tal';
      let caracter = ' ';
      let resultado = separarTextoPorCaracter(texto, caracter);
      console.log(resultado); //['hola', 'que', 'tal']
}