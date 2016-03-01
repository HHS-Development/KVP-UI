import {Component} from "angular2/core";
import {NavigationComponent} from "../navigation/navigation.component";
import {BasicAuthHttp} from "../../commons/BasicAuthHttp";
import {LoginService} from "../../services/login.service";

@Component({
    selector: "login-component",
    templateUrl: "app/templates/login/login.html",
    providers: [BasicAuthHttp]
})
export class LoginComponent {

    constructor(private _authHttp:BasicAuthHttp, private loginService: LoginService) {
    }

    onClickLogin():boolean {
        this._authHttp.username = "hans";
        this._authHttp.password = "geheimgeheim";
        this._authHttp.revalidateLogin();
        this.loginService.loginUser();
        return false;
    }

}
