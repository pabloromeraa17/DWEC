"use strict"
/**
 * EJERCICIO PARA HACER EN CLASE:
     * Dado el archivo db.json, arrancar el servidor json-server para servir dicho json.
     *
     * Tarea 1: crear un botón que se llame "cargar imágenes" que muestre las imágenes de todos los usuarios en etiquetas img
     * Tarea 2: crear un botón que se llame "añadir usuario" para añadir un nuevo usuario con datos reales tuyos; ponte el id=4
     * Tarea 3: crear un botón que se llame "modificar imágenes" para modificar las imágenes de todos los usuarios poniéndoles a
     *          todos la imagen del 1º de ellos. No modifiques el resto de campos.
     * Tarea 4: crear un botón que se llame "modificar nombre" modificar el nombre de tu usuario que has creado en la tarea 2:
     *          añádete tu primer apellido tras el nombre
     * Tarea 5: crear un botón que se llame "eliminar héroe" para eliminar el 2º superhéroe.
     *
     * NOTA: te recomiendo encarecidamente que, antes de ejecutar tu programa, hagas copia de seguridad del archivo db.json, por lo que pueda pasar.
 */
{
    //Tarea 1
    let botonCargarImagenes = document.createElement("button");
    botonCargarImagenes.textContent = "Cargar imágenes";
    document.body.append(botonCargarImagenes);
    
    let contenedorImagenes = document.createElement("div");
    document.body.append(contenedorImagenes);

    let imagenesCargadas = false;
    botonCargarImagenes.onclick = function(){
        let recurso = "http://localhost:3000/usuarios";
        fetch(recurso)
        .then(response => response.json())
        .then(function(user){
            console.log(user.length);
            if(imagenesCargadas == false){
                for(let i of user){
                    let salto = document.createElement("br");
                    let miImagen = document.createElement("img");
                    miImagen.setAttribute("src", i.foto);
                    contenedorImagenes.append(miImagen,salto);
                }
                imagenesCargadas=true;
            }
        })
    }


    //Tarea 2
    let botonAñadirUsuario = document.createElement("button");
    botonAñadirUsuario.textContent = "Añadir usuario";
    botonCargarImagenes.insertAdjacentElement("afterend",botonAñadirUsuario);

    botonAñadirUsuario.onclick = function(){
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            body: JSON.stringify({
                id: "4",
                usuario: "Pablo",
                email: "promgon542@iesmartinezm.es",
                foto: "https://avatars.githubusercontent.com/u/131361197?v=4" })
                , 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }


    //Tarea 3
    let botonModificarImágenes = document.createElement("button");
    botonModificarImágenes.textContent = "Modificar imágenes";
    botonAñadirUsuario.insertAdjacentElement("afterend",botonModificarImágenes);
    let imagenPersona1;

    botonModificarImágenes.onclick = function(){
        fetch("http://localhost:3000/usuarios")
        .then(response => response.json())
        .then(function(user){
            imagenPersona1 = user[0].foto;
            for(let i = 0; i<=user.length; i++){
                fetch("http://localhost:3000/usuarios/"+i, 
                    {method: "PATCH",
                    body: JSON.stringify({
                        foto: imagenPersona1
                    }),
                    headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("\nPATCH:");
                    console.log(json);});
            }
        })
    }


    //TAREA 4
    let botonModificarNombre = document.createElement("button");
    botonModificarNombre.textContent = "Modificar nombre";
    botonModificarImágenes.insertAdjacentElement("afterend",botonModificarNombre);
    let nombreMiPersona;

    botonModificarNombre.onclick = function() {
        fetch("http://localhost:3000/usuarios")
        .then(response => response.json())
        .then(function(user){
            nombreMiPersona = user[3].usuario;
            fetch("http://localhost:3000/usuarios/4", 
                {method: "PATCH",
                body: JSON.stringify({
                    usuario: nombreMiPersona + " Romera"
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log("\nPATCH:");
                console.log(json);});
        })
    }
    

    //TAREA 5
    let botonEliminarHeroe = document.createElement("button");
    botonEliminarHeroe.textContent = "Eliminar héroe";
    botonModificarNombre.insertAdjacentElement("afterend",botonEliminarHeroe);
    let heroeAEliminar;

    botonEliminarHeroe.onclick = function(){
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(function(heroe){
            console.log(heroe[1].id);
            heroeAEliminar=heroe[1].id;
            
            fetch("http://localhost:3000/heroes/"+heroeAEliminar, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(json => {
                console.log("\nDELETE:");
                console.log(json);});
        })

        
    }
}