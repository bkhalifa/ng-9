import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { ProfileSevice } from '../user/profile.service';
import { Subscription } from 'rxjs';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
   sub:Subscription
  currentUser :IUser
  constructor(private router:Router, private profileService:ProfileSevice){}

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
   this.sub = this.profileService.currentUser$.subscribe(
      u => this.currentUser = u
    )
    if (this.currentUser) {
        return true;
    }

    // Retain the attempted URL for redirection
    //this.profileService.redirectUrl = url;
    this.router.navigate(['user/login']);
    return false;
}

}
