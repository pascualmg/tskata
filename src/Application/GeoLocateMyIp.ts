import {UseCase} from "../Domain/UseCase";
import {Observable, Observer} from "rxjs";
import {map, flatMap, pluck, catchError, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {XMLHttpRequest} from "xmlhttprequest";

global.XMLHttpRequest = XMLHttpRequest;

//Ejemplo de como con tap podemos hacer colaterales.
const doSomethingLikeSendEmailOrStoreInRedis = tap(console.log);

/**
 * Geolocaliza la ciudad de la ip actual de salida al exterior de la máquina
 * en la que se ejecuta el caso de uso.
 */
export class GeoLocateMyIp implements UseCase {
    constructor() {
    }

    handle(getIpHandler: any): any {
        ajax.getJSON('https://api6.ipify.org?format=json').pipe(
            //doSomethingLikeSendEmailOrStoreInRedis,
            pluck('ip'),
            flatMap((ip) => ajax.getJSON(`http://ip-api.com/json/${ip}`)),
           // doSomethingLikeSendEmailOrStoreInRedis,
            pluck('city'),
            catchError(console.error)
        ).subscribe({
                next: (next) => {
                    getIpHandler(next)
                },
                error: (error) => {
                    console.error(error);
                }
            })
    }
}