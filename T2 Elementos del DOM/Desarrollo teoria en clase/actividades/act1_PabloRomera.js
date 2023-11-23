"use strict"
{
    let lista = document.querySelector("ul");

    let random;
    let li;

    let miBoton1 = document.querySelector("#idBoton1");
    miBoton1.onclick = function(){
        random = Math.round(Math.random()* (100-1) + 1);
        li = document.createElement("li");
        li.append(random);
        lista.append(li);
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