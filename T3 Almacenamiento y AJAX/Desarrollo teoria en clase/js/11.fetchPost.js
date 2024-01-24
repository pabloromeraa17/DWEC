"use strict"
{
     /**
      *  OPERACION   BBDD    PETICIÓN REST
      *  Create      Insert  Post
      *  Read        Select  Get
      *  Update      Update  Put/Patch
      *  Delete      Delete  Delete
      */
      
     /**
      * FAKE APIs FOR TESTING OUT FETCHs
      * https://jsonplaceholder.typicode.com/
      * https://reqres.in/
      * https://randomuser.me/api
      */

    // EJEMPLO 1
     fetch("https://reqres.in/api/users", { 
            method: "GET",
          })
          .then(response => response.json())
          .then(console.log)
          .catch (error => console.log(error));

    // fetch("https://reqres.in/api/users", {
    //     method: "POST",
    //     body: JSON.stringify({ website: "https://iesmartinezm.es" }) // en el body se escribe lo que queremos enviar al servidor
    // })
    // .then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    // })       
    // .then(console.log) // El servidor devuelve un objeto literal ficticio donde se indica el id y la fecha de subida de los datos, pero REALMENTE no sube nada
    // .catch (error => console.log(error)); 
      
    
    
//     // EJEMPLO 2
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //     method: "POST",
    //     body: JSON.stringify(
    //         {userId: 500,
    //         id: 4, // esta API no admite id, sino que él te lo pone automáticamente
    //         title: "clase de dwec",
    //         nombre: "miguelito",
    //         completed: true })
    //         , 
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json)) 

   
    /**
     * Aunque yo luego haga un GET, el dato no está insertado porque es una API FAKE
     */
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then (function (arrayJson) {
//       for (let elem of arrayJson){
//         let parrafo = document.createElement("p");
//         parrafo.innerHTML=elem.userId + " - " + elem.id + " - <br>" + elem.title + " - <br>" + elem.completed;
//         document.body.appendChild(parrafo);
        
//       }
//     })
//    // .then(console.log)
//   .catch (error => console.log(error));



    // EJEMPLO 3: ENVIAR DATOS PROCEDENTES DE UN FORMULARIO
        //  EXPLICAR ANTES FORMDATA DE LA UT2
//   let formulario = document.querySelector("#idFormulario");
//   console.log("\n\n");

//   formulario.addEventListener("submit", (e) => {
//       e.preventDefault();
//       console.log("funciona");
    
//       // PINTO LOS VALORES DE LOS NAME QUE HE CAPTURADO DEL FORMULARIO
//       const datos = new FormData(formulario);
//       console.log("userID: " + datos.get("userId")); // la clave es el name
//       console.log("id : " + datos.get("id"));
//       console.log("title: " + datos.get("title"));
    
//       // PINTO DE OTRA FORMA LOS VALORES DE LOS NAME QUE HE CAPTURADO DEL FORMULARIO
//       for (let campo of datos.values()) { // Itera sobre todos los campos  y devuelve el valor
//           console.log(campo);
//       }
//       // PINTO DE OTRA FORMA LAS PAREJAS [CLAVE,VALOR]
//       for (let campo of datos.entries()) { // Itera sobre todos los campos y devuelve la pareja campo:valor en forma de array [clave, valor]
//           console.log(campo);
//       }

//       fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "POST",
//         body: JSON.stringify( // convierte un objeto literal a JSON
//             {userId: datos.get("userId"),
//             id: datos.get("id"), // esta API no admite id, sino que él te lo pone automáticamente
//             title: datos.get("title"),
//             completed: true }), 
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(response => response.json())
//     .then(json => {
//         console.log("Datos del formulario enviados con POST");
//         console.log(json);
//         }) 

//     });

    //EJEMPLO 4: usando formsubmit.co , para enviar por email
    /* ESTO SE PUEDE MANDAR COMO EJERCICIO DE CLASE: HACER UN FORMULARIO CON 3 CAMPOS Y ENVIAR DE FORMA ASÍNCRONA AL CORREO DEL PROFESOR */
    // //const url="https://formsubmit.co/juan.pedro.bernal@iesmartinezm.es"; // esto no funciona
    // const url="https://formsubmit.co/ajax/juan.pedro.bernal@iesmartinezm.es";
    // const formulario2 = document.querySelector(".cFormulario2");

    // formulario2.addEventListener("submit",function (evento){
    //     evento.preventDefault();//para no actualizar la página al anviarse.
    //     const datosDelFormulario = new FormData(formulario2); 
    //     for (let campo of datosDelFormulario.entries()) { // Itera sobre todos los campos y devuelve la pareja campo:valor en forma de array [clave, valor]
    //         console.log(campo); // [nNombre, valor]
    //     }
    //     fetch(url, {
    //         method: "POST",
    //         body: datosDelFormulario,
    //         headers: {
    //             //"Content-type": "application/json; charset=UTF-8" // esta cabecera sería incorrecta para enviar un formData
    //             }
    //     })
    //     .then (response=>response.json()) // esto no es necesario; solo para ver en consola lo que me devuelvo (1)
    //     .then (datosDelFormulario=>console.log(datosDelFormulario)) // esto no es necesario; solo para ver en consola lo que me devuelvo (2)
    //     .catch(error=>console.error("ERROR: "+error))
    // });



}