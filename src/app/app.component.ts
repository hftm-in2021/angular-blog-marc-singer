import { Component } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { LoadingStateService } from './core/loading-state.service';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-frog-16';

  isLoading$: Observable<boolean>;
  loginResponse$: Observable<LoginResponse>;

  constructor(
    private loadingService: LoadingStateService,
    private oidcSecurityService: OidcSecurityService
  ) {
    this.isLoading$ = this.loadingService.state$;

    this.loginResponse$ = oidcSecurityService.checkAuth().pipe(
      filter((loginRespose) => !!loginRespose),
      tap((x) => console.log(x))
    );
  }

  login() {
    this.oidcSecurityService.authorize();
  }
  logout() {
    this.oidcSecurityService.logoff().subscribe((x) => console.log(x));
  }
}
