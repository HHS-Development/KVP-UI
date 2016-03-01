import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import {Response} from "angular2/http";
import {UnimplementedError} from "../errors/UnimplementedError";
import {BasicAuthHttp} from "../commons/BasicAuthHttp";

@Injectable()
export class TicketsService {

    private _getTicketsURL:string;

    constructor(private _http:Http, private _authHttp:BasicAuthHttp) {
        this._getTicketsURL = '/tickets';
    }

    getTickets():Observable<any> {
        return this._http.get(this._getTicketsURL)
            .map((res:Response) => res.json());
    }

    createTicket():void {
        throw new UnimplementedError();
    }

    getTicketById(id:number):Observable<any> {
        return this._http.get(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.json());
    }

    updateTicketById(id:number) {
        return this._authHttp.put(this._getTicketsURL + '/' + id, '')
            .map((res:Response) => res.json());
    }

    deleteTicketById(id:number):Observable<number> {
        return this._authHttp.delete(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.status);
    }

}
