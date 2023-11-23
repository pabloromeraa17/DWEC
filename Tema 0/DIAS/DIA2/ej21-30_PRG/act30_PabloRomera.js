"use strict"
/**
 * . Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento
 */
{
    function calcularEdad(fechaNacimiento) {
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const fechaActual = new Date();
      
        const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
      
        return edad;
      }
      
      // Ejemplo de uso
      const fechaNacimiento = "1990-01-15"; // Debes proporcionar la fecha de nacimiento en formato "YYYY-MM-DD"
      const edad = calcularEdad(fechaNacimiento);
      console.log("La edad es: " + edad + " años");
      
}