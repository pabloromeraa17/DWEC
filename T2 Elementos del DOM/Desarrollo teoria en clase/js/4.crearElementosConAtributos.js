"use strict"
{
    console.log("ATRIBUTO DE LOS ELEMENTOS HTML");
    console.log("\n\t1. Un div nuevo");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style = "color: red";
    nuevoDiv.id = "id1";
    nuevoDiv.className = "cDiv1";
    console.log(nuevoDiv);

    console.log("\n\t2. Un parrafo nuevo");
    let parrafoNuevo = document.createElement("p");

    /**
     * setAttribute (attr, valor) : añade o cambia el valor del atributo
     * hasAttribute (attr) : true/false indicando si tiene o no el atributo
     * hasAttributes(): true / false indicando si tiene o no atributos
     * getAttributesNames() : [] de String con los nombres de los atributos
     * getAttributes(attr) : devuelve String con el valor del atributo
     * removeAttribute(attr) : elimina el atributo del elemento
     * 
     * getAttributeNode(attr) : devuelve un Node con el Valor del atributo
     * removeAttributeNode(attr) : devuelve el Node que ha eliminado
     * setAttributeNode(attr, valor) : devuelve el Node que ha añadido
     */
    parrafoNuevo.setAttribute("name","nParrafo1");
    parrafoNuevo.setAttribute("id","idParrafo1");
    parrafoNuevo.setAttribute("class","cParrafo1");
    parrafoNuevo.setAttribute("kk","peque");
    parrafoNuevo.hasAttribute("name")?console.log("si"):console.log("no");
    parrafoNuevo.hasAttribute("kk")?console.log("si"):console.log("no");
    console.log(parrafoNuevo);

    parrafoNuevo.hasAttributes()?console.log("si"):console.log("no");
    let nombreAtributos = parrafoNuevo.getAttributeNames();
    console.log(nombreAtributos);

    parrafoNuevo.setAttribute("style","color: orange");
    nombreAtributos = parrafoNuevo.getAttributeNames();
    console.log(nombreAtributos);

    parrafoNuevo.removeAttribute("style");
    nombreAtributos = parrafoNuevo.getAttributeNames();
    console.log(nombreAtributos);

    let textoParrafo = document.createTextNode("El texto de mi nuevo parrafo");
    parrafoNuevo.append(textoParrafo);
    console.log(parrafoNuevo);

    console.log("\n¿Está conectado el parrafo al body?");
    parrafoNuevo.isConnected?console.log("si"):console.log("no");

    document.body.append(nuevoDiv);
    nuevoDiv.append(parrafoNuevo);
    nuevoDiv.isConnected?console.log("si"):console.log("no");

    /**
     * <a class="linh-dom" data-id="1" data-description="Document Object Model" href="1.indexDOM.html"
    style="color: white; background-color: brown;">DOM</a>
     */
    let enlace1 = document.querySelector(".link-dom");
    enlace1.getAttribute("data-description");
    enlace1.setAttribute("data-description", "Modelo de Objeto de documento");
    console.log(enlace1.getAttribute("data-description"));

    //Acceso a las propiedades css de un elemento
    console.log(enlace1.style); //todos los estilos que tengas aplicados
    console.log(enlace1.style.color);
    console.log(enlace1.style.backgroundColor);
    console.log(window.getComputedStyle(enlace1)); //todos los estilos del navegador + los tuyos

    enlace1.style.setProperty("text-decoration", "line-through");
    enlace1.style.textoDecoration = "none"  //es lo mismo

    enlace1.style.setProperty("display", "block");
    enlace1.style.width = "50%";
    enlace1.style.textAlign = "center";
    enlace1.style.marginLeft = "auto";
    enlace1.style.marginRigth = "auto";
    enlace1.style.padding = "1rem";
    enlace1.style.borderRadius = ".5rem";

    console.log(enlace1.style);
    console.log(enlace1.dataset);

    let body = document.body;
    body.style.setProperty("background-color", "#00FF00"); //RGB

    //PARA UN MISMO ELEMENTO HTML, PODEMOS TENER VARIAS CLASES CSS
    /**
     * .cHache3{
            background-color: orange;
        }
        .cImportante{
            border-radius: 1rem;
        }
        .cContenido{
            color: blue;
        }
        <h3 class="cHache3 cImportante cContenido"></h3>
     */
    let miH3 = document.querySelector(".cHache3");
    miH3.classList.add("cUno"); //Añade nueva clase css
    miH3.classList.add("cDos"); //Añade nueva clase css
    console.log(miH3.classList); //Muestra todas las clases css
    miH3.classList.remove("cImportante");
    miH3.classList.toggle("cInfo");  //elimina la clase si existe, o la añade si no existe
    miH3.classList.contains("cImportante")?console.log("si"):console.log("no")
    miH3.classList.replace("cUno", "cImportante"); //Cambia la primera por la segunda
}