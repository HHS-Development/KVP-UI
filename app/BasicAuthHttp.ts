import {Http} from "angular2/http";
import {RequestOptionsArgs} from "angular2/http";
import {Request} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {UnauthenticatedError} from "./errors/UnauthenticatedError";
import {Base64} from "./commons/base64";
import {ConnectionBackend} from "angular2/http";
import {RequestOptions} from "angular2/http";

@Injectable()
export class BasicAuthHttp extends Http {

    private _validateAuthUrl:string;
    private _isAuthenticated:boolean;

    private _username:string;
    private _password:string;


    constructor(validateAuthUrl:string, backend:ConnectionBackend, defaultOptions:RequestOptions) {
        super(backend, defaultOptions);
        this._validateAuthUrl = validateAuthUrl;
    }

    request(url:string|Request, options:RequestOptionsArgs = new RequestOptionsArgs()):Observable<Response> {
        this.prepareReqest(options);
        return super.request(url, options);
    }

    get(url:string, options?:RequestOptionsArgs):Observable<Response> {
        console.log(options);
        this.prepareReqest(options);
        return super.get(url, options);
    }

    post(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
        this.prepareReqest(options);
        return super.post(url, body, options);
    }

    put(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
        this.prepareReqest(options);
        return super.put(url, body, options);
    }

    delete(url:string, options?:RequestOptionsArgs):Observable<Response> {
        this.prepareReqest(options);
        return super.delete(url, options);
    }

    patch(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
        this.prepareReqest(options);
        return super.patch(url, body, options);
    }

    head(url:string, options?:RequestOptionsArgs):Observable<Response> {
        this.prepareReqest(options);
        return super.head(url, options);
    }

    revalidateLogin():void {
        super.get(this.validateAuthUrl)
    }

    private prepareReqest(options:RequestOptionsArgs):void {
        if (!this.isAuthenticated) throw new UnauthenticatedError();
        this.appendAuthHeader(options);
    }

    private appendAuthHeader(options:RequestOptionsArgs):void {
        options.headers.append('Authorization', 'Basic ' +
            Base64.encode(
                this.username + ':' + this.password));
    }

    get isAuthenticated():boolean {

        if (this._isAuthenticated == null) {
            this.revalidateLogin();
        }

        return this._isAuthenticated;
    }

    get username():string {
        return this._username;
    }

    get password():string {
        return this._password;
    }

    private get validateAuthUrl():string {
        return this._validateAuthUrl;
    }

    set username(value:string) {
        this._username = value;
    }

    set password(value:string) {
        this._password = value;
    }

}