"use strict"
{//MANEJO DE ERRORES CON TRY CATCH THROW NEW
        console.log("EJEMPLO1: TRY-CATCH-FINALLY");
        try{
            //EJEMPLO1 NO HAY ERROR
            let a = 5, b=0;
            let c = a/b;
            console.log("el resultado es "+c);

            //EJEMPLO 2 SI HAY ERROR
            const v = [1,2,3];
            v=[1,2,3,4];
            console.log("mi vector es "+v);

        } catch (error){
            console.log("Catch, captura cualquier error");
            console.log (error);
        }finally{
            console.log("Estoy en el finally que siempre se ejecuta");
        }
        
}
{
    console.log("EJEMPLO2: TRY-CATCH-FINALLY - THROW NEW");
    try {
        let numero;
        numero = prompt("introduce un numero: ","y");
        if(isNaN(numero)){
            throw new Error("El caracter no es un numero");
        }
        console.log(numero*numero);
    } catch (error) {
        console.log(`Se produjo en siguiente error : ${error}`);
        console.log();
        console.log();
    }
}