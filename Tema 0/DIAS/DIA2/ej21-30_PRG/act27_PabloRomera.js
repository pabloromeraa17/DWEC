"use strict"
/**
 * En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no.
 */
{
    let vector = [-2,1,-3,2,3,4,5,6];
    //El número de elementos del vector.
    console.log("Numero de elementos del vector: "+vector.length);
    console.log("");
    //Cuántos son pares y cuántos impares y cuáles son.
    let pares = [];
    let impares = [];

    let contadorpar = 0;
    let contadorimpar = 0;

    for(let i = 0; i<vector.length;i++){
        if(vector[i]%2 == 0){
            pares[contadorpar] = vector[i];
            contadorpar++;
        }
        if(vector[i]%2 != 0){
            impares[contadorimpar] = vector[i];
            contadorimpar++;
        }
    };

    console.log("Hay "+pares.length+" pares y son "+pares.toString());
    console.log("Hay "+impares.length+" impares y son "+impares.toString());
    console.log("");
    //La suma de todos los números negativos.
    let sumaNegativos = 0;
    for(let i = 0; i<vector.length;i++){
        if(vector[i] < 0){
            sumaNegativos += vector[i];
        }
    };
    console.log("La suma de los numeros negativos es = "+sumaNegativos);
    console.log("");
    //El producto de todos los números positivos.
    let productoPositivos = 1;
    for(let i = 0; i<vector.length;i++){
        if(vector[i] > 0){
            productoPositivos *= vector[i];
        }
    };
    console.log("El producto de los numeros positivos es = "+productoPositivos);
    console.log("");
    //Cuántos son primos y cuáles son.
    let primos=[];
    let noPrimos = [];
    let contadorPrimo = 0;
    let contadorNoPrimo = 0;

    for(let i = 0; i<vector.length;i++){
        let suma = vector[i]+1;
        let res=0;
        for(let j = 0; j<=vector[i];j++){
            if(vector[i]%j == 0){
                res += j;
            }
        }
        if(res == 1){
            res +=1;
        }
        if (suma != res){
            // console.log("El numero "+ vector[i] +" no es primo");
            noPrimos[contadorNoPrimo] = vector[i];
            contadorNoPrimo++;
        } else if(suma == res){
            // console.log("El numero "+ vector[i] +" es primo");
            primos[contadorPrimo] = vector[i];
            contadorPrimo++;
        }
    };

    console.log("Hay "+primos.length+" primos y son "+primos.toString());
    console.log("Hay "+noPrimos.length+" no primos y son "+noPrimos.toString());
    console.log("");
    //Los números que ocupan las posiciones pares del vector.

    // console.log("Numeros en posiciones pares")
    // for(let i = 0; i<vector.length;i++){
    //     if(i%2 == 0){
            
    //         console.log(vector[i]);
    //     }
    // };

    vector.forEach((elem,indice) => {
        if(indice%2 == 0){
            console.log(elem+" ocupa la posicion "+indice)
        }
    }
    );
    console.log("");
    //El número mayor.
    let ordenado = vector.sort();
    console.log("El numero mayor es "+ordenado[ordenado.length-1]);
    console.log("");

    //El número menor.
    console.log("El numero menor es "+ordenado[0]);
    console.log("");

    /**La media de todos los números, los números que están por encima y los que están por
    debajo. */
    let suma = 0;
    vector.forEach(elem => {
        suma += elem;
    });
    let media = suma/vector.length;
    console.log("La media es de "+media);
    
    let porEncima = [];
    let porDebajo = [];
    let igual = [];
    let contadorEncima = 0;
    let contadorDebajo = 0;
    let contadorigual = 0;

    for(let i = 0; i<vector.length;i++){
        if(vector[i] > media){
            porEncima[contadorEncima]=vector[i];
            contadorEncima++;
        }
        else if(vector[i] < media){
            porDebajo[contadorDebajo]=vector[i];
            contadorDebajo++;
        }
        else{
            igual[contadorigual] = vector[i];
            contadorigual++;
        }
    };
    console.log("Hay "+porEncima.length+" numeros por encima de la media y son "+porEncima.toString());
    console.log("Hay "+porDebajo.length+" numeros por debajo de la media y son "+porDebajo.toString());
    console.log("Hay "+igual.length+" numeros igual que la media");
    console.log("");

    //El vector ordenado de mayor a menos y viceversa.
    console.log("El vector ordenado de mayor a menor es "+ vector.sort( (a,b) => b-a ));
    console.log("El vector ordenado de menor a mayor es "+ vector.sort( (a,b) => a-b ));
    console.log("");

    //Buscar un valor introducido por el usuario e indicar si existe o no.
    let pedido = prompt("Introduce un valor",0);
    let existe = vector.some(elem => elem == pedido);
    console.log("El valor es "+existe);
}