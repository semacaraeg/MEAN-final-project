import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from './movie-search.service';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
 
  constructor(private _movie : MovieSearchService) { }

  ngOnInit() {
  }

}
