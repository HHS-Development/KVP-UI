import {Component} from "angular2/core";
import {NgFor, CORE_DIRECTIVES} from "angular2/common";
import {Router} from "angular2/router";
import {Ticket} from "../../api/ticket/Ticket";

@Component({
    templateUrl: "app/templates/dashboard/dashboard.html",
    directives: [NgFor, CORE_DIRECTIVES]
})
export class DashboardComponent {
    public checkModel:any = {left: false, middle: true, right: false};
    private tickets:Ticket[] = [
        new Ticket("1", "Ticket 1", "", "Offen", "", "", ""),
        new Ticket("2", "Ticket 2", "", "In Bearbeitung", "", "", ""),
        new Ticket("3", "Ticket 3", "", "Geschlossen", "", "", ""),
        new Ticket("4", "Ticket 4", "", "Offen", "", "", ""),
        new Ticket("5", "Ticket 5", "", "In Bearbeitung", "", "", "")
    ];

    private mytickets = this.tickets;

    constructor(private _router:Router) {
    }

    openTicket(ticket):void {
        this._router.navigate(["TicketDetail", {ticket: ticket}]);
    }
}
