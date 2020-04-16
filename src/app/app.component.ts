import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileSevice } from './user/profile.service';
import { IUser } from './user/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar> </nav-bar>
  <router-outlet> </router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  currentAppUser :IUser ;

  constructor(private profileService:ProfileSevice){}

  ngOnInit(){
    this.profileService.currentUser$.subscribe(
      user => this.currentAppUser  = user,
      err => console.error(err),
      ()=>{}
    )
  }
}


