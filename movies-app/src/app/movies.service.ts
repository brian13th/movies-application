import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  urlAllMovies: string = 'http://localhost:4242/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(token: string){
    return this.http.get<Movie>(this.urlAllMovies, {headers: {"token": `${token}` }});
  }
}
