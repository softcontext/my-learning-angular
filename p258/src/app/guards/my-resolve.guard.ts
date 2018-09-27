import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolveGuard implements Resolve<any> {
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    console.log('MyResolveGuard');
    console.log("next.params['id']");
    console.log(next.params['id']);
    console.log("next.paramMap.get('id')")
    console.log(next.paramMap.get('id'));

    return { data: 'Hello World!' };
  }
}
