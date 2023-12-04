"use strict"
/**
 * 6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia. 
 */
{
    let boton1 = document.createElement("button");
    boton1.textContent = "Comenzar saludos";
    boton1.setAttribute("id", "idBoton1");

    let boton2 = document.createElement("button");
    boton2.textContent = "Parar saludos";
    boton2.setAttribute("id", "idBoton2");

    document.body.append(boton1, boton2);
    let intervalo;
    boton1.onclick = function mostrarMensaje(){
        intervalo = setInterval(() => {
            alert("Hola");
        }, 5000) 
    }
    //w3Schools
    boton2.onclick = function pararSaludos(){
        clearInterval(intervalo);
    }
}