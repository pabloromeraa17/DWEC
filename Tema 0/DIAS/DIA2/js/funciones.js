"use strict"

{//FUNCIONES
    console.log("FUNCIONES - DIVERSOS TIPOS DE DECLARACIONES DE FUNCIONES");
    //FUNCION NORMAL CON EL ULTIMO PARAMETRO POR DEFECTO
    function f(param1, param2, param3=0){
        console.log("Función f");
        console.log(param1);
        console.log(param2);
        console.log(param3);
        //return x;
    }

    console.log("1ª llamada a f");
    f(10,20,30);
    console.log("2ª llamada a f");
    f(10,20);
    console.log("3ª llamada a f");
    f();

    function f2(param1, param2, ...param3){
        console.log("Función f");
        console.log(param1);
        console.log(param2);
        console.log(param3);
        //return x si es necesario;
    }

    console.log("1ª llamada a f2");
    f2(10,20,30);
    console.log("2ª llamada a f2");
    f2(10,20);
    console.log("3ª llamada a f2");
    f2(10,20,30,40,50);

    //OTRA FORMA DE DECLARAR FUNCIONES (CON CONST)
    const f3 = function(param1, param2, param3=0){
        console.log("funcion f3");
        let r = parseInt(param1) + parseInt(param2)+ parseInt(param3);
        return r;
    }
    console.log ("1ª llamada a f3:");
    let r = f3(10,20);
    console.log(r);

    console.log ("2ª llamada a f3:");
    r = f3(10,20,30);
    console.log(r);

    //  FUNCIONES ANONIMAS
    (function(){
        console.log("Funcion anonima 1, sin parametros");
    })();//Aqui se ponen los valores de los parametros

    (function(param1, param2, ...param3){
        console.log("Funcion anonima 2");
        console.log(param1);
        console.log(param2);
        console.log(param3);
    })(10,20,30,40);

    let v = (function(a,b){
        console.log("Funcion anonima 3, almacenando return en variable");
        return parseInt(a)+parseInt(b);

    })(prompt("Introduce a",0), prompt("Introduce b",0));
    console.log(`El resultado de llamar a la función anonima es ${v}`);
}