import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchService} from '../search-form/movie-search.service';
import { UserService } from '../user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-card-footer',
  templateUrl: './movie-card-footer.component.html',
  styleUrls: ['./movie-card-footer.component.scss']
})
export class MovieCardFooterComponent implements OnInit {

  @Input() movie;
  @Input() mode : string;
  
  lastMode = this._movie.currentMode;
  isFavorite : boolean;
  safeUrl : any;
  movieId : number;
  //userFavoriteMovies : any; 
  faveModelId : any;
  isRemoved : boolean;
  
  constructor(private _movie : MovieSearchService, private _user: UserService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this._movie.getMovieDetails("movie", 1, this.movie.id);
  }
  exit(){
    this._movie.basic = false;
    this._movie.currentMode = this.lastMode;
  }
  
  getMovieDetails(){
    console.log(this.mode);
    //this._movie.currentMovieId = this.movie.id;
    if(this.mode == "favorite"){
      this._movie.getMovieDetails("movie", 1, this.movie.movieId);
      console.log(this.movie.movieId);
    }else{
    this._movie.getMovieDetails("movie", 1, this.movie.id);
    console.log(this.movie.id);
    }
    
    this._movie.basic = true;
  }
  
  saveToFavorites(movie){
    console.log(this._user.isLoggedIn.value, "ifLoggedIn");
   // this.checkIfMovieIsFavorite(this.movieId);
    if(this.checkIfMovieIsFavorite(movie)){
      console.log("movie is already favorite");
     }else{
    console.log(this._user.currentUserFavorites, "user favorites");   
    this.isFavorite = true;
    this._user.faveMovie.title = movie.title;
    this._user.faveMovie.movieId = movie.id;
    this._user.faveMovie.overview = movie.overview;
    this._user.faveMovie.poster_path = movie.poster_path;
    this._user.addToFavorites()
      .subscribe( res => {
        console.log(res.id, "model fave id")
        this._user.currentUserFavorites.push(res);
      })
   }
  }
  

  deleteFavorite(movie){
    if(this.isFavorite == ""){
      this.isRemoved = true;
    }
    //console.log(this.isFavorite, "isFavorite when click delete");
    this.isFavorite = false;
   
    let movieId;
    if(this.mode == "favorite"){
      movieId = movie.movieId;
    }else{
      movieId = movie.id;
    }
    this._user.getUserFavorites()
      .subscribe((res : any )=> {
            //console.log(res);
            this._user.userFavoriteMovies = res;
            console.log(this._user.userFavoriteMovies);
            this.getModelId(movieId);
    })
  }
  
  getModelId(movieId){
    for(let i=0; i< this._user.userFavoriteMovies.length; i++){
      if(this._user.userFavoriteMovies[i].movieId == movieId){
         this.faveModelId = this._user.userFavoriteMovies[i].id;
      }
    }
      //console.log(this.faveModelId);
      this._user.removeFromFavorites(this.faveModelId)
      .subscribe( res => {
       //this._user.userFavoriteMovies.splice(res, 1);
        console.log(res , "REMOVE");
      })
       this._user.userFavoriteMovies.filter(movie => movie.id == this.faveModelId);
  }
 
  checkIfMovieIsFavorite: boolean (movie){
    let movieId;
    if(this.mode == "favorite"){
      movieId = movie.movieId;
    }else{
      movieId = movie.id;
    }
    return this._user.currentUserFavorites.some( (p) =>{
      return p.movieId === movieId;
    });
  }
 sanitizeVideo(videoUrl){
   this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ videoUrl);
   console.log(this.safeUrl);
 }
 
 

}
