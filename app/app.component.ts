import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NavigationComponent} from "./templates/navigation/navigation.component";
import {HomeComponent} from "./templates/home/home.component";
import {DashboardComponent} from "./templates/dashboard/dashboard.component";
import {NewTicketComponent} from "./templates/newticket/newticket.component";
import {TicketDetailComponent} from "./templates/ticketdetail/ticketdetail.component";
import {LoginComponent} from "./templates/login/login.component";
import {FooterComponent} from "./templates/footer/footer.component";

@Component({
    selector: "app-component",
    templateUrl: "app/templates/app/app.html",
    directives: [ROUTER_DIRECTIVES, NavigationComponent, LoginComponent, FooterComponent]
})
@RouteConfig([
    {path: "/", name: "Home", component: HomeComponent, useAsDefault: true},
    {path: "/dashboard", name: "Dashboard", component: DashboardComponent},
    {path: "/newticket", name: "Newticket", component: NewTicketComponent},
    {path: "/ticketdetail", name: "TicketDetail", component: TicketDetailComponent}
])
export class AppComponent {
}
