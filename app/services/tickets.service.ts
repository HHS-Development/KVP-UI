import {Injectable} from "angular2/core";
import {LoginService} from "./login.service";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import {ConfigurationService} from "./configuration.service";
import {Response} from "angular2/http";
import {UnimplementedError} from "../errors/UnimplementedError";
import {BasicService} from "./basic.service";

@Injectable()
export class TicketsService extends BasicService {

    private _getTicketsURL:string;

    constructor(loginService:LoginService,
                http:Http) {
        super(loginService, http);

        this._getTicketsURL = ConfigurationService.getRestPrefix() + '/tickets'
    }

    getTickets():Observable<any> {
        return super.get(this._getTicketsURL)
            .map((res:Response) => res.json());
    }

    createTicket():void {
        throw new UnimplementedError();
    }

    getTicketById(id:number):Observable<any> {
        return super.get(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.json());
    }

    updateTicketById(id:number) {
        return super.put(this._getTicketsURL + '/' + id, '')
            .map((res:Response) => res.json());
    }

    deleteTicketById(id:number):Observable<number> {
        return super.delete(this._getTicketsURL + '/' + id)
            .map((res:Response) => res.status);
    }

}