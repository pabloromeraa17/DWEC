"use strict"
//FUNCIONES RECURSIVAS
//EJEMPLO 1: CUENTA ATRÁS RECURSIVA USANDO UNA FUNCIÓN RECURSIVA NORMAL

function cuentaAtras1 (n) {
    //caso base
    if (n==0){
        console.log(0);
        return;
    } else{ //caso recursivo
        console.log(n);
        return cuentaAtras1 (n-1);
    }
}

console.log("Llamda cuentaAtras1");
cuentaAtras1(5);

const cuentaAtrasFlecha = (n) => {
    if (n==0){
        console.log(0);
        return;
    } else{ //caso recursivo
        console.log(n);
        return cuentaAtras1 (n-1);
    }
}
console.log("Llamda cuentaAtrasFlecha");
cuentaAtrasFlecha(5);

//EJEMPLO CUENTA ATRAS RECURSIVA FLECHA PARA DECIR SI EL NUMERO ES PAR O IMPAR
const cuentaAtrasFlecha2 = (n) => {
        if(n == 0){
            console.log(n);
            return "PAR";
        } else if (n == 1) {
            console.log(n);
            return "IMPAR";
        } else {
            console.log (n);
            return cuentaAtrasFlecha2(n-2);
        }
}
console.log("Llamada cuentaAtrasFlecha2");
console.log(cuentaAtrasFlecha2(5));