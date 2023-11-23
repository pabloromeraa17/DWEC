"use strict"
/**
 *  Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800
 */
{
    function realizaDescuentos(precio,dto){
        let operacion = (precio*dto)/100;
        let resultado = precio-operacion;
        console.log("El precio con descuento es de "+resultado);
    }
    console.log(realizaDescuentos(1000,20));
}