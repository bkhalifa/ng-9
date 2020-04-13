import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { ProfileSevice } from '../user/profile.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private profileService:ProfileSevice){}

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    if (this.profileService.isLoggedIn()) {
        return true;
    }

    // Retain the attempted URL for redirection
    //this.profileService.redirectUrl = url;
    this.router.navigate(['user/login']);
    return false;
}

}
