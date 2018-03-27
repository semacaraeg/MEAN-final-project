import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { MovieSearchService } from '../search-form/movie-search.service';
@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() currentPage = 1;
  @Input() totalPages;
  @Input() currentMode;
  @Input() currentQuery;
  
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  
  
  constructor(private _movie : MovieSearchService) { }

  ngOnInit() {
    this.changePage.emit(this.currentPage);
  }
  
  next(){
    this.changePage.emit(this.currentPage + 1);
    this._movie.getMovies(this.currentMode, this.currentPage, this.currentQuery);
  }
  
  prev(){
    this.changePage.emit(this.currentPage - 1);
    this._movie.getMovies(this.currentMode, this.currentPage, this.currentQuery);
  }

}
