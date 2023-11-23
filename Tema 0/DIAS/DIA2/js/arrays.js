"use strict"
{
    //COMO DECLARAR ARRAY
    let miArray = [];
    miArray[0]=10;
    miArray[1]=20;
    miArray[2]="hola";

    let miArray2 = new Array();
    miArray2[0]=30;
    miArray2[1]=40;

    let miArray3 = ["gamusino","up","globo"];
    
    let miArray4 = [...miArray,...miArray2,...miArray3];
    console.log(miArray4);
    console.log("Mi array tiene "+miArray4.length+" elementos")

    //OPERACIONES CON ARRAY
    //JOIN: crea un string a partir de los elementos de la array
    console.log("\nJoin");
    const elementos = ["fuego","aire","agua"];
    let s = elementos.join("---");
    console.log(s);

    //SPLIT: crea un array a partir de un string
    const sNumeros = "UNO,DOS,TRES,CUATRO";
    const arrayNumeros = sNumeros.split(",");
    console.log(arrayNumeros);

    //PUSH: añade elemento al final
    elementos.push("tormenta");
    console.log(elementos);
    let copiaElementos = [...elementos];
    //POP: devuelve el ultimo elemento de la array y lo elimina
    let ultimoElemento = elementos.pop();
    console.log("POP "+ultimoElemento);
    while(elementos.length > 0){
        let ultimoElemento = elementos.pop();
        console.log("POP "+ultimoElemento);
        console.log("El array tiene ahora: "+elementos);
    }
    console.log("\n");
    //SHIFT: devulve el primer elemento del array y lo elimina
    console.log("El array tiene ahora: "+copiaElementos);
    while(copiaElementos.length > 0){
        let primerElemento = copiaElementos.shift();
        console.log("SHIFT: "+primerElemento);
        console.log("El array tiene ahora: "+copiaElementos);
    }
    
    console.log("\n");
    
    //REVERSE: invertir el orden de los elementos del array
    console.log("Normal:" +arrayNumeros);
    console.log("Reverse:" +arrayNumeros.reverse());
    console.log("Normal:" +arrayNumeros.reverse());//Se vuelve a poner normal el orden
    
    console.log("\n");

    //SORT: ordenar elementos de la array por codigo unicode
    let numeros = [100,5,15,1,99];
    console.log(numeros.sort());
    console.log(numeros);

    console.log(numeros.sort( (a,b) => a-b )); //De forma ascendente
    console.log(numeros.sort( (a,b) => b-a )); //De forma descendente

    console.log("\n");

    //SLICE: (inicio, [final]): extrae elementos desde inicio hasta final-1
    let nombres = ["Rita","Miguel","Pablo","Ana","Vanesa"];
    let nombresMasculinos = nombres.slice(1,3);//miguel y Pablo
    console.log(nombresMasculinos);//Devolviendo una array

    console.log("\n");

    //FILTER: (funcionCondicion)
    const usuarios = [
        {nombre: "Juan", edad: 34},
        {nombre: "Antonia", edad: 20},
        {nombre: "Alba", edad: 10}
    ];

    let filtradosUsuarios = usuarios.filter((element) => element.edad >=18);
    console.log(filtradosUsuarios);
    filtradosUsuarios = usuarios.filter((element) => element.nombre.startsWith("J"));
    console.log(filtradosUsuarios);

    console.log("\n");

    //FIND:  devolver el primer elemento que encuentre dependiendo de una condicion
    let usuariosEncontrados = usuarios.find(elem => elem.edad == 20);
    console.log(usuariosEncontrados);
    
    console.log("\n");

    //SOME: devuelve true o false, busca si al menos 1 elemento cumple la condicion
    let existe = usuarios.some(elem => elem.edad ==10);
    console.log(existe);

    console.log("\n");

    //FINDINDEX: devuelve la posicion del primer elemento que cumpla una condicion
    let posicion = usuarios.findIndex(elem => elem.edad == 20);
    console.log(posicion);

    console.log("\n");

    //CONCAT: concatenar arrays
    const array1 = ["a","b","c"];
    const array2 = ["d","e","f"];
    const array3 = array1.concat(array2);
    console.log(array3);
    array2[2]="X"; //Copia de valores
    console.log(array3);
    const array4 = [...array1, ...array2];
    console.log(array4);

    console.log("\n");

    //REDUCE: (acumulador, valorActual) 
    const misNumeros = [1,2,3,4,5];
    let sumaNumeros = misNumeros.reduce((acumulador,valorActual) => acumulador + valorActual);
    console.log(sumaNumeros);// 15
    
    console.log("\n");

    //INCLUDES: verifica que algún elemento esta incluido en el array, devuelve true o false
    const motos = ["Yamaha","Ducati","Suzuki"];
    console.log(motos.includes("Ducati"));
    console.log(motos.includes("Vespa"));

    //ITERAR SOBRE UN ARRAY
        console.log("\n\tITERAR SOBRE UN ARRAY");
        let vector = [1,2,"A","F",-1,2.4];

        console.log("\nITERAR con un bucle for");
        for(let i = 0; i<vector.length;i++){
            console.log(vector[i]);
        }

        console.log("\n Iterar con un ForEach");
        vector.forEach(elem => console.log(elem));
        vector.forEach((elem,indice) => console.log(elem+"ocupa la posicion"+indice));

        console.log("\nIterar con map");
        vector.map(elem => console.log(elem));
        let vector2 = vector.map (elem => `${elem}`);
        console.log(vector2);

        let users = [
            {nombre: "Juan", edad: 34},
            {nombre: "Antonio", edad: 20},
            {nombre: "Paco", edad: 10}
        ];
        let nombrees = users.map ( elem => elem.nombre);
        console.log(nombrees);

        let numeros2  = [1,2,3,4,5,6,7,8,9,10];
        let numeros2PorDos = numeros2.map (elem => elem*2);
        console.log(numeros2PorDos);

        //ESTRUCTURA FOR OF
            console.log("\nIterar usuarios");
            for(let i of users){
                console.log(i);
            }
            for(let u of users){
                console.log(u.edad);
            }
            for(let n of numeros2){
                console.log(n);
            }
}   