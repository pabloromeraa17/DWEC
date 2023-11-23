"use strict"
{
    let elementoAEliminar = document.querySelector("#idDiv2");
    elementoAEliminar.isConnected?console.log("si"):console.log("no")
    elementoAEliminar.remove();
    elementoAEliminar.isConnected?console.log("si"):console.log("no")

    let elementoAEliminarleUnHijo = document.querySelector("#idDiv3");
    let hijoAEliminar = document.querySelector("#idDiv4");

    elementoAEliminarleUnHijo.removeChild(hijoAEliminar)?console.log("eliminado"):console.log("no eliminado");
}