"use strict"
{
    console.log("1.Selecciono todas las listas no ordenadas con getElementByTagName(\"ul\")");
    let listas = document.getElementsByTagName("ul"); //HTMLCollection ('array' que no tiene ni map, ni forEach ni reduce)
    console.log(listas);
    for (let element of listas){
        console.log(element);
        console.log(element.textContent);
    }

    console.log("\n\t2.Selecciono todas las listas no ordenadas con getElementByClassName()");
    listas = document.getElementsByClassName("cListaVehiculos");
    console.log(listas);
    for (let element of listas){
        console.log(element);
        console.log(element.textContent);
    }

    console.log("\n\t3.Selecciono todas las listas no ordenadas con getElementByName()");
    listas = document.getElementsByName("nLista");
    console.log(listas);
    for (let element of listas){
        console.log(element);
        console.log(element.textContent);
    }

    console.log("\n\t4.Selecciono una lista con getElementById()");
    let elementoById = document.getElementById("idCiclomotores");
    console.log(elementoById);
    console.log(elementoById.textContent);

    console.log("\n\t5.Selecciono una lista con querySelector()");
    let listaCoches = document.querySelector("#idCoches"); // # --> es un id
    console.log(listaCoches);
    console.log(listaCoches.textContent);

    console.log("\n\t6.Selecciono una lista con querySelector()");
    let listaPersonajes = document.querySelector(".cListaPersonajes"); // . --> es un class
    console.log(listaPersonajes);
    console.log(listaPersonajes.textContent);

    console.log("\n\t7.Selecciono un parrafo con querySelector()");
    let primerParrafo = document.querySelector("p"); //Selecciono el 1º parrafo que se encuentra
    console.log(primerParrafo);

    console.log("\n\t8.Selecciono todas las listas con querySelectorAll()");
    listas = document.querySelectorAll("ul"); //NodeList
    listas.forEach(element => console.log(element));
    for(let i = 0; i<listas.length;i++){
        console.log(listas[i]);
        console.log(listas[i].textContent);
    }

    console.log("\n\t9.Selecciono todas las listas con querySelectorAll()");
    listas = document.querySelectorAll('[name = "nLista"]'); // Para buscar por el name 
    listas.forEach(element => console.log(element));

    console.log("\n\t10.Selecciono todas las listas con querySelectorAll()");
    listas = document.querySelectorAll(".cListaVehiculos");
    listas.forEach(element => console.log(element));

    console.log("\n\t11.Selecciono todas las listas con querySelectorAll()");
    let cabeceras = document.querySelectorAll("h2");
    cabeceras.forEach(element => console.log(element));
}