"use strict"
/**
 * Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón.
 */
{
    let parrafo1 = document.createElement("p");
    parrafo1.textContent = "Párrafo 1";
    parrafo1.style.setProperty("width", "25%");
    parrafo1.style.setProperty("text-align", "center");
    parrafo1.style.setProperty("font-size", "30px");
    parrafo1.style.setProperty("background-color", "green");


    document.body.append(parrafo1);
    //W3schools
    window.onmousemove = function(evento){
        let coordX = evento.clientX;
        let coordY = evento.clientY;
        let coordenadas = "X: " + coordX + " Y: " + coordY;
        parrafo1.textContent = coordenadas;
    }
}