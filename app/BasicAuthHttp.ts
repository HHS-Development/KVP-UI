import {Http} from "angular2/http";
import {RequestOptionsArgs} from "angular2/http";
import {Request} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Response} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class BasicAuthHttp extends Http {

    private _validateUserURL:string;
    private _isAuthenticated:boolean;

    private _username:string;
    private _password:string;

    request(url:string|Request, options?:RequestOptionsArgs):Observable<Response> {
        return super.request(url, options);
    }

    get(url:string, options?:RequestOptionsArgs):Observable<Response> {
        console.log(options);
        return super.get(url, options);
    }

    post(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
        return super.post(url, body, options);
    }

    put(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
        return super.put(url, body, options);
    }

    delete(url:string, options?:RequestOptionsArgs):Observable<Response> {
        return super.delete(url, options);
    }

    patch(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
        return super.patch(url, body, options);
    }

    head(url:string, options?:RequestOptionsArgs):Observable<Response> {
        return super.head(url, options);
    }

    /*private configureRequest(options:RequestOptionsArgs) {
        this.loginService.checkAuthenticated();
        this.loginService.appendAuthenticationHeader(options.headers);
    }*/

}