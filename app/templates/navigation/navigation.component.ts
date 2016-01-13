import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
@Component({
    selector: 'navigation',
    templateUrl: 'app/templates/navigation/navigation.html',
    directives: [NgIf]
})
export class NavigationComponent {
  isLoggedIn(): boolean {
    return true;
  }
}
