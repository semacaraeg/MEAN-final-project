import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchService} from '../search-form/movie-search.service';
import { UserService } from '../user.service';
import { Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies;
  
  basic : boolean = false;
  // isFavorite : boolean;
  safeUrl : any;
  userFavorites = [];
  lastMode = this._movie.currentMode;
  
  constructor(private _movie : MovieSearchService, private _user: UserService, private _router : Router, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
   
  }
  
  setMovieId(id){
    console.log(id);
    this._movie.currentMovieId = id;
  }
  
  getMovieDetails(movieId){
    
    this._movie.getMovieDetails("movie", 1, movieId);
    //this.sanitizeVideo(this._movie.movieDetails.videos.results[0].key);
    this.basic = true;
  }
  
  exit(){
    this.basic = false;
    this._movie.currentMode = this.lastMode;
  }
  
   saveToFavorites(title, movieId, overview, poster_path){
    console.log(this._user.isLoggedIn.value, "ifLoggedIn");
    this.checkIfMovieIsFavorite(movieId);
    if(this.checkIfMovieIsFavorite(movieId)){
      console.log("movie is already favorite");
     }
    else{
    this._user.faveMovie.title = title;
    this._user.faveMovie.movieId = movieId;
    this._user.faveMovie.overview = overview;
    this._user.faveMovie.poster_path = poster_path;
    this._user.addToFavorites()
      .subscribe( res => console.log(res))
   }
  }
  
  removeFromFavorites(id){
    this._user.removeFromFavorites(id)
      .subscribe( res => console.log(res))
  }
 
  checkIfMovieIsFavorite: boolean (movieId){
    console.log(movieId, "movieId from check");
    console.log(this._user.currentUserFavorites);
    return this._user.currentUserFavorites.some( p =>{
      return p.movieId === movieId;
    });
  }
 
 sanitizeVideo(videoUrl){
   this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ videoUrl);
   console.log(this.safeUrl);
 }
}
