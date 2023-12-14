"use strict"
{
    let cajaInput = document.querySelector("input");
    let botonCrear = document.querySelector(".crearBotones");
    let botonReiniciar = document.querySelector(".reiniciar");
    let num, button, r1, r2, r3;
    let count = 0;

    cajaInput.oninput = function(e){
        num = e.target.value;
        console.log(e.target.value);
    };

    let lista = [];
    botonCrear.onclick = function(){
        console.log(num);
        for(let i = 0; i < num; i++){
            button = document.createElement("button");
            r1 = Math.round(Math.random()* (255-0) + 0);
            r2 = Math.round(Math.random()* (255-0) + 0);
            r3 = Math.round(Math.random()* (255-0) + 0);
            button.setAttribute("style", "background-color: rgb("+r1+","+r2+","+r3+")");
            button.insertAdjacentElement("afterend", botonReiniciar);
            button.textContent = "rgb("+r1+","+r2+","+r3+")";
            document.body.append(button);
            lista[count] = button;
            count ++;
        };
        for(let elem of lista) {
            elem.onclick = function(){
                document.body.style.backgroundColor = elem.textContent;
            }
        }
    };

    botonReiniciar.onclick = function(){
        count = 0;
        document.body.removeAttribute("style");
        for(let elem of lista) {
            document.body.removeChild(elem);
        }
    };  

}