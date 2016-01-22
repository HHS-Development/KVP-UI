import {Injectable} from "angular2/core";
import {UnauthenticatedError} from "../errors/UnauthenticatedError";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Headers} from "angular2/http";
import {Base64} from "../commons/base64";
import {BasicAuthHttp} from "../BasicAuthHttp";
import {Inject} from "angular2/core";

@Injectable()
export class LoginService {

    private _validateUserURL:string;
    private _isAuthenticated:boolean;

    private _username:string;
    private _password:string;

    constructor(private http:Http) {
        this._isAuthenticated = false;

        this._validateUserURL = '/authentication';
    }

    validateUser(user:string, password:string):Observable<boolean> {
        this._username = user;
        this._password = password;

        console.log(user + password);

        return null;
    }

    checkAuthenticated():void {
        if (!this._isAuthenticated) {
            throw new UnauthenticatedError();
        }
    }

    isAuthenticated():boolean {
        return this._isAuthenticated;
    }

    appendAuthenticationHeader(headers:Headers) {
        headers.append('Authorization', 'Basic ' +
            Base64.encode(
                this._username + ':' + this._password))
    }

}