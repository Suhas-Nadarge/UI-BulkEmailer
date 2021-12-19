import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(public route:Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
  
      if(localStorage.getItem('username'))
      {
        return true;

      }
      else
      {
        this.route.navigateByUrl('/login');
        return false;
      }


    }
}
