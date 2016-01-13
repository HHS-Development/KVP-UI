var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var kvpTable_1 = require('./modules/kvpTable');
var Ticket_1 = require('./types/Ticket');
var KVPApp = (function () {
    function KVPApp() {
        this.tickets = [];
        var ticket = new Ticket_1.Ticket(0, "test 0", "bla", 1);
        console.log(ticket.title);
        //mock
        this.tickets.push(new Ticket_1.Ticket(0, "test 0", "bla", 1));
        this.tickets.push(new Ticket_1.Ticket(1, "test 1", "bla", 6));
        this.tickets.push(new Ticket_1.Ticket(2, "test 2", "bla", 4));
        this.tickets.push(new Ticket_1.Ticket(3, "test 3", "bla", 7));
        this.tickets.push(new Ticket_1.Ticket(4, "test 4", "bla", 0));
        this.tickets.push(new Ticket_1.Ticket(5, "test 5", "bla", 3));
        this.tickets.push(new Ticket_1.Ticket(6, "test 6", "bla", 5));
    }
    KVPApp = __decorate([
        angular2_1.Component({
            selector: 'kvp-app',
            templateUrl: 'app/templates/kvpApp/kvpApp.html',
            styleUrls: ['app/templates/kvpApp/kvpApp.css'],
            directives: [kvpTable_1.KVPTable]
        }), 
        __metadata('design:paramtypes', [])
    ], KVPApp);
    return KVPApp;
})();
angular2_1.bootstrap(KVPApp);
//# sourceMappingURL=kvpApp.js.map