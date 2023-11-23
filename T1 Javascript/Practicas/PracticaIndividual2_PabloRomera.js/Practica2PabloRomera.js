"use strict"
/**
 * Realiza el juego del tres en raya para jugar un jugador (J1) contra otro jugador (J2) o un jugador (J1) contra la máquina (M) (usando números aleatorios). Debes permitir ambas posibilidades. 

Al principio del juego debes preguntar si el juego es: J1 vs J2 ó J1 vs M.

Usa un array bidimensional de 3x3 donde el 0,0 sea la esquina superior izquierda y el 2,2 sea la esquina inferior derecha. Puede estar inicializado con el carácter '-'.

Para jugar, J1 usará el carácter 'X' y J2 (o M) usará el carácter 'O'.

Debes preguntar alternativamente a cada jugador a ver en qué posición quiere poner su ficha (debes preguntar por la fila (0, 1, ó 2) y la columna (0, 1 ó 2)), y colocarle la 'X' o la 'O'.

Después de que un jugador coloque su ficha, debes mostrar cómo queda la partida en ese momento; esto es, debes mostrar el array bidimensional (o una representación de él)

Para saber qué jugador ha ganado la partida, cada vez que un jugador coloque su ficha debes comprobar si la partida ha terminado, encontrando un tres en raya de 'X' o de 'O'.

Cuando un jugador gane la partida, debes mostrar un mensaje indicando que el jugador (J1, J2 o M) ha ganado.

En el siguiente ejemplo, ha ganado J2 (o M) porque ha conseguido colocar tres 'O' en línea.

[[0,-,0]]

[[X,0,X]]

[[X,X,0]]



+++++++++++++++++++++

Puntuación:

- Si no funciona: 

      0p.

- Si sí funciona: {

      - Si hace todo lo que se pide: {

            8p.

            Si, además, estructuras el código en funciones: +1p.

            Si, además, es eficiente y aplica conceptos vistos en clase que no son los típicos: +1p.

      } else {

            a 8p se le van restando puntos.

      }

}
 */
{   
    // Funcion con la cual pedimos si va a ser 1 jugador contra otro o contra la maquina
    function modoJuego(){
        let respuesta = String (prompt ("¿El juego va a ser entre 2 jugadores (2J) o 1 jugador contra la máquina (M)","2J"));
        while(respuesta != "2J" && respuesta != "M"){
            respuesta = String (prompt ("Por favor Introduzca 2J o M"));
        }
    }
    console.log(modoJuego());

    let nfilas = 3;
    let ncolumnas = 3;
    let arrayBi = Array.from(Array(3), () => new Array(3));
    function pintarTableroAlPrincipio(){
        for(let i = 0; i<nfilas;i++){
            for(let j = 0; j < ncolumnas; j++){
                arrayBi[i][j] = "-" ;
            }
        }
        return arrayBi;
    }
    console.log(pintarTableroAlPrincipio());



    let filaj1;
    let colj1;
    function respuestaj1(){
        filaj1 = prompt("Introduzca numero del 0 al 2 para la fila");
        while(filaj1 != 1 && filaj1 != 0 && filaj1 != 2){
            filaj1 = prompt("Introduzca numero del 0 al 2 para la fila por favor");
        }

        colj1 = prompt("Introduzca numero del 0 al 2 para la columna");
        while(colj1 != 1 && colj1 != 0 && colj1 != 2){
            colj1 = prompt("Introduzca numero del 0 al 2 para la fila por favor");
        }

        while (arrayBi[filaj1][colj1] == "O" || arrayBi[filaj1][colj1] == "X"){
            alert("Introduzca una fila y columna que no esté ocupada");
            filaj1 = prompt("Introduzca numero del 0 al 2 para la fila");
            colj1 = prompt("Introduzca numero del 0 al 2 para la columna");
        }

        arrayBi[filaj1][colj1] = "X";
    }

    let filaj2;
    let colj2;
    function respuestaj2(){
        filaj2 = prompt("Introduzca numero del 0 al 2 para la fila");
        while(filaj2 != 1 && filaj2 != 0 && filaj2 != 2){
            filaj2 = prompt("Introduzca numero del 0 al 2 para la fila por favor");
        }

        colj2 = prompt("Introduzca numero del 0 al 2 para la columna");
        while(colj2 != 1 && colj2 != 0 && colj2 != 2){
            colj2 = prompt("Introduzca numero del 0 al 2 para la fila por favor");
        }

        while (arrayBi[filaj2][colj2] == "O" || arrayBi[filaj2][colj2] == "X"){
            alert("Introduzca una fila y columna que no esté ocupada");
            filaj2 = prompt("Introduzca numero del 0 al 2 para la fila");
            colj2 = prompt("Introduzca numero del 0 al 2 para la columna");
        }
        
        arrayBi[filaj2][colj2] = "O";
    }


    function comprobarVictoria(){
        if((arrayBi[0][0] == "O" &&  arrayBi[0][1] == "O" && arrayBi[0][2] == "O") || (arrayBi[0][0] == "O" &&  arrayBi[1][1] == "O" && arrayBi[2][2] == "O") 
        || (arrayBi[0][0] == "O" &&  arrayBi[1][0] == "O" && arrayBi[2][0] == "O") || (arrayBi[2][0] == "O" &&  arrayBi[2][1] == "O" && arrayBi[2][2] == "O") 
        || (arrayBi[0][2] == "O" &&  arrayBi[1][2] == "O" && arrayBi[2][2] == "O") || (arrayBi[2][0] == "O" &&  arrayBi[1][1] == "O" && arrayBi[0][2] == "O")){
            console.log("Ganador jugador 1");
        }
        else if((arrayBi[0][0] == "X" &&  arrayBi[0][1] == "X" && arrayBi[0][2] == "X") || (arrayBi[0][0] == "X" &&  arrayBi[1][1] == "X" && arrayBi[2][2] == "X") 
        || (arrayBi[0][0] == "X" &&  arrayBi[1][0] == "X" && arrayBi[2][0] == "X") || (arrayBi[2][0] == "X" &&  arrayBi[2][1] == "X" && arrayBi[2][2] == "X") 
        || (arrayBi[0][2] == "X" &&  arrayBi[1][2] == "X" && arrayBi[2][2] == "X") || (arrayBi[2][0] == "X" &&  arrayBi[1][1] == "X" && arrayBi[0][2] == "X")){
            console.log("Ganador jugador 2");
        }
    }

    for(let i = 0; i < 6; i++){
        function partidaEnJuego2J(){
            respuestaj1();
            respuestaj2();
            comprobarVictoria();
            console.log(arrayBi);
        }
        console.log(partidaEnJuego2J());
    }
}