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

  constructor(private _movie : MovieSearchService, private _user: UserService, private _router : Router, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this._movie.getMovies2("popular", 1, "");
  }
  
  
}
