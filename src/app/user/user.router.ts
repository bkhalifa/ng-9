import { Routes } from "@angular/router";
import { ProfileComponent } from './profile.component';
import { ManageComponent } from './manage/manage.component';
import { UserResolverService } from '../core/resolver-user.service';


export const userRoute :Routes =[
{
  path:'login',
  component:ProfileComponent
},
{
  path:'manage',
  component:ManageComponent,
  resolve:{resolveUsers:UserResolverService
  }
}
]
