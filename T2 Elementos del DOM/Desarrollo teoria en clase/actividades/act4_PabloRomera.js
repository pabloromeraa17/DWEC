"use strict"
{
    let boton = document.createElement("button");
    boton.textContent = "Reaparecer Párrafos"

    let parrafo1 = document.createElement("p");
    parrafo1.textContent = "Párrafo 1";
    parrafo1.style.setProperty("width", "25%");
    parrafo1.style.setProperty("text-align", "center");
    parrafo1.style.setProperty("font-size", "30px");
    parrafo1.style.setProperty("background-color", "gold");

    let parrafo2 = document.createElement("p");
    parrafo2.textContent = "Párrafo 2";
    parrafo2.style.setProperty("width", "25%");
    parrafo2.style.setProperty("text-align", "center");
    parrafo2.style.setProperty("font-size", "30px");
    parrafo2.style.setProperty("background-color", "gold");

    let parrafo3 = document.createElement("p");
    parrafo3.textContent = "Párrafo 3";
    parrafo3.style.setProperty("width", "25%");
    parrafo3.style.setProperty("text-align", "center");
    parrafo3.style.setProperty("font-size", "30px");
    parrafo3.style.setProperty("background-color", "gold");

    document.body.append(boton, parrafo1, parrafo2, parrafo3);
    
    let parrafos = document.querySelectorAll("p");

    for(let elem of parrafos){
        elem.addEventListener("mouseleave", e=>{
            elem.style.setProperty("opacity", "0");
        });
    }

    boton.onclick = function(){
        for(let elem of parrafos){
            elem.style.opacity = "100"
        }
    }

    for(let elem of parrafos){
        elem.addEventListener("dblclick", e=>{
            document.body.removeChild(elem);
        });
    }

    // boton.onclick = function(){
    //     document.body.append(elem);
    // }

    // parrafos.addEventListener("dragleave", e=>{
    //     console.log("dragleave");//el elemento draggable empieza a salir cuanto sale el puntero del ratón
    // });
}