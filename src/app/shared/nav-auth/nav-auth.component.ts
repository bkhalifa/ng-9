import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/user/user.model';
import { ProfileSevice } from 'src/app/user/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent implements OnInit {

  @Input() currentUser :IUser

  constructor(private profileService:ProfileSevice ,
               private router :Router) { }

  ngOnInit(): void {

  }

  isAuthentificate = () => { (this.currentUser) ?true:false; }


  logOut() {
    this.profileService.logout();
    this.profileService.currentUser$.subscribe(
      user => this.currentUser = user
    )
    this.router.navigate(['/'])
  }


}
