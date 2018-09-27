import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCanActivateChildGuard implements CanActivateChild {

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('MyCanActivateChildGuard');
    console.log("state.url")
    console.log(state.url);
    console.log("next.params")
    console.log(next.params);

    return true;
  }

}
