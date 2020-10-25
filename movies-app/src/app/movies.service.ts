import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  urlMovies: string = 'http://localhost:4242/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(token: string){
    return this.http.get<Movie>(this.urlMovies, {headers: {"token": `${token}`}});
  }

  createMovie(movie, token:string){
    return this.http.post<any>(this.urlMovies,movie, {headers: {"token": `${token}`}});
  }

  deleteMovie(id: string,  token:string){
    return this.http.delete<any>(this.urlMovies+ `/${id}`, {headers: {"token": `${token}`}});
  }
}
