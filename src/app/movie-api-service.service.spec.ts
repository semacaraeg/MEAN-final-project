import { TestBed, inject } from '@angular/core/testing';

import { MovieApiServiceService } from './movie-api-service.service';

describe('MovieApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieApiServiceService]
    });
  });

  it('should be created', inject([MovieApiServiceService], (service: MovieApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
