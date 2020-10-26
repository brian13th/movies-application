import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { TokenService } from 'src/app/token.service';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  currentMovie: any;
  movieId: string;

  constructor(private moviesService: MoviesService,
              private token: TokenService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.params['id']
    this.currentMovie = this.moviesService.getMovie(this.movieId,this.token.token).pipe(
      tap(
        (movie) => this.editMovieForm.patchValue(movie)
      )
    );
  }

  submitData(){
    this.moviesService.editMovie(this.movieId, this.editMovieForm.value, this.token.token)
    .subscribe()
    this.router.navigate(['movies'])
  }

  editMovieForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dateReleased: new FormControl('', [Validators.required]),
  })

  get title() {
    return this.editMovieForm.get('title');
  }
  get description() {
    return this.editMovieForm.get('description');
  }
  get  dateReleased() {
    return this.editMovieForm.get('dateReleased');
  }

}
