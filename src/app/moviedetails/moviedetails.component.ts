import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../search-form/movie-search.service';
import { UserService} from '../user.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  basic : boolean = false;
  userFavoriteMovies : any; 
  
  constructor(private _movie : MovieSearchService, private _user : UserService) { }

  ngOnInit() {
    this. getFavorites();
  }

  getFavorites(){
    this._user.getUserFavorites()
      .subscribe((res : any )=> {
            //console.log(res);
            this.userFavoriteMovies = res;
            console.log(this.userFavoriteMovies);
    })
  }
  
  getMovieDetails(movieId){
    this._movie.getMovieDetails("movie", 1, movieId);
    this.basic = true;
  }
  
}
