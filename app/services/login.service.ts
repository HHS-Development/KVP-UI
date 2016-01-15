import {Injectable} from "angular2/core";
import {UnauthenticatedError} from "../errors/UnauthenticatedError";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {ConfigurationService} from "./configuration.service";
import {Headers} from "angular2/http";
import {Base64} from "../commons/base64";
import {BasicAuthHttp} from "../BasicAuthHttp";

@Injectable()
export class LoginService {

    private _validateUserURL:string;
    private _isAuthenticated:boolean;

    private _username:string;
    private _password:string;

    constructor(private http:BasicAuthHttp) {
        this._isAuthenticated = false;

        this._validateUserURL = ConfigurationService.getRestPrefix() + '/authentication';
    }

    validateUser(user:string, password:string):Observable<boolean> {
        this._username = user;
        this._password = password;
        return this.http.get(this._validateUserURL)
            .map((res:Response) => this._isAuthenticated = res.ok);
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