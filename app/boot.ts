import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './templates/login/login.component';
import {FooterComponent} from './templates/footer/footer.component';
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  LoginComponent,
  FooterComponent
]);
