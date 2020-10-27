import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, mergeMap, filter } from 'rxjs/operators';
import { FavoriteService } from 'src/app/favorite.service';
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
  checkHeartIcon: boolean = true;
  searchTerm: string = '';

  constructor(private moviesService: MoviesService,
    private token: TokenService,
    private fav: FavoriteService) { }

  ngOnInit(): void {
    this.allMovies$ = this.moviesService.getAllMovies(this.token.token)
    this.searchField.valueChanges.pipe(startWith(''))
    .subscribe(term =>
      {
        this.allMovies$ = this.moviesService.getAllMovies(this.token.token, term);
      })
  }

  addMoviePanel() {
    this.checkIfAddMovie = true;
  }

  removeMoviePanel() {
    this.checkIfAddMovie = false;
  }

  submitData() {
    this.moviesService.createMovie(this.movieToSend(this.addMovieForm.value), this.token.token).subscribe(
      res => console.log(res)
    )
    this.checkIfAddMovie = false;
    location.reload()
  }

  deleteMovie(id: string) {
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

  postFavorite(id: string) {
    this.fav.postFav({ "movieId": `${id}` }).subscribe(res => {
      console.log(res)
    })
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

  get searchField(){
    return this.inputForm.get('searchField');
  }

}
