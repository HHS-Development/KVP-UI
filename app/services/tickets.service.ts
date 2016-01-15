import {Injectable} from "angular2/core";
import {LoginService} from "./login.service";

@Injectable()
export class TicketsService {

    constructor(private loginService:LoginService) {
    }

    createTicket():void {
        this.loginService.checkAuthenticated();



    }

}