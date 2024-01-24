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

    botonCargarImagenes.onclick = function(){
        let recurso = "http://localhost:3000/usuarios";
        fetch(recurso)
        .then(response => response.json())
        .then(function(user){
            console.log(user.length);
            for(let i of user){
                let salto = document.createElement("br");
                let miImagen = document.createElement("img");
                miImagen.setAttribute("src", i.foto);
                contenedorImagenes.append(miImagen,salto);
            }
            
        })
    }

}