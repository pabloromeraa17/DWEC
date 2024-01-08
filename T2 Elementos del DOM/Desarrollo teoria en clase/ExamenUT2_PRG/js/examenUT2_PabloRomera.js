"use strict"
{
    let cajaColores = document.getElementsByClassName("colores");
    let inputColores = document.getElementById("colores");
    let selectSelecionnarColor;
    let saltoLinea;

    let formulario = document.querySelector("form");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "https://formsubmit.co/promgon542@iesmartinezm.es");
   
    let inputNombre = document.querySelector(".campo_usuario");
    let mensaje = document.querySelector("textarea");
    let contadorColores = 0;

    let cajaColoresPreferidos = document.getElementsByClassName("divColores");

    /**
     * Cuando la casilla colores cambie se activará esta función.
    */ 
    inputColores.onchange = function(){
        /**
         * Si la casilla está marcada, entonces se crea un select, una opcion predeterminada y
         * las otras opciones con los colores.
         */
        if(inputColores.checked == true){
            selectSelecionnarColor = document.createElement("select");
            let opcionPredeterminada = document.createElement("option");
            opcionPredeterminada.textContent = "Seleccionar color";

            selectSelecionnarColor.append(opcionPredeterminada);
            for (let i = 0; i < 10; i++){
                let r1,r2,r3;
                r1 = Math.round(Math.random()* (255-0) + 0);
                r2 = Math.round(Math.random()* (255-0) + 0);
                r3 = Math.round(Math.random()* (255-0) + 0);
                let opciones = document.createElement("option");
                opciones.setAttribute("style", "background-color: rgb("+r1+","+r2+","+r3+")");
                opciones.value = "rgb("+r1+","+r2+","+r3+")";
                opciones.textContent = "rgb("+r1+","+r2+","+r3+")";
                selectSelecionnarColor.append(opciones);
            }
            
            saltoLinea = document.createElement("br");
            cajaColores[0].insertAdjacentElement('afterend', selectSelecionnarColor);
            selectSelecionnarColor.insertAdjacentElement('afterend', saltoLinea);

            /**
             * Si el valor de select cambia, se recorrera una lista donde estan las opciones de 
             * los colores y el que este seleccionado, se cogerá su valor para cambiar el color de
             * fondo
             */
            selectSelecionnarColor.onchange = function(){
                let valorOpciones = document.querySelectorAll("option");
                for(let elem of valorOpciones){
                    if(elem.selected){
                        document.body.style.backgroundColor = elem.value;
                    }
                }
            }
        }
        /**
         * Si la casilla se desmarca, se retira el select y se pone otro color aleatorio
         * de fondo
         */
        else if(inputColores.checked == false){
            selectSelecionnarColor.remove();
            saltoLinea.remove();
            let rd1, rd2, rd3;
            rd1 = Math.round(Math.random()* (255-0) + 0);
            rd2 = Math.round(Math.random()* (255-0) + 0);
            rd3 = Math.round(Math.random()* (255-0) + 0);
            document.body.setAttribute("style", "background-color: rgb("+rd1+","+rd2+","+rd3+")");
        }
    }

    /**
     * Al formulario le asociamos un evento submit, para enviar el formulario.
     * Después se llama a cada función para comprobar que los valores de los campos son correctos
     * y se envíe el formulario.
     * Si no es así, se mostrará un mensaje de error asociado al campo.
     */
    formulario.addEventListener("submit", function(evento){
        if(validarUsuario() == false){
            evento.preventDefault();
            if(inputNombre.value === ""){
                mostrarMensaje("No puede enviarse vacio el campo Usuario", inputNombre);
            }
            if(inputNombre.value.length > 5){
                mostrarMensaje("No puede haber más de 5 caracteres en el campo Usuario", inputNombre);
            }
            if(/\s/.test(inputNombre.value)){
                mostrarMensaje("No puede haber espacios en el campo Usuario", inputNombre);
            }
        }
        if(validarMensaje() == false){
            evento.preventDefault();
            if(mensaje.value === ""){
                mostrarMensaje("No puede enviarse vacio el campo Mensaje", mensaje);
            }
            if(/[¡,¿]/.test(mensaje.value)){
                mostrarMensaje("No puede haber los caracteres \"¡\" y \"¿\" en el campo Mensaje", mensaje);
            }
        }
        if(contadorColores < 2){
            evento.preventDefault();
            mostrarMensaje("Debe seleccionarse al menos 2 colores preferidos antes de enviar", cajaColoresPreferidos[0]);
        } else {
            alert("Se va a enviar el formulario");
        }
    });

    /**
     * Una función que valida que el usuario no esté vacío, que la longitud no sea más de 5
     * y que no contenga espacios. 
     */
    function validarUsuario(){
        let nombreUsuario = inputNombre.value;
        if(nombreUsuario === "" || nombreUsuario.length > 5 || /\s/.test(nombreUsuario)){
            return false;
        }
    }

    /**
     * Una función para validar que el mensaje no esté vacío ni contenga '¡' o '¿'
     */
    function validarMensaje(){
        let valueMensaje = mensaje.value;
        if(valueMensaje === "" || /[¡¿]/.test(valueMensaje)){
            return false;
        }
    }

    /**
     * Recogemos los colores preferidos, los recorremos con un forEach, si el elemento cambia:
     * - Si se marca el contador sube
     * - Si se desmarcael contador baja
     */
    let coloresRecogidos = document.getElementsByName("color_preferido");
    coloresRecogidos.forEach(elem => {
        elem.onchange = function(){
            if(elem.checked==true){
                contadorColores ++;
                console.log(contadorColores);
            }else if(elem.checked == false){
                contadorColores--;
                console.log(contadorColores);
            }
        }
    })
    
    /**
     * Una función a la cuál se le pasa como parámetros el texto que queremos que imprima y 
     * el campo bajo el cual se va a mostrar.
     * Le añadimos un estilo de color rojo y un temporizador para que a los 3 segundos se quite
     * el error.
     */
    function mostrarMensaje(texto, campo) {
        let alerta = document.createElement("p");
        alerta.textContent = texto;
        alerta.style.color = 'red';

        campo.insertAdjacentElement('afterend', alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }

}