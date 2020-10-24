import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.auth.isLoggedIn){
        return false;
      } else {
        return true;
      }
  }

}
