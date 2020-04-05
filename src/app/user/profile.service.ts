import { Injectable, Inject } from "@angular/core";
import {  HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { IUser } from './user.model';

import { TOASTR_TOKEN, Toastr } from '../shared/toastr.service';
import {  map, tap, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TrackError } from '../core/track-error';

@Injectable()
export class ProfileSevice {

private profileUrl :string = 'http://localhost:8081/api';

public currentUser:IUser
users :IUser[]
private currentUserSubject: BehaviorSubject<IUser>;
public currentUser$: Observable<IUser>;

private userSSubject :BehaviorSubject<IUser[]>;
public users$ :Observable<IUser[]>

notifyUsers(users:IUser[]){
  this.userSSubject.next(users)
}

constructor(private http :HttpClient, @Inject(TOASTR_TOKEN) private toastr :Toastr,private router:Router ){
  this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser$ = this.currentUserSubject.asObservable();

  this.userSSubject = new BehaviorSubject<IUser[]>(null)
  this.users$ = this.userSSubject.asObservable();
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
                             map(user=>
                           {
                             // store user details and jwt token in local storage to keep user logged in between page refreshes
                             localStorage.setItem('currentUser', JSON.stringify(user));
                             this.currentUser = user
                             this.onChangeUser(user)
                             return this.currentUser
                           },
                           catchError(err=> this.handleError(err))),
                           tap(()=>{
                            //  if(this.currentUser.role ==="admin"){
                            //   this.router.navigate(['products/all'])
                            //  }
                            //  if(this.currentUser.role ==="user"){
                            //   this.router.navigate(['/'])
                            //  }
                            console.log(this.currentUser)

                           }))


}

getAllUsers():Observable<IUser[] | TrackError>{
  return this.http.get<IUser[]>(`${this.profileUrl}/profile/all`)
  .pipe(
    tap(u => this.users = u),
    tap(()=> this.notifyUsers(this.users)),
    catchError(err=> this.handleError(err)),
  )
}

isAuhtenticated(){
  return !! this.currentUser
}


private handleError(error:HttpErrorResponse):Observable<TrackError> {
  let dataError = new TrackError();
  dataError.number = 100;
  dataError.status = error.statusText;
  dataError.message = "An error Occured on retrieving data"

  return  throwError(dataError);
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
