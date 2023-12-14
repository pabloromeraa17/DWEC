"use strict"
/**
 * 10. Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario
deberá validar si la letra es correcta al:
a) Perder el foco del campo de texto donde se introduce el DNI.
b) Enviar el formulario, cancelando el envío si el formato no es correcto. 
 */
{
    let formulario = document.createElement("form");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "https://formsubmit.co/promgon542@iesmartinezm.es");

    let input = document.createElement("input");
    input.setAttribute("type", "text");

    let botonEnviar = document.createElement("input");
    botonEnviar.setAttribute("type", "submit");

    formulario.append(input, botonEnviar);
    let textoInput;

    input.oninput = function(e){
        textoInput = e.target.value;
        console.log(e.target.value);
    };

    formulario.addEventListener("submit", function(evento){
        if(!validaDNI(textoInput)){
            evento.preventDefault();
            if(!validaDNI(textoInput)){
                mostrarMensaje("El DNI debe tener un formato correcto");
            }
        } else {
            alert("Se va a enviar el formulario");
        }
    });

    function validaDNI(texto){
        let RegExp = /^[0-9]{8}[A-Z]{1}$/;
        let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

        let ValidDni = RegExp.test(texto);
        if(ValidDni){
            let letra = texto.toUpperCase().charAt(8);
            let dni = Number (texto.substring(0,8));

            if(letras[dni%23] == letra){
                return true;
            }else{
                return false;   
            }
        }
    }

    function mostrarMensaje(texto){
        const alerta = document.createElement("p");
        alerta.textContent = texto;
        formulario.append(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000) 
    }

    document.body.append(formulario);
}