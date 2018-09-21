import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';

import { Emp } from './emp.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpHttpService {
  private empsUrl: string = "http://localhost:3000/employees";
  // 브라우저에서 서버로 보내는 데이터가 utf-8 인코딩 된
  // application/json 마임타입의 데이터임을 통보합니다.
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8' });

  constructor(
    private http: Http,
    private httpClient: HttpClient) { }

  getEmps(): Observable<Array<any>> {
    return this.http.get(this.empsUrl)
      .pipe(
        map(response => {
          console.log(response);
          return response.json(); // 필요한 데이터만 추출한다.
        })
      );
  }

  addEmp(firstName: string, lastName: string): Observable<Emp> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let emp = { "id": 0, "firstName": firstName, "lastName": lastName };

    return this.http.post(this.empsUrl, JSON.stringify(emp), options)
      .pipe(
        map(response => {
          console.log('>>>')
          console.log(response);
          return response.json(); // 필요한 데이터만 추출한다.
        })
      );
  }

  removeEmp(emp): Observable<boolean> {
    const url = `${this.empsUrl}/${emp.id}`;
    return this.http.delete(url, { headers: this.headers })
      // .map(this.extractData).catch(this.handleError);
      .pipe(
        map(response => {
          console.log('***')
          console.log(response);
          return true;
        })
      );
  }

  // private extractData(res: Response) {
  //   console.log('res = ' + JSON.stringify(res));
  //   let json = res.text();
  //   json = JSON.parse(json);
  //   return json || [];
  // }

  // private extractDataForObject(res: Response) {
  //   console.log('res = ' + JSON.stringify(res));
  //   let json = res.text();
  //   json = JSON.parse(json);
  //   return json || {};
  // }

  // private handleError(res: Response) {
  //   console.log(res);
  //   return Observable.throw(res.json().error || 'Server Down');
  // }

}
