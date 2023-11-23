"use strict"
{
    //navegar po los elementos 
    /**
     * children: devuelve HTMLCollection con todos los elementos hijos 
     * parentElement: elemento padre o null si no tiene
     * firstElementChild: devuelve el primero de los hijos
     * lastElementChild: devuelve el ultimo de los hijos
     * previousElementSibling: devuleve el hermano anterior o null si no tiene
     * nextElementSibling: devuleve el hermano posterior o null si no tiene
    */
    console.log("JS 7")
    console.log(document.body.children);
    console.log(document.body.children.length);
    for(let element of document.body.children){
        console.log(element);
    }
    console.log(document.body.parentElement);
    console.log(document.body.firstElementChild);
    console.log(document.body.lastElementChild);
    console.log(document.body.children[4]);
    console.log(document.body.children[4].previousElementSibling);
    console.log(document.body.children[4].nextElementSibling);

    //Navegar por los nodos
    /**
     * childNodes
     * firstChild
     * lastChild
     * previousSibling
     * nextSibling
     */
    console.log(document.body.childNodes);
    console.log(document.body.childNodes.length);

}