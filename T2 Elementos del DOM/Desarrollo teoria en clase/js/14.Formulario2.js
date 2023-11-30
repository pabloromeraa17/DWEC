"use strict"
{
    let formulario = document.querySelector("#idForm1");

    formulario.addEventListener("submit", function(evento){
        let cajaTexto = document.querySelector("#idText1");
        let email = document.querySelector("#idEmail1");

        if(cajaTexto.value.length != 4 || !validaEmail(email.value)){
            evento.preventDefault(); //evitar lo que se hace por defecto
            if(cajaTexto.value.length != 4){
                mostrarMensaje("El texto tiene que tener 4 caracteres");
            }
            if(!validaEmail(email.value)){
                mostrarMensaje("El email debe tener un formato correcto");
            }
        } else {
            alert("Se va a enviar el formulario");
        }
    });

    function validaEmail(texto){
        let emailVerdadero = /^[a-z0-9]+(\.[-_a-z0-9]+)*@/i;
        return emailVerdadero.test(texto);
    }

    function mostrarMensaje(texto){
        const alerta = document.createElement("p");
        alerta.textContent = texto;
        alerta.setAttribute("class", "error");
        formulario.append(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000) 
    }
}