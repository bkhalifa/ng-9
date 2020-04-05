import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileSevice } from '../profile.service';
import { IUser } from '../user.model';
import { TrackError } from 'src/app/core/track-error';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit , OnDestroy{

  constructor(private profileService:ProfileSevice) { }

   sub :Subscription
   users :IUser[] | TrackError

  ngOnInit(): void {
    this.sub = this.profileService.getAllUsers()
    .subscribe(
      u => this.users = u
    )
  }


  ngOnDestroy(): void {
   this.sub.unsubscribe()
  }
}
