import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  urlFavs: string = 'http://localhost:4242/users/favorites';

  constructor(private http: HttpClient,
              private token: TokenService) { }

  getFav(){
    return this.http.get<any>(this.urlFavs, {headers: {"token": this.token.token}})
  }

  postFav(movieId){
    return this.http.post<any>(this.urlFavs, movieId, {headers: {"token": this.token.token}});
  }

  removeFav(id: string){
    return this.http.delete<any>(this.urlFavs + `/${id}`, {headers: {"token": this.token.token}})
  }
}
