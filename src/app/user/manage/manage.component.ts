import { Component, OnInit } from '@angular/core';
import { ProfileSevice } from '../profile.service';
import { IUser } from '../user.model';
import { TrackError } from 'src/app/core/track-error';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private profileService:ProfileSevice,private route :ActivatedRoute) { }


   users :IUser[]

  ngOnInit(): void {
  let resolveUsers = this.route.snapshot.data['resolveUsers']
  if(resolveUsers instanceof TrackError){
    console.log(`manage user component ${resolveUsers.message}`)
  }else{
    this.users = resolveUsers
  }
  }


  ngOnDestroy(): void {

  }
}
