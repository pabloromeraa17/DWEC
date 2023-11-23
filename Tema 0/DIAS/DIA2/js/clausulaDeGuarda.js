



function f(){ //DICE SI EL NUMERO ES CERO, MENOS QUE CERO O PAR/IMPAR
    let n = prompt ("Funcion f: introduce un numero: ", 0);
    let res ="";
    if(n==0){
        res = "CERO";
    } else{
        if(n<0){
            res="MENOS QUE CERO";
        } else{
            if(n%2==0){
                res = "PAR";
            }else{
                res="IMPAR";
            }
        }
    }
    return res;
}

function f2(){
    let n = prompt ("Funcion f2 (con clausulas de guarda): introduce un numero: ", 0);
    let res ="";
    if(n==0){
        return "CERO";
    }
    if(n<0){
        return "MENOR QUE CERO";
    }
    if(n%2==0){
        return "PAR";
    }
    return "IMPAR";
}
console.log(f());
console.log(f2());