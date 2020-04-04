import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.router';
import { FormsModule} from '@angular/forms'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ProfileSevice } from './profile.service';


@NgModule({
  imports:[
     CommonModule,
     FormsModule,
     HttpClientModule,
     RouterModule.forChild(userRoute),
  ],
  declarations:[ProfileComponent,
  ],
  exports:[],
  providers:[]
})
export class ProfileModule{
constructor(){}
}
