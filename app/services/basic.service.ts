import {Http} from "angular2/http";
import {LoginService} from "./login.service";
import {RequestOptionsArgs} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Response} from "angular2/http";

export class BasicService {

    constructor(private loginService:LoginService,
                private http:Http) {
    }

    protected get(url:string,
                  options:RequestOptionsArgs = {}):Observable<Response> {
        this.configureRequest(options);
        return this.http.get(url, options);
    }

    protected post(url:string,
                   body:string,
                   options:RequestOptionsArgs = {}):Observable<Response> {
        this.configureRequest(options);
        return this.http.post(url, body, options);
    }

    protected put(url:string,
                  body:string,
                  options:RequestOptionsArgs = {}):Observable<Response> {
        this.configureRequest(options);
        return this.http.put(url, body, options);
    }

    protected delete(url:string,
                     options:RequestOptionsArgs = {}):Observable<Response> {
        this.configureRequest(options);
        return this.http.delete(url, options);
    }

    private configureRequest(options:RequestOptionsArgs) {
        this.loginService.checkAuthenticated();
        this.loginService.appendAuthenticationHeader(options.headers);
    }
}