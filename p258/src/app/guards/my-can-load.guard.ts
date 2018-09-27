import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCanLoadGuard implements CanLoad {
  canLoad(route: Route): boolean {
    console.log('MyCanLoadGuard');
    console.log('route');
    console.log(route);
    console.log('route.path');
    console.log(route.path);

    if (window.confirm("로드 되었습니다. 진행하시겠습니까?")) {
      return true;
    } else {
      return false;
    }
  }
}
