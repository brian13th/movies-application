import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../movies.service';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.css']
})
export class MoviesAllComponent implements OnInit {

  allMovies$: Observable<Movie>;
  checkIfAddMovie: boolean = false;
  searchTerm: string ='';

  constructor(private moviesService: MoviesService, private token: TokenService) { }

  ngOnInit(): void {
    this.allMovies$ = this.moviesService.getAllMovies(this.token.token)
  }

  addMoviePanel(){
    this.checkIfAddMovie = true;
  }

  removeMoviePanel(){
    this.checkIfAddMovie = false;
  }

  submitData(){
    this.moviesService.createMovie(this.movieToSend(this.addMovieForm.value), this.token.token).subscribe(
      res=>console.log(res)
    )
    this.checkIfAddMovie = false;
    location.reload()
  }

  deleteMovie(id: string){
    this.moviesService.deleteMovie(id, this.token.token).subscribe(
      res => console.log(res)
    )
    location.reload()
  }

  movieToSend(movie) {
    return {
      "title": movie.title,
      "description": movie.description,
      "dateReleased": movie.dateReleased,
    }
  }

  inputForm = new FormGroup({
    searchField: new FormControl('')
  })


  addMovieForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dateReleased: new FormControl('', [Validators.required]),
  })
  get title() {
    return this.addMovieForm.get('title');
  }
  get description() {
    return this.addMovieForm.get('description');
  }
  get dateReleased() {
    return this.addMovieForm.get('dateReleased');
  }

}
