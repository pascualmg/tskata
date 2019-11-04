class Ip {
    private _ip;

    private constructor(ip: string) {
        //todo asert is a valid ip
        this._ip = ip;
    }
    public fromString(ip: string) {
       this.constructor(ip);
    }
    get(){
        return this._ip;
    }
}

export interface IpService {
    execute(): Ip;
}