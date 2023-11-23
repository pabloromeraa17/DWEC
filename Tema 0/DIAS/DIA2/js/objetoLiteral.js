"use strict"
{
    let persona = {
        nombre: "Pablo",
        edad: 21,
        ciudad: "sevilla"
    }
    console.log(persona);
    console.log(persona.nombre);
    console.log(persona.ciudad);
    console.log(persona.edad);

    console.log("\nLe cambio la edad");
    persona.edad = 45; //CAMBIO DE VALOR
    console.log("El nombre es: "+persona["nombre"]);
    console.log("La edad es: "+persona["edad"]);
    console.log("La ciudad es: "+persona["ciudad"]);
    persona["ciudad"] = "Salamanca"; //CAMBIO DE VALOR
    console.log("La ciudad es: "+persona["ciudad"]);

    let animal = {
        tipo: "gato",
        patas: 4,
        bigotes: true,
        dimensiones: {
            alto:60,
            ancho:30,
            largo:80
        }
    }
    console.log(animal);
    console.log(`Alto: ${animal.dimensiones.alto}`);
    console.log(`Largo: ${animal.dimensiones["largo"]}`);
    console.log(`Largo: ${animal["dimensiones"]["ancho"]}`);

    console.log("\nObjetos literales con funciones:")

    let personaCompleta= {
        nombre: "Juan",
        edad: 40,
        ciudad: "Córdoba",
        pasatiempos: ["salir de fiesta", "ir en bici", "drones"],
        contacto: {
            email: "pablo@gmail.com",
            youtube: "https://www.youtube.com/bender",
            instagram: "@alguien"
        },
        saludar(){
            console.log("Hola q tal");
        },
        decirMiNombre(){
            console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
            console.log(`Me puedes seguir en ${this.contacto.instagram}`);
        }
    }
    console.log(personaCompleta);
    personaCompleta.saludar();
    personaCompleta.decirMiNombre();

    //DESTRUCTURING DE OBJETO LITERAL
    const {nombre,edad,ciudad,pasatiempos,contacto,saludar,decirMiNombre} = personaCompleta;
    console.log("El nombre es "+ nombre);
    console.log("La edad es "+ edad);
    console.log(pasatiempos);
    saludar();

    //DESTRUCTURING DE ARRAY
        const miCoche = ["Alfa Romeo","159","azul"];
        const [marca,modelo,color] = miCoche;
        console.log(`Me gusta el ${marca} modelo ${modelo} de color ${color}`);

        //UNIR 2 OBJETOS LITERALES
        const producto = {
            nombreProducto: "Reloj",
            tipo: "bolsillo",
            tamaño: "grande"
        };
        const colores = {
            esfera: "blanco",
            correa: "negro"
        };
        //let x = producto;
        const productoCompleto = {...producto, ...colores};
        console.log(producto);
        console.log(colores);
        console.log(productoCompleto);
        
        producto["nombreProducto"] = "bombona de butano";
        console.log(producto);
        console.log(colores);
        console.log(productoCompleto);
}