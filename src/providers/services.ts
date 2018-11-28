import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app/appSettings';

@Injectable()
export class Services {
  baseUrl = AppSettings.API;
  constructor(private http: Http) {
  }
  private pageName : any;
    setOption(value) {
        this.pageName = value;
        console.log('this.pageName : ',this.pageName);
    }
    getConfig() {
        return this.pageName;
    }
  /**
   * Login Service
   */
  login(credentials) {
      return Observable.create(observer => {
        const url = this.baseUrl + 'mem_login.php';
        this.http.post(url, credentials)
          .map(res => res.json())
          .subscribe(
          (response) => {
            console.log('respone: ',response);
            observer.next(response);
            observer.complete();
          },
          (error) => {
            console.log('error: ',error);
            observer.error(error);
          }
          )
      })
  }
}