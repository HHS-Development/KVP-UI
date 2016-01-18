import {Component} from 'angular2/core';

@Component({
    templateUrl: 'app/templates/newticket/newticket.html'
})
export class NewTicketComponent {
  getUserName(): string {
    return "Max Mustermann";
  }

  getUserCourse(): string {
    return "E3FI2";
  }

  getCurrentDate(): string {
    return "15.01.2016";
  }

  createTicket(): void {
    // to do
  }
}
