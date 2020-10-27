import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { FavoriteService } from '../../services/favorite.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.css']
})
export class MoviesFavoriteComponent implements OnInit {

  favMovies$: Observable<Movie>;
  favMovie = [];
  constructor(private fav: FavoriteService) { }

  ngOnInit(): void {
    this.favMovies$ = this.fav.getFav()
    this.searchField.valueChanges.pipe(startWith(''))
      .subscribe(term => {
        this.favMovies$ = this.fav.getFav(term);
      })
  }
  removeMovie(id: string) {
    this.fav.removeFav(id).subscribe(res => {
      location.reload();
    });
  }

  inputForm = new FormGroup({
    searchField: new FormControl('')
  })

  get searchField() {
    return this.inputForm.get('searchField');
  }
}
