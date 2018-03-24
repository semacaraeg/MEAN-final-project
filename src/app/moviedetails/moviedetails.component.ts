import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../search-form/movie-search.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private _movie : MovieSearchService) { }

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails(){
    this._movie.getMovieDetails("movie", 1, this._movie.currentMovieId);
  }
}
