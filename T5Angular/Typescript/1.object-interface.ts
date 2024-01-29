interface Personaje{
    name:string,
    vida:number,
    skills:string[],
    puebloNatal?: string,
    mostrarPuntosDeVida: ()=>void,
    address : Address
}
interface Address{
    street: string,
    city: string,
    country: string
    showAddress:() => string
}

let myObject:Personaje = {
    name: "Superman",
    vida:100,
    skills:["Volar", "Aterrizar"],
    mostrarPuntosDeVida(){
        console.log(`Tengo ${this.vida} puntos`)
    },
    address:{
        street: "Kripton st.",
        city: "Dos hermanas",
        country: "Sevilla Este",
        showAddress(): string{
            return this.street+ ", "+this.city+", "+this.country;
        }
    }
}

console.log(myObject.name);
myObject.puebloNatal = "chipiona";
console.log(myObject);
myObject.mostrarPuntosDeVida();
console.log(myObject.address.showAddress());