"use strict"
/**
 * 
 */
{
    // let id = setInterval(f,1000);//se ejecuta siempre cada seg
    // function f (){
    //     console.log("Me llaman");
    // }

    // setTimeout(f2, 2000); //se ejecuta una vez cuando pasen 2 seg
    // function f2 (){
    //     console.log("Hola");
    // }
    
    
    document.write("<p>Botones del temporizador</p>");
    document.write("<p><button id='START'>START</button></p>");
    document.write("<p><button id=\"STOP\">STOP</button></p>");
    document.getElementById("START").addEventListener("click", comenzarTemporizador);
    document.getElementById("STOP").addEventListener("click", pararTemporizador);
    let idTempo;
    function comenzarTemporizador(){
        idTempo = setInterval(() => {console.log(new Date())}, 1000);
    }

    function pararTemporizador(){
        clearInterval(idTempo);
    }
}