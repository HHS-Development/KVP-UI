import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './templates/login/login.component';
import {FooterComponent} from './templates/footer/footer.component';
import {LoginService} from "./services/login.service";
import {Http} from "angular2/http";
import {BasicAuthHttp} from "./BasicAuthHttp";
import {ConfigurationService} from "./services/configuration.service";
import {TicketsService} from "./services/tickets.service";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  LoginComponent,
  FooterComponent,
    HTTP_PROVIDERS
]);
