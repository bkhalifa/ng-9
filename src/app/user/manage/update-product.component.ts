import { Component, OnInit, Input, AfterViewChecked, AfterViewInit, ViewChild, ElementRef, OnDestroy, Inject, Output } from "@angular/core";
import { IUser } from '../user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileSevice } from '../profile.service';

import { JQ_TOKEN } from 'src/app/shared/jquery.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/shared/toastr.service';
import { kMaxLength } from 'buffer';


@Component({
  selector: 'product-input-detail',
  templateUrl: './update-product.component.html',
  styles: [`
em{color:red}
  input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.fgroup {
    margin-bottom: 2rem ;
}
input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  padding: 5px;
}
  `]
})
export class ProductInputDetailComponent implements OnInit {

  constructor(private profileService: ProfileSevice,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    @Inject(JQ_TOKEN) private $: any) { }


  @Input() userDetail: IUser | null
  user: IUser
  userForm: FormGroup

  get f() { return this.userForm.controls }

  userFirstName: FormControl
  userLastName: FormControl
  userName: FormControl
  userRole: FormControl
  private _selectedRole: string = "admin"
  get selectedRole(): string {
    return this._selectedRole
  }
  set selectedRole(value: string) {
    this._selectedRole = value
  }

  onRoleSelect(op) {
    this.selectedRole = op.target.value
    this.userDetail.role = this.selectedRole
  }

  ngOnInit(): void {
    this.userFirstName = new FormControl('', Validators.required)
    this.userLastName = new FormControl('', Validators.required)
    this.userName = new FormControl('', [Validators.required, Validators.maxLength(6)]),
    this.userRole = new FormControl(this.selectedRole, Validators.required)

    this.userForm = new FormGroup({
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      userName: this.userName,
      userRole: this.userRole
    });
  }
  onSubmit(userForm) {
    let user: IUser = {
      id: this.userDetail.id,
      firstName: userForm.userFirstName,
      lastName: userForm.userLastName,
      userName: userForm.userName,
      role: this.selectedRole
    }

    this.profileService.updateUser(user).subscribe(
      (data) => {
        if (data) {
          this.toastr.success("update done !", "user")
          console.log(this.selectedRole)
          this.$('#detail-user').modal('toggle')
        } else {
          this.toastr.error("error  !", "user")
        }
      }

    )
  }

  roles = [
    { value: "admin", name: "administrateur" },
    { value: "user", name: "utilisateur" }
  ]
}


