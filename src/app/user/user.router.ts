import { Routes } from "@angular/router";
import { ProfileComponent } from './profile.component';
import { ManageComponent } from './manage/manage.component';
import { UserResolverService } from '../core/resolver-user.service';
import { AddProductComponent } from './manage/add-product/add-product.component';
import { AuthGuardService } from '../core/auth-guard';


export const userRoute :Routes =[
{
  path:'login',
  component:ProfileComponent
},
{
  path:'manage',
  component:ManageComponent,
  resolve:{resolveUsers:UserResolverService },
  canActivate:[AuthGuardService]
},
{
path:'add-products',
component:AddProductComponent
},
{
  path:'profile',
  component:ProfileComponent
  }
]
