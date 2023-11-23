"use strict"
{
    let lista = document.querySelector("ul");

    let random;
    let num;

    let miBoton1 = document.querySelector("#idBoton1");
    miBoton1.onclick = function(){
        random = Math.round(Math.random()* (100-1) + 1);
        num = document.createElement("li");
        num.append(random);
        lista.append(num);
        console.clear()
        console.log(lista);
    }

    let ultimoHijo;
    let miBoton2 = document.querySelector("#idBoton2");
    miBoton2.onclick = function(){
        ultimoHijo = lista.lastChild;
        console.clear();
        try{
            lista.removeChild(ultimoHijo);
        }catch{
            console.log("Esta vacio");
        }
        console.log(lista);
    }
    // let miDiv4 = document.createElement("button");
    // miDiv4.textContent="Hola";
    // document.body.append(miDiv4);
}