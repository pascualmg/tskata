console.log('hola caracola');

abstract class Human {
    constructor(edad: number) {
        this.edad = edad;
    }

    public edad: number
}
class Person extends Human{
    constructor() {
        super(20);
    }
}

let Pascual = new Person();

let printName = (name: string) => {
    console.log('hola');
}

const printEdad = (humano: Human) => {
    console.log("la edad de este humano es: " + humano.edad);
}

printEdad(Pascual);

