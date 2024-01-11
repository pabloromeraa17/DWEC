"use strict"
{
    let nombre1 = prompt("Introduce el primer nombre");
    let nombre2 = prompt("Introduce el segundo nombre");
    let nombre3 = prompt("Introduce el tercer nombre");

    let miArray = new Array();
    miArray.push(nombre1,nombre2,nombre3);

    //localStorage.setItem("array", miArray);
    localStorage.setItem("array", JSON.stringify(miArray));
    let v = JSON.parse(localStorage.getItem("array"));
    console.log(v);
}