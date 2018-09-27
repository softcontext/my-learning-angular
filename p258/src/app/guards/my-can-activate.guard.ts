import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class UserToken { }

export class Permissions {
  canActivate(userToken: UserToken, params: any): boolean {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MyCanActivateGuard implements CanActivate {
  constructor(private permissions: Permissions, private userToken: UserToken) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('MyCanActivateGuard');
    console.log('state.url')
    console.log(state.url);
    console.log('next.params');
    console.log(next.params);

    // If the function returns false (e.g: the user is not logged in)
    // the application will not navigate to the route.
    return this.permissions.canActivate(this.userToken, next.params);
  }
}
