"use strict"
{
    let table = document.querySelector("table");
    let nFilas=10, ncolumnas=10;
    let fila /*= document.createElement("tr")*/;
    let columna /*= document.createElement("td")*/;
    let count = 1;

    for(let i = 0; i < nFilas; i++){
        fila = document.createElement("tr");
        table.append(fila);
        for(let j = 0; j < ncolumnas; j++){
            columna = document.createElement("td");
            columna.append(count);
            fila.append(columna);
            count++;
        }
    }

    let filas = document.querySelectorAll("td");

    let miBoton1 = document.querySelector("#idBoton1");
    miBoton1.onclick = function(){
        for(let elem of filas){
            let countPrimos = 0;
            for(let i = 1; i <= elem.textContent; i++){
                if(elem.textContent%i == 0){
                    countPrimos ++;
                }
            }
            if (countPrimos <= 2){
                elem.setAttribute("style","background-color: yellow")
            }
        }
    }

    let miBoton2 = document.querySelector("#idBoton2");
    miBoton2.onclick = function(){
        for(let elem of filas){
            elem.removeAttribute("style");
            // elem.style.backgroundColor = "white";
            //elem.style.setProperty("background-color", "white");
            // elem.style.setProperty("border-radius","15px");
        }
    }
}