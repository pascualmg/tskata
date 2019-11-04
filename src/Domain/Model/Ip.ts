class Ip {
    private readonly _ip;
    get ip() {
        return this._ip;
    }

    public constructor(ip: string) {
        this._ip = ip;
    }

    public equal(ip: this){
        return ip.ip() == this._ip;
    }
}