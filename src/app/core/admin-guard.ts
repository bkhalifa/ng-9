import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProfileSevice } from '../user/profile.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AdminGuardService implements CanActivate {
  constructor(private profileService:ProfileSevice ,
              private router:Router ){}



  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }
}
