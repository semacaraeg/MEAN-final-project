import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { MovieSearchService } from './search-form/movie-search.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   
    constructor(private _router: Router, private _user: UserService, private _movie : MovieSearchService) {}
    isLoggedIn : boolean;
    
    ngOnInit(){
        this._user.isLoggedIn
            .subscribe( logState => this.isLoggedIn = logState);
    }
    
    logout(){
    this._user.logout()
      .subscribe( 
        (res : any) => {
          //console.log(res, "user from Logout");
          sessionStorage.clear();
          this._user.loginStatus(false);
          this._user.currentUser = {};
          this._movie.movieResults = "";
          console.log(this._user.getUser());
          this._router.navigate(['/home']);
        //   this._router.reload();
      },
      err => console.log(err)
       )
  }
}
