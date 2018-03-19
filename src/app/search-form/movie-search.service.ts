import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieApiServiceService } from '../movie-api-service.service';


@Injectable()
export class MovieSearchService {
  movieResults : any;
  
  constructor(private _movie: MovieApiServiceService) { }

  doSearch(searchQuery){
   this._movie.getMovies(searchQuery)
    .subscribe((res : any )=> {
            this.movieResults = res;
            console.log(this.movieResults);
    })
  }
  
}
