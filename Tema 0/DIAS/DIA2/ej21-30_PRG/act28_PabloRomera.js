"use strict"
/**
 * . En un vector de cadenas, indicar:
a. La cadena más corta.
b. La cadena más larga.
c. La cadena con más letras ‘a’.
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son
 */
{
   // La cadena más corta.
   function encontrarCadenaMasCorta(cadenas) {
    if (cadenas.length === 0) {
      return null; // Manejar el caso de un vector vacío
    }
    
    let cadenaMasCorta = cadenas[0];
    for (let i = 1; i < cadenas.length; i++) {
      if (cadenas[i].length < cadenaMasCorta.length) {
        cadenaMasCorta = cadenas[i];
      }
    }
    return cadenaMasCorta;
  }
  
  const cadenaMasCorta = encontrarCadenaMasCorta(cadenas);
  console.log("La cadena más corta es: " + cadenaMasCorta);

  //La cadena más larga.
  function encontrarCadenaMasLarga(cadenas) {
    if (cadenas.length === 0) {
      return null; // Manejar el caso de un vector vacío
    }
    
    let cadenaMasLarga = cadenas[0];
    for (let i = 1; i < cadenas.length; i++) {
      if (cadenas[i].length > cadenaMasLarga.length) {
        cadenaMasLarga = cadenas[i];
      }
    }
    return cadenaMasLarga;
  }
  
  const cadenaMasLarga = encontrarCadenaMasLarga(cadenas);
  console.log("La cadena más larga es: " + cadenaMasLarga);

  //La cadena con más letras ‘a’.
  

  //Cuántas cadenas hay que tengan la ‘b’ y cuáles son
  function contarCadenasConLetraB(cadenas) {
    const cadenasConB = cadenas.filter(cadena => cadena.includes('b'));
    return cadenasConB;
  }
  
  const cadenasConB = contarCadenasConLetraB(cadenas);
  console.log("Cadenas que contienen la letra 'b': " + cadenasConB.length);
  console.log("Cadenas con la letra 'b': " + cadenasConB.join(", "));
  
}