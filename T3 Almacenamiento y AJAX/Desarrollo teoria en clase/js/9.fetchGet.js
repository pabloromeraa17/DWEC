"use strict"
{
    let recurso = "./recursos/flores.jpg";
    fetch (recurso)
    .then(function(response) {
        console.log(response.status);
        console.log(response.ok);
        if(response.ok){
            return response.blob();
        }
    })
    .then(function (miBlob) {
        let objetoURL = URL.createObjectURL(miBlob);
        imagen.setAttribute("src", objetoURL);
    }).catch(function(error){
        console.log("Hubo un problema con fetch " + error.message);
    });

    /**
     * PROPIEDADES DE RESPONSE:
     *  .ok
     *  .status
     *  .statusText
     *  .headers
     *  .url
     *  .type
     *  .redirected
     *  .body
     *  .bodyUsed
     */

    /**
     * MÉTODOS DE RESPONSE
     *  .text();
     *  .json();
     *  .blob();
     *  .arrayBuffer();
     *  .formData();
     *  .clone();
     *  .error();
     */
    let misDatos = {
        nombre: "Juan",
        id: 45,
    };
    fetch(recurso, {
        method: "POST", //GET, POST, PUT o PATCH, DELETE
        body: JSON.stringify(misDatos),
        headers: {
            'Content-type': 'application/json'
        },
        mode: ..,
        cache:
        credentials:
        redirect:,
        referrerPolicy:...
    })
    .then()
    .then()
    .catch();


    // 3 APIS QUE VAMOS A USAR:
    /*
        https://jsonplaceholder.typicode.com
        https://regres.in
        https://randomuser.me/api
        
    */
}

