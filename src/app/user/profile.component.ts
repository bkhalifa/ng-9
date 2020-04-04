import { Component, OnInit } from "@angular/core";
import { ProfileSevice } from './profile.service';
import { IUser } from './user.model';
import { Router } from '@angular/router';

@Component({
templateUrl:'./profile.component.html',
styles:[`
em {color:red;padding-left:20px}
`]
})
export class ProfileComponent implements OnInit{
  constructor(private profileSvc : ProfileSevice,private router :Router){}


mouseaction:boolean
userName:string
password:string
user:IUser

  loginUser(loginForm){
   this.profileSvc.login(loginForm.userName,loginForm.password).subscribe()
  }

  ngOnInit(): void {
   this.profileSvc.currentUser$.subscribe(
    user =>this.user = user
   )
  }
}
