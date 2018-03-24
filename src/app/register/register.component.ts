import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _user : UserService , private _router : Router) { }

  ngOnInit() {
  }

  registerSubmit(){
     this._user.register()
      .subscribe( res => console.log(res))
      alert("Registration successful!");
      this._router.navigate(['/login']);
  }
}
