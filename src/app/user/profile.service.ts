import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class ProfileSevice{
currentUser:IUser

login(userName:string, password:string){
  //web api
  this.currentUser = {
     id :1,
     firstName:"bb",
     lastName:"king",
     userName:userName,

  }


}

isAuhtenticated(){
  return !! this.currentUser
}
}
