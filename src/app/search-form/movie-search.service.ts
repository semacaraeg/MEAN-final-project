import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieApiServiceService } from '../movie-api-service.service';


@Injectable()
export class MovieSearchService {
  movieResults : any;
  movieDetails : any;
  actionLabel: string = "Popular Movies";
  currentPage = 1;
  totalPages;
  currentMode : string;
  currentQuery : string;
  currentMovieId;
  
  constructor(private _movie: MovieApiServiceService) { }
  
  doSearch(mode, page, searchQuery){
   this.currentPage = 1;
   this.actionLabel = "Search Results";
   this.getMovies(mode, page, searchQuery);
  }
  
  getMovies(mode, page, searchQuery){
   this.currentMode = mode;
   this.currentQuery = searchQuery;
   this._movie.getMovies2(this.currentMode, this.currentPage, this.currentQuery)
    .subscribe((res : any )=> {
            this.totalPages = res.total_pages;
            this.movieResults = res.results;
            console.log(this.movieResults);
    })
  }
  
  getMovieDetails(mode, page){
    this.currentMode = mode;
   this._movie.getMovies2(this.currentMode, this.currentPage, this.currentMovieId)
    .subscribe((res : any )=> {
            this.movieDetails = res;
            console.log(this.movieDetails);
    })
  }
  
}
