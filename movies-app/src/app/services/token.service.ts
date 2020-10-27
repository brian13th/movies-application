import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  get isLoggedIn() {
    if (sessionStorage.getItem('jwt') || localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }

  get token() {
    if (sessionStorage.getItem('jwt')) {
      return sessionStorage.getItem('jwt');
    } else if (localStorage.getItem('jwt')) {
      return localStorage.getItem('jwt');
    }
  }
}
