"use strict"
{

    /**
     * PUT: para actualizar algo, pero hay que incluir todos los campos (por ejemplo, de un JSON)
     * PATCH: para actualizar un algo, pero solo hay que incluir los campos que quieres modificar, no todos.
     */


    /* ++++++ PUT +++++++
    */
    // Primero hago una lectura para ver qué hay en el json de la url
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then (function (arrayJson) {
      for (let elem of arrayJson){
        console.log(elem);
        console.log(elem.userId + " " + elem.id + " " + elem.title + " " + elem.completed+ "\n");
      }
    })
    .catch (error => console.log(error));



    fetch("https://jsonplaceholder.typicode.com/todos/5", { // accedo a un objeto literal concreto, no a todos.
        method: "PUT",
        body: JSON.stringify({
            userId: 1, 
            id: 5,// El id no lo tiene en cuenta esta api de json
            title: "NUEVO TÍTULO",
            completed: false
        }),
        headers: { // si no pones esta cabecera, no inserta
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json()) // te devuelve el objeto que has enviado, si todo ha ido bien.
    .then(json => {
        console.log("\nPUT:");
        console.log(json);}) 
    .catch (error => console.log(error));


    //Pruebo a ver si ha cambiado los datos del 5 tras el PUT, pero veo que NO
    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(response => response.json())
    .then (console.log) 
    .catch (error => console.log(error));



    /*  +++++ PATCH +++++
    */
    fetch("https://jsonplaceholder.typicode.com/todos/5", 
        {method: "PATCH",
        body: JSON.stringify({
            completed: true
        }),
        headers: {
         "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log("\nPATCH:");
        console.log(json);});


    //Pruebo a ver si ha cambiado los datos del 5 tras el PATCH, pero veo que NO
    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(response => response.json())
    .then (console.log) 
    .catch (error => console.log(error));



    /* +++++ DELETE +++++
    */

    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "DELETE"
    })
    .then(response => response.json()) // DELETE DEVUELVE UNA RESPUESTA VACÍA SI HA BORRADO BIEN
    .then(json => {
        console.log("\nDELETE:");
        console.log(json);});
}