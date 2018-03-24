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
      .subscribe( res => {
        console.log(res, "THIS IS");
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        this._router.navigate(['/dashboard']);
      })
  }

}
