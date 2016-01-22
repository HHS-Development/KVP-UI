import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Location} from "angular2/router";
@Component({
    selector: "footer-component",
    templateUrl: "app/templates/footer/footer.html",
    styleUrls: ["app/css/styles.css"],
    directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {
  constructor(private _location: Location) { }
  getLinkStyle(path):boolean {
      return this._location.path() === path;
  }
}
