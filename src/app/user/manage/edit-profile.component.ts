import { Component, Input, OnInit, Inject } from '@angular/core';
import { IUser } from '../user.model';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ProfileSevice } from '../profile.service';
import { UpdateProfile } from '../profile.model';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Toastr, TOASTR_TOKEN } from 'src/app/shared/toastr.service';

@Component({
  selector: 'edit-profile',
  template: `
<form autocomplete="off" [formGroup]="upform"(ngSubmit)="SubmitProfile(upform.value)">
    <h4 [ngClass]="{'name':user}"> Welcome
    <span >{{user.firstName}} </span>
      <br/> Edit your profile</h4>

      <div class="form-group" >
      <label for="userName">User Name:</label>
      <!-- <em >required </em> -->
      <input id="userName"
       type="text"  [(ngModel)]="user.userName"  name="firstname"
       formControlName="loginName"
       class="form-control"

       required />
    </div>

    <div class="form-group" >
      <label for="name"> First Name</label>
      <input id="Name" [(ngModel)]="user.firstName"
      formControlName="firstName"
       type="text"
      class="form-control"
      placeholder="last name..."
      required />
    </div>

    <div class="form-group" >
      <label for="name">Last Name</label>

      <input id="lastName" [(ngModel)]="user.lastName"
      name="lastname"
       type="text"
      class="form-control"
      formControlName="lastName"
      required />
    </div>



    <div class="form-group" >
    <span class='pwd' (click)="togglePwd()"> change the pwd </span>
    &nbsp; <div *ngIf="hidePwd">  &nbsp;

<input id="password"
 type="password"
class="form-control"
placeholder="Enter new password "
required />
         </div>

    </div>

<span>
  <button type="submit" class="btn btn-primary">validate</button>
</span>

     &nbsp;
    <button type="button"  class="btn btn-secondary">Cancel</button>
  </form>`,
  styles: [`
.pwd{color:white;cursor:pointer}
`]

})
export class EditProfileComponent implements OnInit {
  @Input() user: IUser
  hidePwd: boolean = false;

  upform: FormGroup;
  loginName: FormControl;
  lastName: FormControl;
  firstName: FormControl;
  password: FormControl;

  constructor(private profileService: ProfileSevice,
            @Inject(TOASTR_TOKEN) private toastr:Toastr) { }

  ngOnInit(): void {

    this.loginName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.firstName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.upform = new FormGroup({
      loginName: this.loginName,
      lastName: this.lastName,
      firstName: this.firstName,
      password: this.password

    });

  }


  SubmitProfile(value) {
    let profile = {
       Id : this.user.id,
      LoginName : value.loginName,
      FirstName : value.firstName,
      LastName: value.lastName,
      Password: value.password
    };
   let res ;
  this.profileService.updateProfile(profile).subscribe(
     ret => res = ret,
     err => console.error(err),
     () =>{
       if(res==1){
         this.toastr.success("update done ","profile")
       }
     }

 );




  }
  togglePwd() {
    this.hidePwd = !this.hidePwd;
  }
}
