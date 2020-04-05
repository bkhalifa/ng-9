import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './manage/manage.component';



@NgModule({
  imports:[
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule.forChild(userRoute),
  ],
  declarations:[ProfileComponent, ManageComponent,
  ],
  exports:[],
  providers:[]
})
export class ProfileModule{
constructor(){}
}
