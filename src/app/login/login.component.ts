import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private _user : UserService, private _router : Router) { }
  
  ngOnInit() {
  }
  
  loginSubmit(){
    this._user.login()
      .subscribe( 
        (res : any) => {
        console.log(res, "user from LoginComponent");
        //console.log(res.token, "THIS IS token");
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userId', res.userId);
          this._user.loginStatus(true);
          this._user.name = res.userData.firstName;
          this._user.currentUserFavorites = res.userData.favorites;
          this._user.getUser();
          this._router.navigate(['/home']);
      },
      err => console.log(err)
       )
  }

}
