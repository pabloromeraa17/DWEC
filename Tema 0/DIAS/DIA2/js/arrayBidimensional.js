"use strict"
{
    //Forma 1
    let arrayBi1 = new Array();
    arrayBi1[0] = [1,2,3,4,5];
    arrayBi1[1] = [2,3,4,5,6];
    arrayBi1[2] = [3,4,5,6,7];

    arrayBi1[2][4] = 9;
    console.log(arrayBi1);

    //Forma 2
    let nfilas = 2;
    let ncolumnas = 4;
    let arrayBi2 = new Array(nfilas);
    for (let i = 0; i< nfilas; i++){
        arrayBi2[i] = new Array(ncolumnas);
    }
    console.log(arrayBi2);

    //Rellenar con ceros
    for(let i = 0; i<nfilas;i++){
        for(let j = 0; j < ncolumnas; j++){
            arrayBi2[i][j] = 0;
        }
    }
    console.log(arrayBi2);

    //Forma 3
    let arrayBi3 = Array.from(Array(2), () => new Array(4));
    console.log(arrayBi3);

    for(let i = 0; i<nfilas;i++){
        for(let j = 0; j < ncolumnas; j++){
            arrayBi3[i][j] = 0;
        }
    }
    console.log(arrayBi3);
}