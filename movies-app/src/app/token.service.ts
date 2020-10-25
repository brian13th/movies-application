import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  get isLoggedIn(){
    if (sessionStorage.getItem('jwt')){
      return true;
    } else {
      return false;
    }
  }

  get token(){
    return sessionStorage.getItem('jwt');
  }
}
