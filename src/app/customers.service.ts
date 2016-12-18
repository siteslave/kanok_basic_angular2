import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  url: string;  
  constructor(private http: Http) {
    this.url = 'http://localhost:3000';
   }

  getCustomers(token: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.url}/customers`, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });

  }

  remove(token: string, id: number) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
      let options = new RequestOptions({ headers: headers });

      this.http.delete(`${this.url}/customers/${id}`, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });

  }

}
