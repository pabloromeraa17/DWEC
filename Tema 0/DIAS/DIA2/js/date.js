"use strict"
/**
 * https://lenguajejs.com/javascript/fechas/date-fechas-nativas/
 */
{
    let fecha =  new Date(); //fecha actual
    console.log(fecha);

    let fecha2 = new Date("1979/05/30 14:32:15");
    console.log(fecha2);
        //new Date(año mes dia hora min seg ms)
    let fecha3 = new Date(1975,5,30,14,30,15,0);
    console.log(fecha3);

    let fecha4 = new Date(1979,4,30);
    console.log(fecha4);

    let fecha5 =  new Date("05/30/1979");
    console.log(fecha5);

    console.log(fecha3.getDay()); //Dia de la semana
    console.log(fecha3.getDate()); //dia del mes
    console.log(fecha3.getMonth()); //mes
    console.log(fecha3.getYear()); //El año desde 1900
    console.log(fecha3.getFullYear()); //año completo
    console.log(fecha3.getHours()); //hora
    console.log(fecha3.getMinutes());//minutos
    console.log(fecha3.getSeconds());//segundos
    console.log(fecha3.getMilliseconds());//milisegundos
    console.log(fecha3.getTime()); 
    console.log(fecha3.getTimezoneOffset());

    fecha3.setMonth(11);
    fecha3.setDate(31);
    fecha3.setFullYear(1999);
    fecha3.setHours(23);
    fecha3.setMinutes(13);
    fecha3.setSeconds(43);
    fecha3.setMilliseconds(234);
    console.log(fecha3);

    console.log(fecha3.toDateString());
    console.log(fecha3.toLocaleDateString());
    console.log(fecha3.toGMTString());
    console.log(fecha3.toUTCString());

    let fecha6 = new Date(1979,10,31);
    fecha6.setDate(fecha6.getDate()+1);
    console.log(fecha6.toLocaleDateString());

    let fecha7 = new Date(2021,11,11,31,23,59,59);
    fecha7.setSeconds(fecha7.getSeconds()+1);
    console.log(fecha6.toString());
}