import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {NgFor, CORE_DIRECTIVES} from "angular2/common";
import {Comment} from "../../api/comment/Comment";

@Component({
    templateUrl: "app/templates/ticketdetail/ticketdetail.html",
    directives: [NgFor, CORE_DIRECTIVES]
})
export class TicketDetailComponent {
  private _ticket: any;
  private _comments: Comment[];
  constructor(private _router: Router, private _routeParams: RouteParams) { }
  ngOnInit() {
    this._ticket = this._routeParams.get("ticket");
    this._comments = [
      new Comment("1","1","21.01.2016 - 12:43","1","Ich habe mit Herrn Mustermann gesprochen. Der Fall ist akut!"),
      new Comment("2","1","22.01.2016 - 10:21","2","Wir sollten das Problem schnell angehen."),
      new Comment("3","1","22.01.2016 - 11:59","3","In der nächsten Besprechung werden wir eine Lösung finden. Ich setze das Ticket auf die Tagesordnung.")
    ];
  }

  getStatus(): string{
    return this._ticket.status;
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

  getUserName(id: string): string{
    return "Testperson";
  }
}
