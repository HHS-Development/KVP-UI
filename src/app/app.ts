import {bootstrap, Component} from 'angular2/angular2';
import {KVPTable} from './modules/kvpTable';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app/app.html',
    styleUrls: ['app/templates/app/app.css'],
    directives: [KVPTable]
})
class AppComponent { }
bootstrap(AppComponent);
