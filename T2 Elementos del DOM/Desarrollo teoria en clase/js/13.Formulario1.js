"use strict"
{
    /**
     * <form id="idForm1" name="nDatos1">
        <input type="text" id="idNombre" name="nTexto" value="valor del texto">
        <br><br>
        <input type="url" id="idUrl" name="nUrl" value="https://iesmartinezm.es">
    </form>
     */

    let formularioCompleto = document.getElementById("idForm1");
    console.log(formularioCompleto);
    console.log(formularioCompleto.nTexto.placeholder);
    console.log(formularioCompleto.nUrl.value);

    console.log("\n\tAcceder a un input y capturar sus eventos:")
    let inputText1 = document.getElementById("idTexto1");
    console.log(inputText1.name);
    console.log(inputText1.value);

    inputText1.oninput = function(e){
        console.log(e.data);
        console.log(e.target.value);
    };
    inputText1.onchange = function (e){
        console.log(e.target.value);
    };

    console.log("\n\tAcceder a un TextArea y capturar sus eventos:")
    let TextArea1 = document.getElementsByName("nTextArea1");
    console.log(TextArea1[0].value);

    console.log("\n\tAcceder a radio button");
    let radioButton1 = document.getElementsByName("nrButton1");
    radioButton1.forEach(element => {
        console.log(element);
        console.log(element.value);
    });
    for(let elem of radioButton1){
        if(elem.checked === true){
            console.log("La opcion marcada es: "+elem.value);
        }
    }
    for(let elem of radioButton1){
        elem.addEventListener("change", function(e){
            if(elem.checked === true){
                console.log(elem.value);
            }
        });
    }
    /**
     * <label for="idCheck1">Bocadillo</label>
        <input type="checkbox" id="idCheck1" name="nCheck1" value="bocadillo" checked>
        <label for="idCheck1">Fruta</label>
        <input type="checkbox" id="idCheck2" name="nCheck1" value="fruta">
        <label for="idCheck1">Pastelito</label>
        <input type="checkbox" id="idCheck3" name="nCheck1" value="pastelito" checked>
     */
    let checkboxes1 = document.getElementsByName("nCheck1");
    checkboxes1.forEach(element => {
        console.log(element);
        console.log(element.value);
    });
    for(let elem of checkboxes1){
        if(elem.checked === true){
            console.log("La opcion marcada es: "+elem.value);
        }
    };
    for(let elem of checkboxes1){
        elem.addEventListener("change", function(e){
            if(elem.checked === true){
                console.log("Pues me como un "+elem.value);
            }else{
                console.log("Pues ya no me como un "+ elem.value);
            }
        });
    };

    let seleccion = document.querySelector("#idLenguaje");
    for (let elem of seleccion){
        console.log(elem.text+ " "+ elem.value);
        if(elem.selected === true){
            console.log("La posicion seleccionada es "+seleccion.selectedIndex);
        }
    };

    seleccion.addEventListener("change", function(e){
        console.log("\nEl indice seleccionado es "+ seleccion.selectedIndex);
        console.log("El valor del elemento seleccionado es "+ seleccion.value);
        console.log("El texto del elemento seleccionado es "+ seleccion.options[seleccion.selectedIndex].text)
        // for(let elem of seleccion){
        //     if(elem.selected === true){
        //         console.log("El valor del elemento seleccionado es "+ elem.value);
        //         console.log("El texto del elemento seleccionado es "+ elem.text)
        //     }
        // }
        
    })
}