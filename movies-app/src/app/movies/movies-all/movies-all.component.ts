import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith} from 'rxjs/operators';
import { FavoriteService } from '../../services/favorite.service';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.css']
})
export class MoviesAllComponent implements OnInit {

  allMovies$: Observable<Movie>;
  checkIfAddMovie: boolean = false;
  favMovies: any;
  favorite = [];

  constructor(private moviesService: MoviesService,
    private token: TokenService,
    private fav: FavoriteService) { }

  ngOnInit(): void {
    this.allMovies$ = this.moviesService.getAllMovies(this.token.token)
    this.searchField.valueChanges.pipe(startWith(''))
      .subscribe(term => {
        this.allMovies$ = this.moviesService.getAllMovies(this.token.token, term);
      })
    this.fav.getFav('').subscribe(res => {
      this.favMovies = [res]; console.log(this.favMovies[0].forEach((element) => {
        this.favorite.push(element.title)
      }))
      console.log(this.favorite)
    });

  }

  checkHeartRed(title) {
    return this.favorite.includes(title);
  }

  checkHeartWhite(title) {
    return this.favorite.includes(title);
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

  postFavorite(id: string, i) {
    this.fav.postFav({ "movieId": `${id}` }).subscribe(res => {
      console.log(res);


    });

    var elEmpty = document.getElementsByClassName('grab-empty')[i];
    var elfull = document.getElementsByClassName('grab-full')[i];
    elEmpty.classList.add('d-none')
    elfull.classList.remove('d-none')
    console.log(i)
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

  get searchField() {
    return this.inputForm.get('searchField');
  }

}
