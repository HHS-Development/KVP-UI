import {Component} from 'angular2/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {LoginService} from "../../services/login.service";

@Component({
    selector: 'login-component',
    templateUrl: 'app/templates/login/login.html',
    providers: [LoginService]
})
export class LoginComponent {

    onClickLogin():boolean {
        console.log("Bla");
        return false;
    }

}
