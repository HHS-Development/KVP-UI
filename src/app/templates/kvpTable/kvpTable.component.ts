import {Component, Input, NgFor} from 'angular2/angular2';

import {Ticket} from '../types/Ticket';

@Component({
    selector: 'kvp-table',
    templateUrl: 'app/templates/kvpTable/kvpTable.html',
    styleUrls: ['app/templates/kvpTable/kvpTable.css'],
    directives: [NgFor]
})
export class KVPTable {

    @Input() tickets: Array<Ticket>;

}

