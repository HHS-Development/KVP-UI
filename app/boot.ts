import {bootstrap}    from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./templates/login/login.component";
import {FooterComponent} from "./templates/footer/footer.component";
import {Http} from "angular2/http";
import {TicketsService} from "./services/tickets.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";
import {ServiceConfiguration} from "./config/configurations";
import {TicketServiceConfiguration} from "./config/configurations";
import {ConnectionBackend} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {Inject} from "angular2/core";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    LoginComponent,
    FooterComponent,
    HTTP_PROVIDERS,

    ConnectionBackend,

    //Configuration
    provide(ServiceConfiguration, {useValue: {url: '/ticket'}, useClass: TicketServiceConfiguration}),
    provide('AuthValidateUrl', {useValue: '/login'})
]);
