import {Injectable} from "angular2/core";
import {LoginService} from "./login.service";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import {ConfigurationService} from "./configuration.service";
import {Response} from "angular2/http";
import {UnimplementedError} from "../errors/UnimplementedError";

@Injectable()
export class TicketsService {

    private _getTicketsURL:string;

    constructor(private loginService:LoginService,
                private http:Http) {

        this._getTicketsURL = ConfigurationService.getRestPrefix() + '/tickets'

    }

    getTickets():Observable {
        this.loginService.checkAuthenticated();
        return this.http.get(this._getTicketsURL)
            .map((res:Response) => res.json());
    }

    createTicket():void {
        this.loginService.checkAuthenticated();
        throw new UnimplementedError();
    }

    getTicketById(id:number):Observable {
        this.loginService.checkAuthenticated();
        return this.http.get(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.json());
    }

    updateTicketById(id:number) {
        this.loginService.checkAuthenticated();
        return this.http.put(this._getTicketsURL + '/' + id, '')
            .map((res:Response) => res.json());
    }

    deleteTicketById(id:number):Observable<number> {
        this.loginService.checkAuthenticated();
        return this.http.delete(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.status);
    }

}