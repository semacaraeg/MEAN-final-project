import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  
  
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isFavorite: boolean;
  
  name : string = "";
  userControl : string = "Login";
  
  constructor(private _http: HttpClient) { }
 
  baseUrl = "http://sarah-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
  faveBaseUrl = "http://sarah-spring-2018-phortonssf.c9users.io:8080/api/favorites/";
  currentUser : any = {};
  faveMovie : any ={isFavorite : false};
  userFavoriteMovies : any;
  
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
  
  addToFavorites(){
    var userId = sessionStorage.getItem("userId");
    var accessToken = sessionStorage.getItem("token");
    this.faveMovie.userId = userId;
     console.log(this.faveMovie, "info from user Service");
    //return this._http.post(this.baseUrl + userId + "/favorites?access_token=" + accessToken, this.faveMovie);
    return this._http.post(this.faveBaseUrl, this.faveMovie);
  }
  
  removeFromFavorites(id){
     var accessToken = sessionStorage.getItem("token");
     //console.log(this.baseUrl + userId + "/favorites/" + id +"?access_token=" + accessToken);
     //return this._http.post(this.baseUrl + userId + "/favorites/" + id +"?access_token=" + accessToken);
     return this._http.delete(this.faveBaseUrl + id +"?access_token=" + accessToken);
     
  }
  
  getUserFavorites(){
    var userId = sessionStorage.getItem("userId");
    var accessToken = sessionStorage.getItem("token");
    return this._http.get( this.baseUrl + userId + "/favorites?access_token=" + accessToken);
  }
}
