"use strict"
/**
 * Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
este formato dd/mm/aaa.
 */
{
    function calcularEdad(fechaNacimiento) {
        // Divide la cadena de fecha en día, mes y año
        let partesFecha = fechaNacimiento.split('/');
        let dia = parseInt(partesFecha[0]);
        let mes = parseInt(partesFecha[1]) - 1; // Restamos 1 al mes porque en JavaScript los meses van de 0 a 11
        let año = parseInt(partesFecha[2]);

        let fechaActual = new Date();
        let fechaNac = new Date(año, mes, dia);
      
        // Calcula la diferencia en años
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
      
        // Verifica si el cumpleaños ya ocurrió este año
        if (
          fechaNac.getMonth() < fechaActual.getMonth() ||
          (fechaNac.getMonth() == fechaActual.getMonth() && fechaNac.getDate() < fechaActual.getDate())
        ) {
          edad--;
        }
        return edad;
      }
      
      let fechaNacimiento = "23/10/1984";
      console.log("La edad es: " + calcularEdad(fechaNacimiento));
}