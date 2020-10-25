import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.css']
})
export class MoviesAllComponent implements OnInit {

  allMovies$: Observable<Movie>;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.allMovies$ = this.moviesService.getAllMovies();
  }

}
