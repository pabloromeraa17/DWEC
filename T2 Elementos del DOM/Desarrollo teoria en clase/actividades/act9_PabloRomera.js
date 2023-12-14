"use strict"
/**
 * 9. Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía.
    Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la
    papelera vacía a una papelera llena
 */
{
    let bola = document.createElement("div");
    bola.style.backgroundImage = "url(/img/bola-papel-arrugado_488220-42641.avif)";
    bola.style.width = "100px";
    bola.style.height = "100px";
    bola.style.backgroundRepeat= "no-repeat";
    bola.style.backgroundSize="100px";
    bola.draggable = true;
    console.log(bola);

    let contenedor = document.createElement("div");
    contenedor.style.backgroundImage = "url(/img/papeleraVacia.png)";
    contenedor.style.width = "200px"; 
    contenedor.style.height = "200px"; 
    contenedor.style.backgroundRepeat= "no-repeat";
    contenedor.style.backgroundSize="200px";
    contenedor.draggable = false;

    contenedor.addEventListener("dragleave", e=>{
        e.preventDefault();
        contenedor.appendChild(bola);
        contenedor.style.backgroundImage = "url(/img/papeleraLlena.png)";
        bola.remove();
        console.log("dragleave");//el elemento draggable empieza a salir cuanto sale el puntero del ratón
    });

    document.body.append(bola, contenedor);
}