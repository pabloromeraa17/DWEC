"use strict"
/**
 * 8. Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
fondo a un color aleatorio.
 */
{
    let r1,r2,r3;
    window.addEventListener("dblclick", function(){
        r1 = Math.round(Math.random()* (255-0) + 0);
        r2 = Math.round(Math.random()* (255-0) + 0);
        r3 = Math.round(Math.random()* (255-0) + 0);

        document.body.style.setProperty("background-color", "rgb("+r1+","+r2+","+r3+")");
    });
}