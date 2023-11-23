"use strict"
/**
 * Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) 
 */
{
    function calcularAñosPasados(fecha) {
        fecha = new Date(fecha);
        let fechaActual = new Date();
      
        let añosPasados = fechaActual.getFullYear() - fecha.getFullYear();

        if (
          fecha.getMonth() > fechaActual.getMonth() ||
          (fecha.getMonth() === fechaActual.getMonth() && fecha.getDate() > fechaActual.getDate())
        ) {
          añosPasados--;
        }
      
        return añosPasados;
      }
      
      console.log(calcularAñosPasados("01/12/2010")); // Resultado depende de la fecha actual     
}