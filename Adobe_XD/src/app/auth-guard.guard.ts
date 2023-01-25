import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor( private auth:UserLoginService,private route:Router ){}
  canActivate()  {
      if(this.auth.isLoggedIn()){
        return true;
      }
      alert("you have not logged in")
      this.route.navigate(['loginpage']);
      return false;
   
  }
  
}
