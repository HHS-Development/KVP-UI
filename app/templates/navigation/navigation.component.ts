import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Location} from "angular2/router";
import {NgIf} from "angular2/common";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../../services/login.service";
@Component({
    selector: "navigation",
    templateUrl: "app/templates/navigation/navigation.html",
    directives: [ROUTER_DIRECTIVES, NgIf, LoginComponent],
    providers: [LoginService]
})
export class NavigationComponent {
    public loggedIn:boolean = false;
    private user = {"name": "Charlie Sheen"};

    constructor(private _location:Location, private loginService: LoginService) {
    }

    isLoggedIn():boolean {
        return this.loginService.isUserLoggedIn();
    }

    logout():void {
        // to do
    }

    getLinkStyle(path):boolean {
        return this._location.path() === path;
    }
}
