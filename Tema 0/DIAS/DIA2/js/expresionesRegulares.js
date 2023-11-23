"use strict"
//EXPRESIONES REGULARES
// /source/flag

//Con notacion literal
const exp = /A..../i; //La i es para no tener en cuenta mayusculas y minusculas
const r = /.a.o/i;

console.log(exp.sourse);
console.log(exp.flags);

console.log(r.source);
console.log(r.flag);

console.log(r.flags.includes("g"));
console.log(r.flags.includes("i"));
console.log(r.flags.includes("m"));
console.log(r.flags.includes("u"));
console.log(r.flags.includes("s"));

//Con palabra completa 
console.log(r.global);
console.log(r.ignoreCase);
console.log(r.multiline);
console.log(r.unicode);
console.log(r.sticky);

const r4 = new RegExp(".a.o","i")
console.log(r4.test("MALO"));
console.log(r4.test("GaTo"));
console.log(r4.test("pato"));
console.log(r4.test("Perro"));

//CARACTERS ESPECIALES
// . -> caulquier caracter
const r5 = new RegExp("A\.B", "i");
// \ -> invierte el significado del caracter. Si es especial lo escapa, si no lo vuelve
//[] --> rango de caracteres. Cualquiera de los caracteres del interior
const r6 = new RegExp("[A-Z].","i");
console.log(r6.test("X5"));

// [^] --> no existen los caracteres del interior del corchete
const r7 = new RegExp("[^0-9][a-z]","i");
console.log(r7.test("aB"));

// | --> Alternativa lo que esta a la izquierda o lo que esta a la derecha
// [ \t\r\n\f] --> exista espacio, tabulador, retorno carro, salto de linea
// * --> el caracter anterior aparece 0 o mas veces
// + --> el caracter anterior aparece 1 o mas veces
// ? --> el caracter anterior puede aparecer o no
// {n} --> el caracter aparece n veces
// {n,} --> el caracter aparece n o mas veces

//ANCLAS
// ^ -> al principio
//^A[0-9]{4}Z$ // Empieza por A y termina por Z con 4 numeros por medio
// $ --> al final
// \b --> si el texto esta seguido por espacio, punto,coma al principio o al final
// \B --> lo contrario a \b

//EXEC
console.log("Exec");
const r8 = /\b([a-z]{3})\b/gi;
const str = "Hola a todos, amigos míos. Esto es una prueba que permitira ver que funciona";
r8.global;//true el flag global esta activado
console.log(r8.exec(str));
console.log(r8.exec(str));
console.log(r8.exec(str));
console.log(r8.exec(str));
console.log(r8.exec(str));

const r9 = /\.\b/i;
console.log(r9.exec(str));

//STRING.MATCH
console.log(str.match(r8));

//String.REPLACE
const r10 = "JavaScript es un gran lenguaje";
console.log(r10.replace(/[aeou]/g, "i"));
console.log(r10.replace(/gran/g, ""));
