"use strict"
   /**
    ** Usando la tecnología de sessionStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
     * - si la variable no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     *    - guardar el valor de la variable username.
     * - si la variable ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * Añadir en la parte superior un botón para eliminar la variable username.
     *
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios.
     * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
     * NOTA3: cerrar la ventana del navegador y abrir de nuevo y ver las diferencias con localStorage
     *
     */
{
    let username = sessionStorage.getItem("username");

    let boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.onclick = function eliminarSessionStorage(){
        sessionStorage.removeItem("username");
    }
    document.body.append(boton);
    
    if(username == null){
        let usuario = prompt("No está identificado, introduzca nombre de usuario");
        while(usuario == "" || usuario == undefined){
            usuario = prompt("Por favor introduzca un nombre de usuario");
        }
        sessionStorage.setItem("username", usuario);
    }
    if(username !== ""){
        let texto = document.createElement("h1");
        texto = "Bienvenido de nuevo "+username;
        document.body.append(texto);
    }
}