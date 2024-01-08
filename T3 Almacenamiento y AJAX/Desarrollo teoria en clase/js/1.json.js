"use strict"
{
    //ejemplo1: string --> JSON
    let a = "hola caracola";
    let textoJSON = JSON.stringify(a);
    console.log(a);
    console.log(textoJSON);
    let informacionOriginal = JSON.parse(textoJSON);
    console.log(informacionOriginal);

    //ejemplo2: array --> JSON
    let miArray = new Array();
    miArray[0] = "hola mundo";
    miArray[1] = "hola galaxia";
    let textoJSON2 = JSON.stringify(miArray);
    console.log(miArray);
    console.log(textoJSON2);
    let informacionOriginal2 = JSON.parse(textoJSON2);
    console.log(informacionOriginal2);

    //ejemplo3: objeto literal --> JSON
    let miObjetoLiteral = {
        nombre:"Juan",
        edad:23,
        dni:"11223344Y"
    };
    let textoJSON3 = JSON.stringify(miObjetoLiteral);
    console.log(miObjetoLiteral);
    console.log(textoJSON3);
    let informacionOriginal3 = JSON.parse(textoJSON3);
    console.log(informacionOriginal3);

    let miObjetoLiteral2 = {
        nombre:"Antonio",
        edad:27,
        dni:"11223344Z"
    };

    let miArrayDeOL = [miObjetoLiteral, miObjetoLiteral2];
    let textoJSON4 = JSON.stringify(miArrayDeOL);
    console.log(miArrayDeOL);
    console.log(textoJSON4);
    let informacionOriginal4 = JSON.parse(textoJSON4);
    console.log(informacionOriginal4);

    
}