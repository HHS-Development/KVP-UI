import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";

@Component({
    templateUrl: "app/templates/ticketdetail/ticketdetail.html"
})
export class TicketDetailComponent {
  private ticket: any;
  constructor(private _router: Router, private _routeParams: RouteParams) { }
  ngOnInit() {
    this.ticket = this._routeParams.get("ticket");
  }
}
