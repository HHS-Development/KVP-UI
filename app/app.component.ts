import {Component} from 'angular2/core';
import {NavigationComponent} from './templates/navigation/navigation.component';
@Component({
    selector: 'app-component',
    templateUrl: 'app/templates/app/app.html',
    directives: [NavigationComponent]
})
export class AppComponent { }
