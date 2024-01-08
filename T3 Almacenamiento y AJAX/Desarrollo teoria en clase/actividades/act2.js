"use strict"
/**
 * con localStorage almacenar en una variable username el nombre de usuario
 * y al cargar pagina verificar:
 * - si la variable no existe:
 *      -Indicarle al usuario que no está identificado
 *      -Mostrarle un prompt que introduxcan nombre de usuario
 *      -Controlar si deja el prompt en blanco o si cancela
 *      -guardar el valor de la variable username
 * - si la variable existe:
 *      -Saludar escribiendo: ¡Bienvenido de nuevo, username!
 * Añadir un boton para eliminar la variable username
 */
{
    let username = localStorage.getItem("username");

    let boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.onclick = function eliminarLocalStorage(){
        localStorage.removeItem("username");
    }
    document.body.append(boton);
    
    if(username == null){
        let usuario = prompt("No está identificado, introduzca nombre de usuario");
        while(usuario == "" || usuario == undefined){
            usuario = prompt("Por favor introduzca un nombre de usuario");
        }
        localStorage.setItem("username", usuario);
    }
    if(username !== ""){
        let texto = document.createElement("h1");
        texto = "Bienvenido de nuevo "+username;
        document.body.append(texto);
    }
}