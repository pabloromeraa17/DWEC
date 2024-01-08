"use strict"
{
    /**
     * "variable=valor;expires=fecha_expiración;path=/"
     */
    function setCookie (nombreCookie, valorCookie, diasExpiracion) {
        let fechaActual = new Date();
        fechaActual.setTime(fechaActual.getTime() + (diasExpiracion*24*60*60*1000)); // los dÃ­as de expiraciÃ³n los pasa a milisegundos
        let expires = "expires="+fechaActual.toUTCString();
        let nuevaCookie = nombreCookie + "=" + valorCookie + ";" + expires + ";path=/";
        //console.log(nuevaCookie);
        document.cookie = nuevaCookie; // Para almacenar la cookie en el navegador
    }

    function getCookie(cname) { 
        let name = cname + "=";
        let ca = document.cookie.split(';'); // convierte el string con todas las cookies que tenga la pÃ¡gina (estÃ¡n separadas por ;) a [] con todas las cookies
        //console.log(ca); // [cookie1=valor1, cookie2=valor2, ...]
        for(let i = 0; i < ca.length; i++) { // tiene 3 elementos ['nombre=Federico', 'edad=34', 'altura=178']
            let c = ca[i];
            //console.log(c); // escribe el valor de la cookie
            while (c.charAt(0) == ' ') { // eliminar espacios que pueda haber por delante
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) { // comprueba si es la cookie buscada
                return c.substring(name.length, c.length); // devuelve el valor
            }
        }
        return "";
    }

    function deleteCookie(cname) { 
        document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/'; 
    }

    console.log("Ejemplo 1");
    setCookie("edad", 17, 10);
    setCookie("altura", 174, 12);
    console.log(document.cookie);

    console.log("Ejemplo 2");
    console.log(getCookie("edad"));
    console.log(getCookie("altura"));
    console.log(getCookie("colorPelo"));
}