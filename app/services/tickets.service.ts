import {Injectable} from "angular2/core";
import {LoginService} from "./login.service";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import {ConfigurationService} from "./configuration.service";
import {Response} from "angular2/http";
import {UnimplementedError} from "../errors/UnimplementedError";
import {BasicAuthHttp} from "../BasicAuthHttp";

@Injectable()
export class TicketsService {

    private _getTicketsURL:string;

    constructor(private http:BasicAuthHttp) {
        this._getTicketsURL = ConfigurationService.getRestPrefix() + '/tickets'
    }

    getTickets():Observable<any> {
        return this.http.get(this._getTicketsURL)
            .map((res:Response) => res.json());
    }

    createTicket():void {
        throw new UnimplementedError();
    }

    getTicketById(id:number):Observable<any> {
        return this.http.get(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.json());
    }

    updateTicketById(id:number) {
        return this.http.put(this._getTicketsURL + '/' + id, '')
            .map((res:Response) => res.json());
    }

    deleteTicketById(id:number):Observable<number> {
        return this.http.delete(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.status);
    }

}