import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _user : UserService) { }

  ngOnInit() {
  }

  registerSubmit(){
     this._user.register()
      .subscribe( res => console.log(res))
  }
}
