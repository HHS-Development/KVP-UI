import {Component} from "angular2/angular2";
import {KVPTable} from "./templates/kvpTable/kvpTable.component";
import {Ticket} from "./types/Ticket";

@Component({
    selector: "kvp-app",
    templateUrl: "app/templates/kvpApp/kvpApp.html",
    styleUrls: ["app/templates/kvpApp/kvpApp.css"],
    directives: [KVPTable]
})
export class AppComponent {

    tickets: Array<Ticket> = [];

    constructor () {

        let ticket = new Ticket(0, "test 0", "bla", 1);
        console.log(ticket.title);

        //mock
        this.tickets.push(new Ticket(0, "test 0", "bla", 1));
        this.tickets.push(new Ticket(1, "test 1", "bla", 6));
        this.tickets.push(new Ticket(2, "test 2", "bla", 4));
        this.tickets.push(new Ticket(3, "test 3", "bla", 7));
        this.tickets.push(new Ticket(4, "test 4", "bla", 0));
        this.tickets.push(new Ticket(5, "test 5", "bla", 3));
        this.tickets.push(new Ticket(6, "test 6", "bla", 5));

    }

}
