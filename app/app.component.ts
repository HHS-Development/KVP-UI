import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from './templates/navigation/navigation.component';
import {DashboardComponent} from './templates/dashboard/dashboard.component';

@Component({
    selector: 'app-component',
    templateUrl: 'app/templates/app/app.html',
    directives: [ROUTER_DIRECTIVES, NavigationComponent]
})
@RouteConfig([
  {path:'/home', name: 'Dashboard', component: DashboardComponent, useAsDefault: true}
])
export class AppComponent { }
