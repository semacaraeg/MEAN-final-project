import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchService} from '../search-form/movie-search.service';
import { UserService } from '../user.service';
import { Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie;
  @Input() mode;
  
  isFavorite : boolean = false;
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
  
  // getMovieDetails(movieId){
  //   this._movie.getMovieDetails("movie", 1, movieId);
  //   //this.sanitizeVideo(this._movie.movieDetails.videos.results[0].key);
  //   this.basic = true;
  // }
  
  

}
