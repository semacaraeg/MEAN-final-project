import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  
  //isLoggedIn : boolean = false;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  name : string = "";
  userControl : string = "Login";
  constructor(private _http: HttpClient) { }
 
  baseUrl = "http://sarah-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
  currentUser : any = {};
  
  login(){
      return this._http.post(this.baseUrl + "login", this.currentUser);
  }
  
  register(){
      return this._http.post(this.baseUrl, this.currentUser);
  }
  
  loginStatus(loginState){
    this.isLoggedIn.next(loginState)
  }
  
  logout(){
    var accessToken = sessionStorage.getItem("token");
    console.log(this.baseUrl + "logout?access_token=" + accessToken);
    return this._http.post(this.baseUrl + "logout?access_token=" + accessToken, this.currentUser);
  }
  
  getUser(){
    var userId = sessionStorage.getItem("userId");
    console.log(userId, this.isLoggedIn, "USER ID in USERSERVICE");
  }
  
  
}
