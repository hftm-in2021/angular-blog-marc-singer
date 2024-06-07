import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs';
import { hasRole } from './jwt';

export const authenticationGuard: CanActivateFn = () => {
  const oidcSecurityService = inject(OidcSecurityService);

  return oidcSecurityService.checkAuth().pipe(
    map((loginResponse: LoginResponse) => {
      if (
        loginResponse.isAuthenticated &&
        hasRole('user', loginResponse.accessToken)
      ) {
        return true;
      } else {
        oidcSecurityService.authorize();
        return false;
      }
    })
  );
};
