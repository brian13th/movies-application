import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FavoriteService } from 'src/app/favorite.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.css']
})
export class MoviesFavoriteComponent implements OnInit {

  favMovies$: Observable<Movie>;
  constructor(private fav: FavoriteService) { }

  ngOnInit(): void {
    this.favMovies$ = this.fav.getFav()
  }
  removeMovie(id: string){
    this.fav.removeFav(id).subscribe(res=>{
      location.reload();
    });
  }

  inputForm = new FormGroup({
    searchField: new FormControl('')
  })
}
