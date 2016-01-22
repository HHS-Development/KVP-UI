import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";

@Component({
    templateUrl: "app/templates/ticketdetail/ticketdetail.html"
})
export class TicketDetailComponent {
  constructor(private _router: Router, private _routeParams: RouteParams) { }
  ngOnInit() {
    let id = this._routeParams.get("ticket");
    console.log(" This is the ticket!!!!! :");
    console.log(id);
  }
}
