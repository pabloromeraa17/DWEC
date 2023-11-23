"use strict"
/**
 * Realiza un programa para implementar el juego de piedra, papel y Tijera en el modo de un jugador contra otro.
La entrada de datos se realizará mediante prompt y ganará la partida aquel jugador que gane cinco jugadas y el programa terminará mostrando un resumen de la partida.
Después de cada jugada debes mostrar un console.log con información sobre: número de jugadas, jugadas ganadas por J1, jugadas ganadas por J2 y jugadas empatadas y, finalmente,
 quién ha ganado la partida o, en su caso, empatado.
Calificación:

El programa hace TODO lo que se pide: 8p
Usa funciones y son de tipo flecha: 1p
Es eficiente y aplica conceptos vistos en clase que no son los típicos: 1p
 */
{
    console.log("Introduzca piedra, papel o tijeras");
    let victj1 = 0;
    let victj2 = 0;
    let empate = 0;
    let jugada = 1;
    function piedraPapelTijeras (){
            for(let i = 0; i<5; i++){
                let j1 = String (prompt ("Introduzca su opcion jugador 1"));
                while(j1 !== "piedra" && j1 !== "papel" && j1 !== "tijeras"){
                    j1 = String(prompt("Introduzca 'piedra', 'papel' o 'tijeras'"));
                }

                let j2 = String (prompt ("Introduzca su opcion jugador 2"));
                while(j2 !== "piedra" && j2 !== "papel" && j2 !== "tijeras"){
                    j2 = String(prompt("Introduzca 'piedra', 'papel' o 'tijeras'"));
                }

                if(j1 == "piedra" && j2 == "tijeras"){
                    victj1++;
                } else if(j1 == "piedra" && j2 == "papel"){
                    victj2++;
                } else if(j1 == "piedra" && j2 == "piedra"){
                    empate++;
                } 
                
                else if(j1 == "papel" && j2 == "piedra"){
                    victj1++;
                } else if(j1 == "papel" && j2 == "tijeras"){
                    victj2++;
                } else if(j1 == "papel" && j2 == "papel"){
                    empate++;
                }

                else if(j1 == "tijeras" && j2 == "piedra"){
                    victj2++;
                }else if(j1 == "tijeras" && j2 == "papel"){
                    victj1++;
                }else if(j1 == "tijeras" && j2 == "tijeras"){
                    empate++;
                }

                console.log("Numero de jugadas: "+jugada);
                jugada++;
                console.log("Jugadas ganadas por jugador 1: "+victj1);
                console.log("Jugadas ganadas por jugador 2: "+victj2);
                console.log("Jugadas empatadas: "+empate);
                if((victj1 || victj2) == 3){
                    break;
                }
            }

        if(victj1 > victj2){
            console.log("Ganador de la partida es el jugador 1");
        } else if (victj2 > victj1) {
            console.log("Ganador de la partida es el jugador 2");
        } else {
            console.log("La partida ha quedado empatada");
        }
    }

    piedraPapelTijeras();
}