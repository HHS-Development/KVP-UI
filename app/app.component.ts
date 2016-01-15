import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from './templates/navigation/navigation.component';
import {DashboardComponent} from './templates/dashboard/dashboard.component';
import {NewTicketComponent} from './templates/newticket/newticket.component';
import {LoginComponent} from './templates/login/login.component';

@Component({
    selector: 'app-component',
    templateUrl: 'app/templates/app/app.html',
    directives: [ROUTER_DIRECTIVES, NavigationComponent, LoginComponent]
})
@RouteConfig([
  {path:'/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path:'/newticket', name: 'Newticket', component: NewTicketComponent}
])
export class AppComponent { }
