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
  faveModelId : any;
  
  constructor(private _movie : MovieSearchService, private _user : UserService, private _router : Router) { }

  ngOnInit() {
    //console.log(this._user.isLoggedIn);
    if(this._user.isLoggedIn){
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
  
  // getMovieDetails(movieId){
  //   this._movie.getMovieDetails("movie", 1, movieId);
  //   this.basic = true;
  // }
  
  deleteFavorite(movieId){
    this._user.isFavorite = false;
    this._user.getUserFavorites()
      .subscribe((res : any )=> {
            //console.log(res);
            this._user.userFavoriteMovies = res;
            console.log(this._user.userFavoriteMovies);
            this.getModelId(movieId);
    })
  }

  getModelId(movieId){
    var removeIndex;
    
    for(var i=0; i< this._user.userFavoriteMovies.length; i++){
      if(this._user.userFavoriteMovies[i].movieId == movieId){
         this.faveModelId = this._user.userFavoriteMovies[i].id;
         removeIndex = i;
      }
    }
      //console.log(this.faveModelId);
      this._user.removeFromFavorites(this.faveModelId)
      .subscribe( res => {
        this._user.userFavoriteMovies.splice(removeIndex, 1);
        this._user.currentUserFavorites.splice(removeIndex, 1);
        //console.log(this._user.userFavoriteMovies.filter(movie => movie.id == this.faveModelId));
        console.log(this._user.userFavoriteMovies);
        console.log(res , "REMOVE");
      
        this.getFavorites();
        
        //this._movie.getMovies2(_movie.currentMode,_movie.currentPage, _movie.currentQuery);
      })
  }


}
