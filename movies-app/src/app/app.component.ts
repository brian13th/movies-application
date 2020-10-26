import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private token:TokenService, private router: Router){

  }
  isLoggedIn(){
    return this.token.isLoggedIn
  }

  loggOut(){
    sessionStorage.clear()
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
