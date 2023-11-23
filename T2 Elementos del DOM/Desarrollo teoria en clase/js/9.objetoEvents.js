"use-strict"

{
    let boton5 = document.querySelector("#idBoton5");
    boton5.addEventListener("click", function(evento){
       // console.log(evento)
    });

    function mostrarMensaje(evento){
        console.log("El tipo de evento capturado es: "+evento.type);
        if (evento.type == "keyup"){
            console.log("Código de la tecla pulsada:"+evento.code);
            console.log("Tecla pulsada: "+evento.key);
        } else if(evento.type=="click") {
            console.log("Se ha pulsado el botón en coordenadas "+evento.clientX+" - "+evento.clientY);
            console.log("Se ha pulsado el botón "+evento.button);
            console.log("Se ha pulsado: "+evento.detail+" veces");
            console.log("?Estaba pulsada la tecla de CTRL"+ evento.ctrlKey);
            console.log("¿Estaba pulsada la tecla ALT? "+evento.altKey);
            console.log("¿Estaba pulsada la tecla SHIFT? "+evento.shiftKey);
        } else if(evento.type=="dblclick"){
            console.log("Doble click");
        }
    }

    function mostrarMensaje2(evento){
        if(evento.type=="dblclick"){
            console.log("mensaje 2");
        }
    }
    boton5.addEventListener("keyup", mostrarMensaje);
    boton5.addEventListener("click", mostrarMensaje);
    boton5.addEventListener("dblclick", mostrarMensaje);
    
    /**
     * 3º PARÁMETRO
     * capture --> si se ejecuta al principio
     * once --> solo se captura una vez
     */
    
    //boton5.addEventListener("dblclick", mostrarMensaje2, {once: true});
    boton5.addEventListener("dblclick", mostrarMensaje2, {capture: true}); 
    

}