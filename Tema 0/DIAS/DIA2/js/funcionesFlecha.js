"use strict"

function sumar1 (n1,n2){
    return n1+n2;
}
//DECLARACION NORMAL DE UNA FUNCION
const sumar2 = function(n1,n2){
    return n1+n2;
}
//Funcion FLECHA EQUIVALENTE (se usa const o let)
const sumar3 = (n1,n2) => n1+n2;

//LLAMADA A FUNCION NORMAL
let r = sumar1(10,20);
console.log(r);

//LLAMADA A FUNCION NORMAL
r = sumar2(10,20);
console.log(r);

r = sumar3(10,20);
console.log(r);

const sumar4 = (n1,n2,n3) => {
    console.log("funcion flecha con mas de una linea de codigo");
    let r = 0;
    r+=n1;
    r+=n2;
    r+=n3;
    return r;
}
console.log(sumar4(10,20,30));

//OTRO EJEMPLO
//Funcion normal
const aprendiendo = function(javascript){
    console.log(`Aprendiendo ${javascript}`)
}
aprendiendo("cualquier cosa");

//Transformacion a funcion flecha
const aprendiendo2 = javascript => console.log(`Aprendiendo ${javascript}`);
aprendiendo("cositas");
