import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MyCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private router: Router) {}

  canDeactivate(
    component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('MyCanDeactivateGuard');
    console.log("component");
    console.log(component);
    console.log("currentRoute");
    console.log(currentRoute);
    console.log("currentState");
    console.log(currentState);

    return window.confirm(
      "화면이 전환되면 저장되지 않은 정보는 손실됩니다." +
      "\n정말 변경하시겠습니까?");
  }

}
