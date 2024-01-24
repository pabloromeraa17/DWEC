"use strict"
{
    let misDatos = {
        name: "Juanpe",
        job: "teacher",
        id: "250",
        createdAt: "2024-01-17T12:56:46.649Z"
      
    }
    let recurso = "https://reqres.in/api/users";
    fetch(recurso,{
        method: "POST",
        body : JSON.stringify(misDatos),
        headers: {'Content-type': 'application/json'}
    })
    .then(function(response){
        console.log(response.status);
        if(response.ok){
            return response.json();
        }
    })
    .then(console.log)
    .catch(error=>console.log(error));


    let recurso2="https://jsonplaceholder.typicode.com/todos";
    fetch(recurso2)
    .then(function(response){
        return response.json();
    })
    .then (function(unArrayJSON) {
        for(let elem of unArrayJSON) {
            console.log(elem.id + "  "  +elem.userId + " " + elem.title + " " + elem.completed);
        }
    });


    let formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", function (e){
        e.preventDefault();
        let datos = new FormData(formulario);
        console.log(datos.get("userId"));
        console.log(datos.get("title"));

        fetch(recurso2,{
            method:"POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(
                {
                    userId: datos.get("userId"),
                    title: datos.get("title"),
                    completed: false
                }
            )
        })
        .then (response => response.json())
        .then(console.log);
        
    });

    // AL HACER CLICK EN EL BOTÓN DE ENVIAR EL FORMULARIO,
    // HAY QUE ENVIAR DE FORMA ASÍNCRONA EL CAMPO DEL FORMULARIO
    // A TU CORREO ELECTRÓNICO
    let formulario2 = document.querySelector("#formulario2");
    formulario2.addEventListener("click", function(e){
        e.preventDefault();
        let url = "https://formsubmit.com/ajax/promgon542@iesmartinezm.es";
        let datosFormulario = new FormData(formulario2);
        fetch(url, {
            method: "POST",
            body: datosFormulario
        })
        .then(response => response.json())
        .then(console.log)
        .catch(error=>console.error("ERROR "+ error));
    })
    
}