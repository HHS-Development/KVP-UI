import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    templateUrl: 'app/templates/dashboard/dashboard.html',
    directives: [NgFor]
})
export class DashboardComponent {
  private tickets: any = [
    {"name": "Ticket 1"},
    {"name": "Ticket 2"},
    {"name": "Ticket 3"},
    {"name": "Ticket 4"},
    {"name": "Ticket 5"}
  ];
}
