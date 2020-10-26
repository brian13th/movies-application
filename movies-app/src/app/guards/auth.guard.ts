import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  jwt: string;

  constructor(private token: TokenService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.token.isLoggedIn){
      return true;
    } else {

      this.router.navigate(['login'])
      return false;
    }
  }

}
