import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { ProfileSevice } from '../user/profile.service';
import { Subscription } from 'rxjs';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate, OnInit, OnDestroy{
   sub:Subscription
  currentUser :IUser
  constructor(private router:Router, private profileService:ProfileSevice){}

  ngOnInit(): void {}


  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    this.sub = this.profileService.currentUser$.subscribe(
      u => this.currentUser = u,
    )

    return this.checkLoggedIn(state.url, this.currentUser);
  }


  checkLoggedIn(url: string, user:IUser): boolean {

    if (user?.role === 'admin') {
      return true;
    }
    else {
      // Retain the attempted URL for redirection
      //this.profileService.redirectUrl = url;
      this.router.navigate([url]);
      this.profileService.logout()
       return false;
    }


}
ngOnDestroy(): void {
  this.sub.unsubscribe()
}
}
