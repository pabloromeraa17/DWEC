"use strict"
/**
 * . Indica si un NIF es válido o no.
 */
{
    let nif = prompt("Introduce tu NIF");
    const formato = new RegExp("[0-9]{8}[A-Z]{1}");
    if (formato.test(nif) == true){
        console.log("El NIF es valido");
    }else if(formato.test(nif) == false){
        console.log("El NIF no es valido");
    }
}