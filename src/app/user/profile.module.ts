import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { userRoute } from './user.router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './manage/manage.component';
import { UserResolverService } from '../core/resolver-user.service';
import { ManageUsersComponent } from './manage/manage-users.component';
import { UserDetailComponent } from './manage/modal-detail-user.component';
import { UserDetailTrigger } from './manage/trigger-detail-user.directive';
import { ProductInputDetailComponent } from 'src/app/user/manage/update-product.component';
import { AddProductComponent } from './manage/add-product/add-product.component';


@NgModule({
  imports:[
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule.forChild(userRoute),
  ],
  declarations:[ProfileComponent,
                ManageComponent,
                ManageUsersComponent,
                UserDetailComponent,
                UserDetailTrigger,
                ProductInputDetailComponent,
                AddProductComponent
  ],
  exports:[],
  providers:[
    UserResolverService
  ]
})
export class ProfileModule{
constructor(){}
}
