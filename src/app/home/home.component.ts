/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { MovieSearchService } from '../search-form/movie-search.service';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private _movie : MovieSearchService) { }

  ngOnInit() {
      this._movie.getPopularMovies();
  }

}
