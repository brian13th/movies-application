import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  urlMovies: string = 'http://localhost:4242/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(token: string, term?: string){
    return this.http.get<Movie>(`${this.urlMovies}?title=${term}`, {headers: {"token": `${token}`}});
  }

  createMovie(movie, token:string){
    return this.http.post<any>(this.urlMovies,movie, {headers: {"token": `${token}`}});
  }

  getMovie(id:string, token:string){
    return this.http.get<any>(this.urlMovies + `/${id}`, {headers: {"token": `${token}`}});
  }

  editMovie(id:string, movie, token:string){
    return this.http.put<any>(this.urlMovies + `/${id}`, movie, {headers: {"token": `${token}`}})
  }

  deleteMovie(id: string,  token:string){
    return this.http.delete<any>(this.urlMovies+ `/${id}`, {headers: {"token": `${token}`}});
  }
}
