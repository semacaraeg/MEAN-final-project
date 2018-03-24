import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }
  currentUser : any;

  baseUrl = "http://sarah-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
  currentUser : any = {};
  
  login(){
      return this._http.post(this.baseUrl + "login", this.currentUser);
  }
  
  register(){
      return this._http.post(this.baseUrl, this.currentUser);
  }
  
}
