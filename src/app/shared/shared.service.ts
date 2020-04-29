import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SharedService {
  pager :object;
  prevPage: number
  url :string;
  private page: BehaviorSubject<number>;
  page$ :Observable<number>;

  private message :BehaviorSubject<string>;
  sharedMessage  :Observable<string>

  constructor() {
    this.message = new BehaviorSubject<string> ('First Message');
    this.sharedMessage = this.message.asObservable();


    this.page= new BehaviorSubject<number>(null);
    this.page$ = this.page.asObservable()

    this.prevPage = null
   }

  nextMessage(message: string) {
    this.message.next(message)
  }


  nextPage(page:number){
    this.page.next(page);
  }
}
