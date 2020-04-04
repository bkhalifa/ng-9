import { Injectable, Inject } from "@angular/core";
import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from './user.model';

import { TOASTR_TOKEN, Toastr } from '../shared/toastr.service';
import {  map, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProfileSevice{


private profileUrl :string = 'http://localhost:8081/api';

currentUser:IUser
private currentUserSubject: BehaviorSubject<IUser>;
public currentUser$: Observable<IUser>;


constructor(private http :HttpClient, @Inject(TOASTR_TOKEN) private toastr :Toastr,private router:Router ){

  this.currentUserSubject = new BehaviorSubject<IUser>
                           (JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser$ = this.currentUserSubject.asObservable();
}
onChangeUser(currentUser :IUser){
  this.currentUserSubject.next(currentUser);
}


login(login:string, password:string){
  //web api
let model={
  Login:login,
  Password:password
}

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const options = { headers: headers };
 return this.http.post<any>(`${this.profileUrl}/profile/login`,
                           JSON.stringify(model),options)
                           .pipe(
                             map(user=>{
                             // store user details and jwt token in local storage to keep user logged in between page refreshes
                             localStorage.setItem('currentUser', JSON.stringify(user));
                             this.currentUser = user
                             this.onChangeUser(user)

                           }))


}


isAuhtenticated(){
  return !! this.currentUser
}


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
  this.onChangeUser(null);

}
private log(message: string) {
  console.log(message);
}
}
