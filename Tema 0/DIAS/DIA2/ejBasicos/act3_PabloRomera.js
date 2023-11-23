"use strict"
/**
 * Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo
 */

function horaPasada(hor,min,seg){
    let res="";
    const hora=hor;
    const minutos=min;
    const segundos=seg;
    
    let nseg = segundos+1;
    let nmin = minutos;
    let nhor = hora;

    if((nseg)>59){
        nseg = 0;
        nmin+=1;
        if((nmin)>=60){
            nmin=0;
            nhor+=1;
            if(nhor >= 24){
                nhor = 0;
            }
        }
    }
    
    res=(nhor+":"+nmin+":"+nseg);
    return res;
}
console.log(horaPasada(3,59,59));