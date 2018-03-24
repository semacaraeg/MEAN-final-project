import { Component, OnInit, Input } from '@angular/core';
import {MovieSearchService} from '../search-form/movie-search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies;
  
  
  constructor(private _movie : MovieSearchService) { }

  ngOnInit() {
  }
  
  setMovieId(id){
    console.log(id);
    this._movie.currentMovieId = id;
  }

}
