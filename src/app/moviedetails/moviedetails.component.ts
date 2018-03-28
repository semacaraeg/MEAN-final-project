import { Component, OnInit, Input} from '@angular/core';
import { MovieSearchService } from '../search-form/movie-search.service';
import { UserService} from '../user.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  
  @Input() movieId;
  lastMode = this._movie.currentMode;
  movieDetailResults : any;
  
  constructor(private _movie : MovieSearchService, private _user : UserService) { 
     this.movieDetailResults = this._movie.movieDetails;
  }

  ngOnInit() {
    //this._movie.getMovieDetails("movie", 1, this.movieId);
  }

   exit(){
    this._movie.basic = false;
    this._movie.currentMode = this.lastMode;
  }
  
}
