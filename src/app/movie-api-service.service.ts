import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  { map, pluck } from 'rxjs/operators';
import { pipe } from 'rxjs/Rx';


@Injectable()
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  
  movieApiUrl = "https://api.themoviedb.org/3/search/movie?api_key=319e15d525fb567698dd03363cc456ac&query=";
  //apiKey = "319e15d525fb567698dd03363cc456ac";
  popularApi = "https://api.themoviedb.org/3/movie/popular?api_key=319e15d525fb567698dd03363cc456ac&language=en-US&page=1";
  
  fullApiUrl : string;
  
    getMovies(searchQuery){
    this.fullApiUrl = this.movieApiUrl + searchQuery;
     return this.http.get(this.fullApiUrl)
       .pipe(
          map( (res: any) => {
            return res.results;
          })
        )
      }
      
      getPopularMovies(){
       return this.http.get(this.popularApi)
       .pipe(
          map( (res: any) => {
            return res.results;
          })
        )
      } 
      }

}
