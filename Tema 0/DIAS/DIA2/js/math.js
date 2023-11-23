"use strict"
/**
 * 
 */
{
    console.log(Math.E);
    console.log(Math.PI);
    console.log(Math.LN2);

    //FLOOR, CEIL y ROUND
    let f = 37.4;
    let a=10, b=20;
    console.log("Math.floor("+f+") = " + Math.floor(f)); //Trunca 
    console.log("Math.ceil("+f+") = " + Math.ceil(f)); // Trunca hacia arriba
    console.log("Math.round("+f+") = " + Math.round(f)); //Redondea

    //Operaciones Matematicas
    console.log("Math.abs("+f+") = " + Math.abs(f));//valor absoluto
    console.log("Math.min("+a+","+b+") = " + Math.min(a,b));
    console.log("Math.max("+a+","+b+") = " + Math.max(a,b));
    console.log("Math.pow("+a+","+b+") = " + Math.pow(a,b));
    console.log("Math.random() = " + Math.random()); //0<=n<1
    console.log("Math.sqrt("+f+") = " + Math.sqrt(f)); //raiz cuadrada

    //0<=n<10
    console.log("Math.random() = " + Math.random()*10);

    //0<=n<=10
    console.log("Math.random() = " + Math.round(Math.random()*10));
    console.log("Math.random() = " + Math.floor(Math.random()*11));

    //1<=n<=10
    console.log(Math.ceil(Math.random()*10));

    //20<=n<=60
    console.log(Math.round(Math.random()*(60-20)+20));
}