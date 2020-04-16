export interface IUser{
  id:number;
  firstName:string;
  lastName:string;
  userName:string;
  role:string;

}

export class Role {
  isAdmin :boolean;

  constructor(user:IUser){
   this.isAdmin =  (user?.role==="admin") ? true: false
  }

}
