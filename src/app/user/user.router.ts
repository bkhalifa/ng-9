import { Routes } from "@angular/router";
import { ProfileComponent } from './profile.component';
import { ManageComponent } from './manage/manage.component';

export const userRoute :Routes =[
{path:'login', component:ProfileComponent},
{path:'manage', component:ManageComponent}
]
