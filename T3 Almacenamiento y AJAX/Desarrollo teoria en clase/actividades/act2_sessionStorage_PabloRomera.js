"use strict"
/**
 * Como la act 1 pero con sessionStorage
 */
{
    let numVisitas = parseInt(sessionStorage.getItem("numeroVisitas")) || 0;
    numVisitas++;
    sessionStorage.setItem("numeroVisitas", numVisitas);
    let info = sessionStorage.getItem("numeroVisitas");
    let texto = document.createElement("p");
    texto.textContent = info;
    document.body.append(texto);
    
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar sessionStorage";
    botonEliminar.onclick = function(){
        sessionStorage.removeItem("numeroVisitas");
        location.reload();
    }
    document.body.append(botonEliminar);
}