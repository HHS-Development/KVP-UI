import {Injectable} from "angular2/core";

@Injectable()
export class LoginService {
    private isLoggedIn: boolean;
    constructor() {
      this.isLoggedIn = false;
    }

    public loginUser(): void {
      this.isLoggedIn = true;
    }

    public isUserLoggedIn(): boolean {
      return this.isLoggedIn;
    }
}
