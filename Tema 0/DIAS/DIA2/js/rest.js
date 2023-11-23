"use strict"
{
    function f(a,b){
        return a+b;
    }

    console.log(f(10,20));

    console.log("\nREST en un array de numeros");
    function f2 (a,b, ...c){ //el ult param viene en forma de array
        let n = a+b;
        let m=0;
        for(let num of c){
            m+=num;
        }
        return n+m;
    }

    console.log(f2(10,20,30,40));
    console.log(f2(10,20,50));
    console.log(f2(10,20,30,40,100,70));

    const user1 = {
        nombre:"Federico",
        edad:30
    };
    const user2 = {
        nombre:"Ramon",
        edad:31
    };
    const user3 = {
        nombre:"Carlos",
        edad:32
    };

    const users = [
        {nombre: "Juan", edad: 35},
        {nombre: "Pepe", edad: 40},
        {nombre: "Matilde", edad: 45}
    ];

    function f3 (u1, ...u2){
        //sumar las edades y devolverlas
        let n = u1.edad;
        let m = 0;
        for(let num of u2){
            m += num.edad;
        };
        return m+n;
    };

    function f4 (u1, ...u2){
        //sumar las edades y devolverlas
        let m = 0;
        m += u1.edad;
        for( let user of u2){
            if(Array.isArray(user)){
                for(let i = 0; i< user.length; i++){
                    m += user[i].edad;
                }
            }else{
                m+=user.edad;
            }
        }
        return m;
    };

    console.log(f3(user1,user2,user3));
    console.log(f4(user1,user2,user3, users));


}