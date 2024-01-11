"use strict"
{
    // fetch("./recursos/texto.txt")
    // .then(response => response.text())
    // .then(console.log);

    //let miRespuesta = new Response();

    // for(let v = 0; v < 1000; v++){
    //     console.log(v);
    // }
    fetch("./recursos/texto.txt")
    .then(function(respuesta){
        let miTexto = respuesta.text();
        return miTexto;
    })
    .then(function(respuesta){
        console.log(respuesta);
    });

    // for(let v = 0; v < 1000; v++){
    //     console.log(v);
    // }

    let miImagen = document.querySelector(".flores");
    fetch("./recursos/flores.jpg")
    .then(function(respuesta){
        let miTexto2 = respuesta.blob();
        return miTexto2;
    })
    .then(function(elObjetoBlob){
        let objetoURL = URL.createObjectURL(elObjetoBlob);
        console.log(objetoURL);
        miImagen.setAttribute("src", objetoURL);
        console.log(miImagen);
    })

    fetch("./recursos/flores.jpg")
    .then(function(respuesta){
        let miTexto2 = respuesta.blob();
        return miTexto2;
    })
    .then(function(elObjetoBlob){
        let objetoURL = URL.createObjectURL(elObjetoBlob);
        console.log(objetoURL);

        localStorage.setItem("foto", objetoURL)
        let fotoObtenida = localStorage.getItem("foto");
        let miImagen2 = document.createElement("img");
        miImagen2.setAttribute("src", fotoObtenida)
        document.body.append(miImagen2);
        // miImagen.setAttribute("src", objetoURL);
        console.log(miImagen2);
    })

    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(function(textoJSON){
        console.log(textoJSON);
        console.log(textoJSON.results[0].email);
        console.log(textoJSON.results[0].login);
        let miImagen3 = document.createElement("img");
        miImagen3.setAttribute("src", textoJSON.results[0].picture.large)
        document.body.append(miImagen3);
    })
}