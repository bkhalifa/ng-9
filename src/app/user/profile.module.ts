import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.router';
import { FormsModule} from '@angular/forms'


@NgModule({
  imports:[
     CommonModule,
     FormsModule,
     RouterModule.forChild(userRoute)
  ],
  declarations:[ProfileComponent],
  exports:[],
  providers:[]
})
export class ProfileModule{
constructor(){}
}
