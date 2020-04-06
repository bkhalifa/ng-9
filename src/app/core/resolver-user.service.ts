import { IUser } from '../user/user.model';
import { Resolve } from '@angular/router';
import { TrackError } from './track-error';
import { ProfileSevice } from '../user/profile.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class UserResolverService implements Resolve<IUser | TrackError > {
  constructor (private porfileService:ProfileSevice){}
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): IUser | TrackError | import("rxjs").Observable<IUser | TrackError> | Promise<IUser | TrackError> {
  return this.porfileService.getAllUsers().pipe(
   catchError(err => of(err))
  );
  }

}
