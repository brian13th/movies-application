import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth:AuthService, private router: Router){

  }
  isLoggedIn(){
    return this.auth.isLoggedIn
  }

  loggOut(){
    sessionStorage.clear()
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
