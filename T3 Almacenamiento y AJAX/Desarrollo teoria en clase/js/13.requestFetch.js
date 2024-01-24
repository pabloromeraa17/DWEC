"use strict"
{

    /**
     * USO DEL OBJETO REQUEST PARA FETCH
     */
    let url = 'https://jsonplaceholder.typicode.com/todos';
    
    // Forma 1:
    const myRequest1 = new Request(url);
    
    // Forma 2:
    const myConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }  
    const myRequest2 = new Request(
        url, // La URL, el 1º parámetro de fetch
        myConfig                                       // El 2º parámetro de fetch, que es un objeto literal
      );
      
      fetch(myRequest2)
        .then(response => response.json())
        .then(console.log)
      ; 


        /* NFORMACIÓN QUE SE INCLUYE EN EL OBJETO RESPONSE:
          Ver: 10.fetchGet.js
          y ver: páginas 27 y 28
      PROPIEDADES DE RESPONSE:
      * response.ok => si status es 2xx, devuelve TRUE; si no, devuelve FALSE
      * response.status => código de estado http
      * response.statusText => texto del código de estado http
      * response.headers => cabecera de la respuesta
      * response.url => url de la petición del fetch
      * response.type
      * response.redirected => Indica si la respuesta que obtienes fue hecha por una redirección
      * response.body => información enviada por el servidor de tipo ReadableStream
      * response.bodyUsed => si la información del body ya fue leída o no
    */
        
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function (respuesta) {
        console.log("OK: " + respuesta.ok);
        console.log("STATUS: " + respuesta.status);
        console.log("STATUSTEXT: " + respuesta.statusText)
        console.log(respuesta.headers);
        console.log(respuesta.body);
        console.log("BODYUSED: " + respuesta.bodyUsed);
        console.log("URL: " + respuesta.url);
        console.log("TYPE: " + respuesta.type);
        console.log("REDIRECTED: " + respuesta.redirected)
        return respuesta.json();
      })
      .then(console.log);
}