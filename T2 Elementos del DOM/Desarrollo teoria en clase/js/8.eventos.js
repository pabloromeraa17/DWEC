"use-strict"

{
    // CAPTURAR EVENTOS MEDIANTE PROPIEDADES
    let miBoton4 = document.querySelector("#idBoton4");
    miBoton4.onclick = function(){
        alert("Saludar botón 4");
    }
    /*miBoton4.onclick = function(){
        alert("Saludar botón 4.1");
    }*/

    const boton5 = document.querySelector("#idBoton5");
    function saludar5(){
        alert("Saludar botón 5");
    }
    function saludar5punto1(){
        alert("Saludar botón 5.1");
    }

    boton5.addEventListener("click", saludar5);   
    boton5.addEventListener("click", saludar5punto1); 

    boton5.removeEventListener("click", saludar5);

    document.addEventListener("DOMContentLoaded", function(){
        console.log("Ya está cargado el HTML solo");
    });

    window.addEventListener("load", function(){
        console.log("Ya está cargado el HTML y CSS");
    });
}

function saludar3(){
    alert("Saludar botón 3");
}