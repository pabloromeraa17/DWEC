"use strict"
{
    console.log("\n-----CREAR ELEMENTOS HTML-------");
    console.log("\n1.Crear un comentario"); //Node
    let comentarios = document.createComment("Este es el texto de un comentario");
    console.log(comentarios);

    console.log("\n2.Crear un nodo de texto");//Node
    let nodoTexto = document.createTextNode("texto que voy a añadir");
    console.log(nodoTexto);

    console.log("\n3.Clonar nodo");//Node
    let otroNodoTexto = nodoTexto.cloneNode();
    console.log(otroNodoTexto);

    console.log("\n4.Ver si un nodo está conectado al DOM");
    comentarios.isConnected?console.log("\tSi"):console.log("\tNo");

    console.log("\n5.Crear distintos elementos HTML con createElement()");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Hola";
    console.log(nuevoDiv);
    console.log(nuevoDiv.textContent);
    // let nuevoDiv2 = nuevoDiv; por referecia
    let nuevoDiv2 = nuevoDiv.cloneNode(true); //por Valor
    nuevoDiv.textContent="Adios";
    console.log(nuevoDiv);
    console.log(nuevoDiv2);
    /**
     * cloneNode() = cloneNode(false) = solo copia el elemento o nodo
     * cloneNode(true) = clona el nodo o el elemento con toda la profundidad
     */
    let nuevoImg = document.createElement("img");
    console.log(nuevoImg);

    let nuevoH1 = document.createElement("h1");
    console.log(nuevoH1);

    let nuevoH2 = document.createElement("h2");
    let nuevoTextoH2 = document.createTextNode("texto de h2");
    //nuevoH2.append(nuevoTextoH2);
    nuevoH2.appendChild(nuevoTextoH2); //es lo mismo
    console.log(nuevoH2);
    /**
     * mozilla javascript append
     * 1) append() --> inserta un Node o un String
     * 1) appendChild() --> inserta un Node
     * 2) append no devuelve nada
     * 2) appendChild devuelve el node insertado
     */

    console.log("\n6.Crear distintos elementos HTML con createElement()");
}