import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NgIf} from 'angular2/common';
@Component({
    selector: 'navigation',
    templateUrl: 'app/templates/navigation/navigation.html',
    directives: [ROUTER_DIRECTIVES, NgIf]
})
export class NavigationComponent {
  isLoggedIn(): boolean {
    return true;
  }
}
