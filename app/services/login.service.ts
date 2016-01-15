import {Injectable} from "angular2/core";
import {UnauthenticatedError} from "../errors/UnauthenticatedError";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {ConfigurationService} from "./configuration.service";

@Injectable()
export class LoginService {

    private _validateUserURL:string;
    private _isAuthenticated:boolean;

    constructor(private http:Http) {
        this._isAuthenticated = false;

        this._validateUserURL = ConfigurationService.getRestPrefix() + '';
    }

    validateUser(user:string, password:string):Observable<boolean> {
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

}