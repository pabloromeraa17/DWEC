"use strict"
{
    let formulario = document.querySelector("form");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("action", "https://formsubmit.co/promgon542@iesmartinezm.es");

    let inputNombreApellidos = document.getElementById("nombreApellidosLabel");
    let cajaNombreApellidos = document.getElementsByClassName("divNombre");

    let RegExp = /[0-9]/;

    let textoInputNombre, textoInputFecha;

    let inputFecha = document.getElementsByName("fecha");
    let cajaFecha = document.getElementsByClassName("divFecha");

    let año;


    formulario.addEventListener("submit", function(evento){
        if(validarFecha(inputFecha[0].value) == false || validarNombre(inputNombreApellidos.value) == true){
            evento.preventDefault();
            if(validarFecha(inputFecha[0].value) == false){
                const alerta = document.createElement("p");
                alerta.setAttribute("style", "color : red");
                alerta.textContent = "Debe ser la fecha anterior a 2010 y no ser nulo";
                cajaFecha[0].append(alerta);

                setTimeout(() => {
                    alerta.remove();
                }, 5000)
            }
            if(validarNombre(inputNombreApellidos.value) == true){
                const alerta = document.createElement("p");
                alerta.setAttribute("style", "color : red");
                alerta.textContent = "No puede haber numeros";
                cajaNombreApellidos[0].append(alerta);

                setTimeout(() => {
                    alerta.remove();
                }, 5000)
            }
        } else {
            alert("Se va a enviar el formulario");
        }
    });

    inputFecha[0].onchange = function(e){
        textoInputFecha = e.target.value;
        console.log(e.target.value);
        año = textoInputFecha.substring(0,4);
        if(año > 2009){
            const alerta = document.createElement("p");
            alerta.setAttribute("style", "color : red");
            alerta.textContent = "Debe ser la fecha anterior a 2010";
            cajaFecha[0].append(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 5000)
        }
    };


    function validarFecha(txt){
        console.log(txt);
        console.log(txt.substring(0,4));
        if(txt.substring(0,4) > 2009){
            return false
        }
    }

    inputNombreApellidos.onchange = function(e){
        textoInputNombre = e.target.value;
        console.log(e.target.value);
        if(RegExp.test(textoInputNombre) == true){
            const alerta = document.createElement("p");
            alerta.setAttribute("style", "color : red");
            alerta.textContent = "No se pueden poner numeros en este campo";
            cajaNombreApellidos[0].append(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 5000) 
        }
    };

    function validarNombre(txt){
        console.log(txt);
        console.log(txt.substring(0,4));
        return RegExp.test(txt);
    }

}