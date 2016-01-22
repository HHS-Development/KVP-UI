import {Component} from "angular2/core";
import {NgFor, CORE_DIRECTIVES} from "angular2/common";
import {Router} from "angular2/router";

@Component({
    templateUrl: "app/templates/dashboard/dashboard.html",
    directives: [NgFor, CORE_DIRECTIVES]
})
export class DashboardComponent {
  public checkModel:any = {left: false, middle: true, right: false};
  private tickets: any = [
    {
      "name": "Ticket 1",
      "status": "Offen"
    },
    {
      "name": "Ticket 2",
      "status": "In Bearbeitung"
    },
    {
      "name": "Ticket 3",
      "status": "Offen"
    },
    {
      "name": "Ticket 4",
      "status": "Geschlossen"
    },
    {
      "name": "Ticket 5",
      "status": "In Bearbeitung"
    }
  ];
  private mytickets = this.tickets;
  constructor(private _router: Router) { }
  openTicket(ticket): void {
    this._router.navigate( ["TicketDetail", { ticket: ticket }] );
  }
}
