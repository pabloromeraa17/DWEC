"use strict"

//CADENAS
//Pueden ser el tipo primitivo String u objetos String; son equivalentes.

let miCadena = "Pablo:fasfe";
let miCadena2 = new String ("erqwerfds");
console.log(miCadena);
console.log(miCadena2);
console.log("En minusculas: "+ miCadena.toLowerCase());
console.log("En mayusculas: "+ miCadena.toUpperCase);
console.log("Caracter en posicion x: "+ miCadena.charAt(0));
console.log("1ª posicion donde hay dos puntos (:) "+miCadena.indexOf(":",0));
console.log("Ultima posicion donde se encuntra un caracter (:) "+miCadena.lastIndexOf(":",miCadena.length));
console.log("Para remplazar primer caracter "+miCadena.replace("a","t"));
console.log("Para remplazar todos los caracteres "+miCadena.replaceAll("a","t"));

let todosLosTrozos = miCadena.split(":");
console.log(todosLosTrozos);

console.log("Subcadena: "+ miCadena.substring(0,miCadena.indexOf(":")));
console.log(miCadena.includes("per")? "si":"no");

let miCadenaConEspacios = new String("      dfsdsa     ");
console.log("Cadena sin espacios: "+ miCadenaConEspacios.trim());