import {UseCase} from "../Domain/UseCase";
import {Observable, Observer} from "rxjs";
import {map, flatMap, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {XMLHttpRequest} from "xmlhttprequest";



global.XMLHttpRequest = XMLHttpRequest;


export class GetIpUseCase implements UseCase {
    constructor() {
    }

    handle(getIpHandler: any): any {
        ajax.getJSON('https://api6.ipify.org?format=json').pipe(
            pluck('ip'),
            flatMap((ip) =>  ajax.getJSON(`http://ip-api.com/json/${ip}`))
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