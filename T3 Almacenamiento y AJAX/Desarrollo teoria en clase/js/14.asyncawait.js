"use strict"

{
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.log(error));

    async function dameDatos (id){
        try{
            let dato = await fetch(url+"/"+id);
            if(!dato.ok){
                throw new Error ("Fallo en el fetch");
            }
            let json = await dato.json();
            console.log(json);
        }catch (error){
            console.log(error);
        }
        
    };

    dameDatos(2);
}