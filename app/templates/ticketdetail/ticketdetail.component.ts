import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";

@Component({
    templateUrl: "app/templates/ticketdetail/ticketdetail.html"
})
export class TicketDetailComponent {
  private _ticket: any;
  constructor(private _router: Router, private _routeParams: RouteParams) { }
  ngOnInit() {
    this._ticket = this._routeParams.get("ticket");
  }

  getOwner(): string{
    // todo: Ownername by ticket.ownerId
    return "Charlie Sheen";
  }

  getOwnerCourse(): string{
    // todo: get Course by ticket.ownerId from LDAP
    return "E3FI2";
  }

  getCreatedDate(): string{
    return this._ticket.createdDate;
  }

  getSubject(): string{
    return this._ticket.subject;
  }

  getProposal(): string{
    return this._ticket.proposal;
  }
}
