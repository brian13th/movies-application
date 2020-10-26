import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavoriteComponent } from './movies-favorite.component';

describe('MoviesFavoriteComponent', () => {
  let component: MoviesFavoriteComponent;
  let fixture: ComponentFixture<MoviesFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
