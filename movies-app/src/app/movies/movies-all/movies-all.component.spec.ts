import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAllComponent } from './movies-all.component';

describe('MoviesAllComponent', () => {
  let component: MoviesAllComponent;
  let fixture: ComponentFixture<MoviesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
