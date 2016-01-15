import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {NgIf} from 'angular2/common';
import {LoginComponent} from '../login/login.component';
@Component({
    selector: 'navigation',
    templateUrl: 'app/templates/navigation/navigation.html',
    directives: [ROUTER_DIRECTIVES, NgIf, LoginComponent]
})
export class NavigationComponent {
  public loggedIn: boolean = false;
  constructor(private _location: Location){}
  isLoggedIn(): boolean {
    return true;
  }

  getLinkStyle(path): boolean {
    return this._location.path() === path;
  }
}
