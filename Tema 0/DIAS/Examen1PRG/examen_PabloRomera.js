/**
 * EJERCICIO 1:
Crea una función que reciba como parámetro el array original y devuelva un array con los
identificadores de los usuarios.
Un identificador está compuesto por:
- La primera letra (minúsculas y sin tildes) del nombre
- Las tres primeras letras del primer apellido (minúsculas y sin tildes)
- Las tres primeras del segundo apellido (minúsculas y sin tildes)
- Los tres últimos dígitos del DNI.
Usa la función map. (máximo 3p) (si no usas map, máximo 2p).
NOTA: Se entiende que siempre existe el nombre y los dos apellidos, y ninguno de ellos es
compuesto. Además, todos tienen, al menos, 3 caracteres. Y están separados por un espacio.
 */
let arrObjetos = [
        {nombre: "Ana Márquez Sete", DNI: "21147465T", edad: 9},
        {nombre: "Álvaro García Molina", DNI: "24545535G", edad: 32},
        {nombre: "Paloma González Mújica", DNI: "45678912L", edad: 4},
        {nombre: "Alberto García Álvarez", DNI: "79753330W", edad: 19}
    ]   
{
    function identificadores(array){
        let arrDev = [];
        array.map(element => {
            let separado = element.nombre.toLowerCase().replaceAll("á","a").replaceAll("é","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u").split(" ");
            let identificador = separado[0].slice(0,1)+separado[1].slice(0,3)+separado[2].slice(0,3)+element.DNI.substring(5,8);
            arrDev.push(identificador);
        });
        return arrDev;
    };
    console.log(identificadores(arrObjetos));
}
/**
 * - EJERCICIO 2:
Crea una función que reciba como parámetro el array original y devuelva un array con los DNI
que sean válidos.
Usa las funciones filter y map. (máximo 3p) (si no usas filter y map, máximo 2p)
NOTA: Los DNI pueden tener la letra en mayúscula o minúscula pero no tienen un separador
entre número y letra. 
 */
{
    function dniValido(array){
        let RegExp = /^[0-9]{8}[A-Z]{1}$/;
        let validarDni = array.filter(element => RegExp.test(element.DNI));
        let arrDev = [];
        let caracteres = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];      

        validarDni.map(element => {
            letra = element.DNI.charAt(8);
            numeros = Number(element.DNI.substring(0,8));
            if(caracteres[numeros%23] == letra){
                arrDev.push(element.DNI);
            };
        });
        return arrDev;
    }
    console.log(dniValido(arrObjetos));
}
/**
 * - EJERCICIO 3:
Crea una función que reciba como parámetro el array original y devuelva un array con los
objetos literales ordenados por edad de mayor a menor.
NOTA: Usar la función sort. (máximo 2p)
 */
{
    function mayorAmenor(array){
        let arrDev = [];
        arrDev = array.sort((a,b) => b.edad-a.edad);
        return arrDev;
    };
    console.log(mayorAmenor(arrObjetos));
}
/**
 * - EJERCICIO 4:
Crea una función que reciba como parámetro el array original y devuelva un array con las
edades que sean números casi primos (es un número que solo es divisible por sí mismo, la
unidad y por un solo número que no sea ni la unidad ni si mismo).
NOTA: Usa las funciones filter y map. (máximo 2p) (si no usas filter y map, máximo 1p)
 */
{
    function casiPrimos(array){
        let arrDev = [];
        array.map(element => {
            let count = 0;
            for(let i = 1; i <= element.edad; i++){
                if(element.edad%i == 0){
                    count++;
                }
            }
            if(count == 3){
                arrDev.push(element.edad);
            }
        });
       return arrDev
     }
     console.log(casiPrimos(arrObjetos));
};
    