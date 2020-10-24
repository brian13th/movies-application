import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.auth.isLoggedIn){
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
  }

}
