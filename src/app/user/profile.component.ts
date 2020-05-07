import { Component, OnInit, Inject } from "@angular/core";
import { ProfileSevice } from './profile.service';
import { IUser, Role } from './user.model';
import { Router, RouterStateSnapshot } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from '../shared/toastr.service';
import { SharedService } from '../shared/shared.service';

@Component({
templateUrl:'./profile.component.html',
styles:[`
em {color:red;padding-left:20px},
.name{color:white}
`]
})
export class ProfileComponent implements OnInit{
  constructor(private profileSvc : ProfileSevice,
              private router :Router,
              private sharedService: SharedService,
               @Inject(TOASTR_TOKEN) private toastr:Toastr ){ }

mouseaction:boolean
user:IUser
loginForm:FormGroup
userName:FormControl
password:FormControl

get f(){ return this.loginForm.controls ;}

  loginUser(loginForm){
   this.profileSvc.login(loginForm.userName,loginForm.password).subscribe(
    u => this.user = u,
    (err:any) => console.log(err),
   ()=>{

     switch(this.user?.role){
       case "admin" :
        return  this.router.navigate(['user/manage'])

        case "user":
        return  this.toastr.success(`${this.user.firstName} success login`,'login')

       default :
        return  this.router.navigate(['user/login'])

     }

    })

  }

  ngOnInit(): void {
    this.userName = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required)

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    })
    this.profileSvc.currentUser$.subscribe(
      user => this.user = user
    )

  }



}
