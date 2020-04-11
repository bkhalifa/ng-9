import { Component, Input, Inject, Output, EventEmitter, OnInit } from "@angular/core";
import { IUser } from '../user.model';
import { ProfileSevice } from '../profile.service';
import { JQ_TOKEN } from 'src/app/shared/jquery.service';

@Component({
  selector:'app-users',
  template:`
  <table class="table table-hover  table-dark">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Login</th>
      <th scope="col">Role</th>
      <th scope="col"> <img src="assets/images/gear_wheel.png" alt=""/> </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users">

      <td>{{user?.firstName}}  </td>
      <td>{{user?.lastName}}</td>
      <td>{{user?.userName}}</td>
       <td *ngIf="user?.role==='admin'">Administrateur </td>
       <td *ngIf="user?.role==='user'">Utilisateur </td>
      <img src="assets/images/edit.png" alt="edit" (click)="detailUser(user)" /> &nbsp;|&nbsp;
      <img src="assets/images/delete.png" alt="delete"/>

    </tr>

  </tbody>
</table>
<modal-detail-user title="update user">
  <div>
  <product-input-detail [userDetail]="userDetail"> </product-input-detail>
</div>

</modal-detail-user>
`,
styles:[`
img{cursor:pointer}
`]
})
export class ManageUsersComponent implements OnInit{
  constructor(private profileservice : ProfileSevice,@Inject(JQ_TOKEN) private $:any){}

  @Input() users :IUser[]
   userDetail :IUser

   detailUser(user:IUser){
    this.userDetail = user;
    this.$('#detail-user').modal({data:this.userDetail})
  }

  ngOnInit(): void { }
}
