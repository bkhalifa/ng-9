import { Component, OnInit, Inject } from "@angular/core";
import { ProfileSevice } from './profile.service';
import { IUser } from './user.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from '../shared/toastr.service';

@Component({
templateUrl:'./profile.component.html',
styles:[`
em {color:red;padding-left:20px}
`]
})
export class ProfileComponent implements OnInit{
  constructor(private profileSvc : ProfileSevice,
              private router :Router,
              @Inject(TOASTR_TOKEN) private toastr:Toastr ){

  }

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
      if(this.user.role ==="admin"){
         this.router.navigate(['user/manage'])
      }
      if(this.user.role ==="user"){
        this.toastr.success(`${this.user.firstName} success login`,'login')
        this.router.navigate(['/'])
      }
    })

  }

  ngOnInit(): void {
    this.userName = new FormControl('',Validators.required)
    this.password = new FormControl('',Validators.required)

    this.loginForm = new FormGroup({
      userName:this.userName,
      password:this.password
    })
this.profileSvc.currentUser$.subscribe(
  user=>this.user = user
)

  }
}
