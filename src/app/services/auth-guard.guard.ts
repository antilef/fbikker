import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService ,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true
    // if (this.authService.isAuthenticated()) {
    //   return true; 
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
