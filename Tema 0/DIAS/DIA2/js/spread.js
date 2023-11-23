"use strict"
{
    let a="HOLA";
    let b = a;
    console.log(a);
    console.log(b);
    a="ADIOS";
    console.log(a);
    console.log(b);

    let v1 = ["Hola"];
    let v2 = v1;
    v1.push("adios");
    console.log(v1);
    console.log(v2);

    let v3 = ["Hola"];
    let v4 = [...v3];
    v3.push = ("Adios");
    console.log("v3: "+v3);
    console.log("v4: "+v4);

    let persona ={
        nombre: "pepe",
        edad: 64,
        ciudad: "cordoba"
    };

    let persona2 = persona;
    persona.edad=70;
    console.log(persona);
    console.log(persona2);

    let persona3 = {...persona};
    persona.edad=50;
    console.log(persona);
    console.log(persona3);
}