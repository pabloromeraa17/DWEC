"use strict"
{
    console.log("\nRemplazar contenido");

    /**
     * textContent: texto sin formato
     * innerHTML; texto con formato
     * outerHTML: texto con formato + etiquetas HTML
     */


    /**
     * <p>Aqui hay un div vacio</p>
    <div id="idDiv1" class="cDiv1">

    </div>
     */
    let miDiv1 = document.querySelector("#idDiv1");
    miDiv1.textContent = "Contenido del div1";
    miDiv1.textContent = "Remplazado";
    
    let miDiv2 = document.querySelector("#idDiv2");
    console.log(miDiv2.textContent);
    console.log(miDiv2.innerHTML);
    miDiv2.innerHTML += "es muy <strong>importante</strong>";
    console.log(miDiv2.outerHTML);

    let img = document.createElement("img");
    img.src="https://lenguajejs.com/assets/logo.svg";
    img.setAttribute("alt", "logo JS");
    document.body.append(img);

    let miDiv3 = document.createElement("div");
    miDiv3.textContent="Esto es un div insertado desde js";
    miDiv3.setAttribute("id", "idDiv3");
    document.body.append(miDiv3);

    let p1 = document.createElement("p");
    p1.innerHTML = "texto con <strong>negrita</strong>";
    miDiv3.append(p1);

    miDiv3.isConnected?console.log("si"):console.log("no") //SI
    p1.isConnected?console.log("si"):console.log("no") //SI

    /**
     * insertAdjacentElement(): para insertar un element
     * insertAdjacentHTML(): similar a innerHTML
     * insertAdjacentText(): similar a TextContent
     * 
     * Llevan 2 parametros:
     * 1º: beforebegin, afterbegin, beforeend,afterend
     * 2º: el contenido que se inserta
     * 
     * <div3>
     * 
     *      <p></p>
     * 
     * </div3>
     */
    miDiv3.style.backgroundColor = "yellow"
    let miDiv4 = document.createElement("div");
    miDiv4.setAttribute("id", "idDiv4");
    miDiv4.textContent = "contenido del div 4"

    // miDiv3.insertAdjacentElement("beforebegin", miDiv4);
    // miDiv3.insertAdjacentElement("afterbegin", miDiv4);
    miDiv3.insertAdjacentElement("beforeend", miDiv4);
    // miDiv3.insertAdjacentElement("afterend", miDiv4);


}