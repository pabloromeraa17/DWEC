"use strict"
/**
 * 3. Realiza una web del tipo TODO list donde puedas ir guardando tareas y prioridad (alta, media
        y baja) y las vaya mostrando por orden de prioridad
 */
{

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

    let titulo = document.createElement("h1");
    titulo.textContent = "Añadir tarea a la lista";
    document.body.append(titulo);

    let caja1 = document.createElement("div");
    caja1.setAttribute("style", "border: 2px dashed; width: 350px; padding: 10px;")
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", "inputNumeroTarea");
    let label = document.createElement("label");
    label.setAttribute("for", "inputNumeroTarea");
    label.textContent = "Numero de Tarea: ";

    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "inputNombreTarea");
    let label2 = document.createElement("label");
    label2.setAttribute("for", "inputNombreTarea");
    label2.textContent = "Nombre de Tarea: ";


    let salto = document.createElement("br");
    let salto2 = document.createElement("br");

    let textoPrioridad = document.createElement("p");
    textoPrioridad.textContent = "Prioridad";

    let input3 = document.createElement("input");
    input3.setAttribute("type", "radio");
    input3.setAttribute("name", "inputPrioridad");
    input3.setAttribute("value", "1");

    let input4 = document.createElement("input");
    input4.setAttribute("type", "radio");
    input4.setAttribute("name", "inputPrioridad");
    input4.setAttribute("value", "2");

    let input5 = document.createElement("input");
    input5.setAttribute("type", "radio");
    input5.setAttribute("name", "inputPrioridad");
    input5.setAttribute("value", "3");

    let label3 = document.createElement("label");
    label3.setAttribute("for", "inputPrioridad");
    label3.textContent = "1";

    let label4 = document.createElement("label");
    label4.setAttribute("for", "inputPrioridad");
    label4.textContent = "2";

    let label5 = document.createElement("label");
    label5.setAttribute("for", "inputPrioridad");
    label5.textContent = "3";
    

    let botonAñadirTarea = document.createElement("button");
    botonAñadirTarea.textContent = "Añadir Tarea";

    let salto3 = document.createElement("br");
    let salto4 = document.createElement("br");

    caja1.append(label, input, salto, salto2, label2, input2, salto3, textoPrioridad, label3, input3, label4, input4, label5, input5, salto4, botonAñadirTarea);
    document.body.append(caja1);

    let textoInputNumero;
    input.onchange = function(e){
        textoInputNumero = e.target.value;
        console.log(textoInputNumero);
    };

    let textoInputNombre;
    input2.onchange = function(e){
        textoInputNombre = e.target.value;
        console.log(textoInputNombre);
    };

    let radioButton1 = document.getElementsByName("inputPrioridad");
    let valorPrioridad;
    for(let elem of radioButton1){
        elem.addEventListener("change", function(e){
            if(elem.checked === true){
                console.log(elem.value);
                valorPrioridad = elem.value;
            }
        });
    }

    let miArray = new Array();
    

    botonAñadirTarea.onclick = function AñadirALocalStorage(){
        let contador = parseInt(getCookie("contador")) || 0;
        contador++;
        setCookie("contador", contador);

        let numero= textoInputNumero;
        let nombre= textoInputNombre;
        let prioridad= valorPrioridad;

        miArray.push(numero,nombre,prioridad);

        localStorage.setItem("Tarea"+contador, JSON.stringify(miArray));
        contador++
        location.reload();
    }

    let titulo2 = document.createElement("h1");
    titulo2.textContent = "Lista de tareas almacenadas (ordenadas por prioridad)";
    document.body.append(titulo2);

    let caja2 = document.createElement("div");
    caja2.setAttribute("style", "border: 2px dashed; display: inline-block;");

    let botonCargarTarea = document.createElement("button");
    botonCargarTarea.textContent = "Cargar tareas";

    caja2.appendChild(botonCargarTarea);
    document.body.appendChild(caja2);

    botonCargarTarea.onclick = function RecogerDeLocalStorage() {
        while (caja2.childNodes.length > 1) {
            caja2.removeChild(caja2.lastChild);
        }
        
        let tareas = [];

        for (let clave in localStorage) {
            if (clave.startsWith("Tarea")) {
                let valor = JSON.parse(localStorage.getItem(clave));
                let tarea = {
                    numero: valor[0],
                    nombre: valor[1],
                    prioridad: valor[2]
                };
                tareas.push(tarea);
            }
        }

        tareas.sort((a, b) => a.prioridad - b.prioridad);

        for (let tarea of tareas) {
            let tareaElement = document.createElement("p");
            tareaElement.textContent = "Número: " + tarea.numero + ", Nombre: " + tarea.nombre + ", Prioridad: " + tarea.prioridad;
            caja2.appendChild(tareaElement);
        }
    }
}