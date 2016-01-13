import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    templateUrl: 'app/templates/dashboard/dashboard.html',
    directives: [NgFor]
})
export class DashboardComponent {
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
}
