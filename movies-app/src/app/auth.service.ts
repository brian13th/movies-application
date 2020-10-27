import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlUsers: string = 'http://localhost:4242/users';
  private urlSignIn: string = 'http://localhost:4242/users/signin';
  private urlGetUser: string = 'http://localhost:4242/users/details';
  private urlPutUser: string = 'http://localhost:4242/users/';

  constructor(private http: HttpClient, private token:TokenService) { }

  get username(){
    return sessionStorage.getItem('username');
  }

  createUser(user){
    return this.http.post<any>(this.urlUsers,user);
  }

  loginUser(name){
    return this.http.post<any>(this.urlSignIn,name);
  }

  getUser(){
    return this.http.get<any>(this.urlGetUser, {headers: {"token": `${this.token.token}`}});
  }

  putUser(user){
    return this.http.put<any>(this.urlPutUser,user,{headers: {"token": `${this.token.token}` }});
  }

  getUserAuth(){
    return this.http.get<any>(this.urlGetUser, {headers: {"token": `${this.token.token}`, observe: 'body'}});
  }
}
