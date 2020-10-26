import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesAllComponent } from './movies-all/movies-all.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [MoviesAllComponent, MovieEditComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MoviesModule { }
