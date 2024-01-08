"use strict"
{
    console.log("Ejemplo1");
    localStorage.setItem("nombre", "Jacinta");
    console.log(localStorage.getItem("nombre"));
    localStorage.setItem("nombre", "Leticia");
    console.log(localStorage.getItem("nombre"));

    console.log("Ejemplo2");
    localStorage.setItem("apellidos", "de Borbón");

    console.log("Ejemplo3");
    // localStorage.removeItem("apellidos");
    localStorage.clear();

    
}