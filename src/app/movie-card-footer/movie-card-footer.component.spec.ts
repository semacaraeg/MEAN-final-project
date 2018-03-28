import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardFooterComponent } from './movie-card-footer.component';

describe('MovieCardFooterComponent', () => {
  let component: MovieCardFooterComponent;
  let fixture: ComponentFixture<MovieCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
