import {Component} from "angular2/core";
import {NavigationComponent} from "../navigation/navigation.component";
import {BasicAuthHttp} from "../../commons/BasicAuthHttp";

@Component({
    selector: "login-component",
    templateUrl: "app/templates/login/login.html",
    providers: [BasicAuthHttp]
})
export class LoginComponent {

    constructor(private _authHttp:BasicAuthHttp) {
    }

    onClickLogin():boolean {
        this._authHttp.username = "hans";
        this._authHttp.password = "geheimgeheim";
        this._authHttp.revalidateLogin();
        return false;
    }

}
