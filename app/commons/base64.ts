
export class Base64 {

    static encode(str):string {
        return new Buffer(str).toString('base64');
    };

    static decode(str):string {
        return new Buffer(str, 'base64').toString();
    };

}