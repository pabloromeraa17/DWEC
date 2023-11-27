"use strict"
{
    let miDiv = document.querySelector("div");
    let numRandom, label, caja, salto;

    for (let i=0; i <= 100; i++){
        numRandom = Math.round(Math.random()* (200-100) + 100);
        label = document.createElement("label");
        label.textContent = i;
        caja = document.createElement("input");
        caja.setAttribute("type", "checkbox");
        caja.setAttribute("style", "margin: 10px");
        caja.setAttribute("value", numRandom);
        salto = document.createElement("br");
        miDiv.append(label);
        miDiv.append(caja);
        miDiv.append(salto);
    }
    console.log(miDiv);


    let cajas = document.querySelectorAll("input");
    let miBoton1 = document.querySelector("#idBoton1");
    miBoton1.onclick = function(){
        for(let elem of cajas){
            elem.setAttribute("checked", "");
            elem.checked = true;
        }
        console.clear();
        console.log(miDiv);
    }

    let miBoton2 = document.querySelector("#idBoton2");
    miBoton2.onclick = function(){
        for(let elem of cajas){
            elem.checked = false;
            elem.removeAttribute("checked");
        }
        console.clear();
        console.log(miDiv);
    }
    
    let miBoton3 = document.querySelector("#idBoton3");
    miBoton3.onclick = function(){
        for (let elem of cajas){
            if (elem.value%2 == 0){
                elem.style.setProperty("width", "100px");
                elem.style.setProperty("height", "100px");
            }
        }
    }

    let miBoton4 = document.querySelector("#idBoton4");
    miBoton4.onclick = function(){
        for (let elem of cajas){
            elem.style.removeProperty("width");
            elem.style.removeProperty("height");
        }
    }

    for(let elem of cajas){
        elem.addEventListener("change", function(e){
            if(elem.checked == true){
                console.log("Marcado check"+elem.value);
            }else{
                console.log("Desmarcado check"+ elem.value);
            }
        });
    };
}