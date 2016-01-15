import {Injectable} from "angular2/core";
import {UnauthenticatedError} from "../errors/UnauthenticatedError";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

    private _isAuthenticated:boolean;

    constructor(private http:Http) {
        this._isAuthenticated = false;
    }

    validateUser(user:string, password:string):Observable<boolean> {
        return this.http.get('')
            .map((res:Response)=> this._isAuthenticated=res.ok);
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