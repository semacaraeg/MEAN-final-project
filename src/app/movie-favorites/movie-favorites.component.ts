import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../search-form/movie-search.service';
import { UserService} from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.component.html',
  styleUrls: ['./movie-favorites.component.scss']
})
export class MovieFavoritesComponent implements OnInit {

  userFavoriteMovies : any; 
  
  constructor(private _movie : MovieSearchService, private _user : UserService, private _router : Router) { }

  ngOnInit() {
    //console.log(this._user.isLoggedIn);
    if(this._user.isLoggedIn._value){
    this.getFavorites();
    }else{
      this._router.navigate(['/home']);
    }
  }

  getFavorites(){
    this._user.getUserFavorites()
      .subscribe((res : any )=> {
            //console.log(res);
            this._user.userFavoriteMovies = res;
            console.log(this.userFavoriteMovies);
            this.userFavoriteMovies = this._user.userFavoriteMovies;
    })
  }
  
  getMovieDetails(movieId){
    this._movie.getMovieDetails("movie", 1, movieId);
    this.basic = true;
  }
  
  removeFromFavorites(id){
    this._user.removeFromFavorites(id)
      .subscribe( res => console.log(res))
  }

}
