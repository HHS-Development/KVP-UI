import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {NgIf} from 'angular2/common';
@Component({
    selector: 'navigation',
    templateUrl: 'app/templates/navigation/navigation.html',
    directives: [ROUTER_DIRECTIVES, NgIf]
})
export class NavigationComponent {
  constructor(private _location: Location){}
  isLoggedIn(): boolean {
    return true;
  }

  getLinkStyle(path): boolean {
    return this._location.path() === path;
  }
}
