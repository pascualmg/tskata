import {GetIpUseCase} from './Application/getIpUseCase';

(new GetIpUseCase()).handle(console.log)
interface talker {
    talk(): string
}

interface jumper {
    jump(): void
}

enum Sex {Male = "Male", Female = "Female"}

abstract class Human implements talker, jumper {
    protected constructor(edad: number, sex: Sex) {
        this._edad = edad;
        this._sex = sex;
    }

    private _edad: number;
    private readonly _sex: Sex;

    edad() {
        return this._edad;
    }


    setEdad(newEdad: number) {
        this._edad = newEdad;
    }

    jump(): void {
    }

    talk(): string {
        return "";
    }

}

class Person extends Human {
    constructor() {
        super(20, Sex.Female);
    }

    talk(): string {
        return "hablo un poco, tengo" + this.edad() + "anos";
    }

    jump(): void {
        console.log("saltando...");
    }
}

let Pascual = new Person();
let Cosa = new Person();
Pascual.setEdad(40);

let printName = (name: string) => {
    console.log('hola');
}

const printEdad = (humano: Human) => {
    console.log("la edad de este humano es: " + humano.edad());
}

printEdad(Pascual);
printEdad(Cosa);
console.log('Pascual.talk()', Pascual.talk());//TODO: borrame.

Cosa.talk();
Pascual.jump();
