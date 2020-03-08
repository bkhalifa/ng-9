import { Component } from "@angular/core";
import { ProfileSevice } from './profile.service';

@Component({
templateUrl:'./profile.component.html',
styles:[`
em {color:red;padding-left:20px}
`]
})
export class ProfileComponent{
  constructor(private profileSvc : ProfileSevice){}

mouseaction:boolean
userName:string
password:string

  loginUser(loginForm){
   this.profileSvc.login(loginForm.userName,loginForm.password)
  }
}
