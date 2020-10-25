import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlUsers: string = 'http://localhost:4242/users';
  private urlSignIn: string = 'http://localhost:4242/users/signin';
  private urlGetUser: string = 'http://localhost:4242/users/details';
  private urlPutUser: string = 'http://localhost:4242/users/';

  constructor(private http: HttpClient) { }

  get isLoggedIn(){
    if (sessionStorage.getItem('jwt')){
      return true;
    } else {
      return false;
    }
  }

  get username(){
    return sessionStorage.getItem('username');
  }

  createUser(user){
    return this.http.post<any>(this.urlUsers,user);
  }

  loginUser(name){
    return this.http.post<any>(this.urlSignIn,name);
  }

  getUser(token: string){
    return this.http.get<any>(this.urlGetUser, {headers: {"token": `${token}`}});
  }

  putUser(user, token: string){
    return this.http.put<any>(this.urlPutUser,user,{headers: {"token": `${token}` }});
  }

  getUserAuth(token: string){
    return this.http.get<any>(this.urlGetUser, {headers: {"token": `${token}`, observe: 'body'}});
  }
}
