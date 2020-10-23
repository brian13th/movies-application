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

  constructor(private http: HttpClient) { }

  createUser(user){
    return this.http.post<any>(this.urlUsers,user);
  }

  loginUser(name){
    return this.http.post<any>(this.urlSignIn,name);
  }

  getUser(token: string){
    return this.http.get<any>(this.urlGetUser, {headers: {"token": `${token}`}});
  }
}
