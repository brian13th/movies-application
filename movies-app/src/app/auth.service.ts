import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlUsers: string = 'http://localhost:4242/users';
  urlSignIn: string = 'http://localhost:4242/users/signin';

  constructor(private http: HttpClient) { }

  createUser(user){
    return this.http.post<any>(this.urlUsers,user).pipe(
      catchError(error=> {
        return throwError(error)})
      )
  }

  getUser(name){
    return this.http.post<any>(this.urlSignIn,name).pipe(
      catchError(error=> {
        return throwError(error)})
      )
  }
}
