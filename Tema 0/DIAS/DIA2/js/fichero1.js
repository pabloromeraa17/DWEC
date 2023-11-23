"use strict"
{
    //OPERADOR CONDICIONAL TERNARIO
    let a=7, b=10;
    console.log(a<b? "a es menor que b":"a no es menor que b");
}
{
    let num1=5, num2=8,resultado1, resultado2;
    resultado1=((num1+num2)*200)/100;
    console.log(resultado1);//26
    resultado2=resultado1%3;
    console.log(resultado2);//2
    resultado1=++num1;
    console.log(resultado1);//6
    resultado2=num2++;
    console.log(resultado2);//8
    resultado1=--num1;
    console.log(resultado1);//5
    resultado2=num2--;
    console.log(resultado2);//9
    resultado1=-resultado2;
    console.log(resultado1);//-9
}
{
    let x=5,y;
    y=++x; // x=6 y=6 1º incrementa y luego asigna el valor a y
    y=x++; //x=6 y y=5 1º asigna a y el valor inicial de x y luego incrementa el valor de x
    y=--x; //x=4 y=4
    y=x--; //x=4 y=5
    y=-x; //x=5 y =-5
}
{
    //OPERADORES DE ASIGNACION
    let num1=3;
    let num2=5;
    num2+=num1;//8
    num2-=num1;//5 (8 de antes que se guarda menos 3)
    num2*=num1;//15
    num2/=num1;//5
    num2%=num1;//2
}
{
    console.time("Tiempo"); //Misma etiqueta en principio y final "Tiempo" en este caso
    const array = new Array(1000000);
    for(let i=0;i<array.length;i++){
        array[i]=i;
    }
    console.timeEnd("Tiempo");
}
{/** 
    let provincia;
    provincia=prompt("Introduzca la provincia ","Sevilla");
    alert("Usted ha introducido la siguiente información "+provincia);
    console.log("Operación realizada con éxito");
*/
}
{
    /**let respuesta;
    respuesta = confirm("Eres del betis");
    alert ("Ha respondido usted que "+respuesta);
    */
}
{
    let a=10;
    console.log(a);
}
{
    let num="100"; //Es una cadena
    let num2="100.13"; //Es una cadena
    let num3=11; // Es un entero
    let n=parseInt(num); // Almacena un entero. Si hubiera habido parte decimal la truncará
    let n2=parseFloat(num); // Almacena un decimal
    let n3=num3.toString(); // Almacena una cadena
    console.log("n: "+n+ " n2: "+n2+" n3: "+n3);
}
{
    let arr = [ "1", "10", "100", "1000" ];
    for(let i=0; i < arr.length && arr[i] < 500; i++){
        console.log(i);
    }
    var x = "10";
    var y = "9";
    console.log(x < y); // true, los dos son String y los compara como cadena
}
{
    let a = "2", b = 10;
    console.log( typeof a + " y " + typeof b); // string number
    let c = a + b;
    console.log( c ); //12
}
{
    //COPIAS DE ARRAY CON SPREAD ...
    let array1 = [1,2,3];
    let array2 = [...array1];
    array1.push(4);
    console.log("Array 1: "+array1);//[1,2,3,4]
    console.log("Array 2: "+array2);//[1,2,3]

    //HACIENDO REFERENCIA
    let arr1 = [1,2], arr2;
    arr2 = arr1; ///ESTA ASIGNANDO REFERENCIA
    arr1.push (3);//AÑADE ELEMENTO AL FINAL DE LA ARRAY
    console.log("arr1:"+arr1+" y arr2: "+arr2);

    //COPIA DE VARIABLE
    let a, b;
    b=a;
    a=10;
    console.log("a:"+a+" y b:"+b);

    let edad = 7;
    console.log(typeof edad);
}
{
    let nombre = "Juan";
    let email = "123@gmail.com";
    // Concatenación
    console.log("Nombre Cliente: " + nombre + " Email: " + email);
    // Template Strings - String Literals
    console.log(`Nombre Cliente: ${nombre} Email: ${email}`);
}

/** 
{
    const miArray=[1,2,3]
    console.log(miArray[0]); // Muestra el valor 1
    miArray[0]=4;
    console.log(miArray[0]); // Muestra el valor 4
    miArray=[]; // Esto falla
}
*/

/** 
{
    function ejemplo(){
        ejemplo=3; // Equivale a declararla fuera de la funcion como var
        if (ejemplo === 3){
        var variable1 = 1;
        let variable2 = 2;
        }
        console.log(variable1); // variable1 existe en este lugar
        console.log(variable2); // variable2 no existe en este lugar
        }
        ejemplo();
}
*/
