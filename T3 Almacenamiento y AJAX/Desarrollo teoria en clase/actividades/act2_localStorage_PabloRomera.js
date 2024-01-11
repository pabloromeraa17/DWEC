"use strict"
/**
 * Como la act 1 pero con localStorage
 */
{
    let numVisitas = parseInt(localStorage.getItem("numeroVisitas")) || 0;
    numVisitas++;
    localStorage.setItem("numeroVisitas", numVisitas);
    let info = localStorage.getItem("numeroVisitas");
    let texto = document.createElement("p");
    texto.textContent = info;
    document.body.append(texto);
    
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar localStorage";
    botonEliminar.onclick = function(){
        localStorage.removeItem("numeroVisitas");
        location.reload();
    }
    document.body.append(botonEliminar);
}