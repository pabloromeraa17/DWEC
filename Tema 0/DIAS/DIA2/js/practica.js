/*
1. Dado un vector de objetos literales con el siguiente formato: {nombreCompleto:”Ana Pérez
Soler”, DNI: “21147465T”, edad: 21}:
*/
"use strict"
/**
a. Crea una función que reciba como parámetro el array original y devuelva un array
con los identificadores de los usuarios. Para ello debes coger la primera letra
(minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
(minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
tienen tres o más caracteres.
*/
let arrObj = [
{nombre:"Ana Pérez Soler", DNI: "21147465T", edad: 4},
{nombre:"Álvaro García Castro", DNI: "24545535G", edad: 32},
{nombre:"Paloma González Máxim", DNI: "45678912L", edad: 9},
{nombre:"Alberto Alguacil Alcalde", DNI: "79753330W", edad: 17}
]

{
  function identificadores(array){
    let arrayid = [];
    
    array.map(element => {
      //let reg = /áéíóú/i;
      let separado = element.nombre.toLowerCase().replaceAll("á","a").replaceAll("é","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u").split(" ");
      let id=separado[0].slice(0,1)+separado[1].slice(0,3)+separado[2].slice(0,3)+element.DNI.substring(5,8);
      arrayid.push(id);
    });
    return arrayid;
  };
  console.log(identificadores(arrObj));
}
/*
b. Crea una función que reciba como parámetro el array original y devuelva un array
con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
minúscula pero no tienen un separador entre número y letra. Usa la función filter y
map. (3p)
*/
{
  function b(array){
    let array2 = [];
    let RegExp = /^[0-9]{8}[A-Z]{1}$/;
    let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    let ValidDni = array.filter((element) => RegExp.test(element.DNI));
    
    ValidDni.map(element => {
      let letra = element.DNI.toUpperCase().charAt(8);
      let dni = Number (element.DNI.substring(0,8));
      /*if((dni%23 == 0 && letra == "T") || (dni%23 == 1 && letra == "R") || (dni%23 == 2 && letra == "W") || (dni%23 == 3 && letra == "A") ||
       (dni%23 == 4 && letra == "G") || (dni%23 == 5 && letra == "M") || (dni%23 == 6 && letra == "Y") || (dni%23 == 7 && letra == "F") ||
        (dni%23 == 8 && letra == "P") || (dni%23 == 9 && letra == "D") || (dni%23 == 10 && letra == "X") || (dni%23 == 11 && letra == "B") ||
         (dni%23 == 12 && letra == "N") || (dni%23 == 13 && letra == "J") || (dni%23 == 14 && letra == "Z") || (dni%23 == 15 && letra == "S") || 
         (dni%23 == 16 && letra == "Q") || (dni%23 == 17 && letra == "V") || (dni%23 == 18 && letra == "H") || (dni%23 == 19 && letra == "L") || 
         (dni%23 == 20 && letra == "C") || (dni%23 == 21 && letra == "K") || (dni%23 == 22 && letra == "E"))
      {
        array2.push(element.DNI);
      }
      */
      if(letras[dni%23] == letra)
      {
        array2.push(element.DNI);
      }
    });
    return array2;
  };
  console.log(b(arrObj));
}
/*
c. Crea una función que reciba como parámetro el array original y devuelva un array
con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
(2p)
*/
{
  function mayorAmenor(array){
    let array3 = array.sort((a, b) => b.edad - a.edad);
    return array3;
  };
  console.log(mayorAmenor(arrObj));
}
/*
d. Crea una función que reciba como parámetro el array original y devuelva un array
con las edades que sean números casi primos (es un número que solo es divisible
por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
Usa la función filter y map. (2p)
*/
{
  function casiPrimos(array){
    let array4 = [];
    array.map(element => {
    let count = 0;
      for(let i = 1; i <= element.edad; i++){
        if(element.edad%i == 0){
          count++;
        }
      }
      if(count == 3){
          array4.push(element.edad);
      }
    });
    return array4
  }
  console.log(casiPrimos(arrObj));
}
/*

Ejemplo.
Entrada:
[{nombre:”Ana Pérez Soler”, DNI: “21147465T”, edad: 4},
{nombre:”Álvaro García Castro”, DNI: “24545535G”, edad: 32},
{nombre:”Paloma González Máxim”, DNI: “45678912L”, edad: 9},
{nombre:”Alberto Alguacil Alcalde”, DNI: “79753330W”, edad: 17}
]
Salida:
A: [“apersol465”,”agarcas535”,”pgonmax912”,”aalgalc330”]
B: [“21147465T”,” 24545535G”,” 79753330W”]
C: [{nombre:”Álvaro García Castro”, DNI: “24545535G”, edad: 32},{nombre:”Alberto Alguacil
Alcalde”, DNI: “79753330W”, edad: 17},{nombre:”Paloma González Máxim”, DNI: “45678912L”,
edad: 9},{nombre:”Ana Pérez Soler”, DNI: “21147465T”, edad: 4}]
D: [9,4]
*/