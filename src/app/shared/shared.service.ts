import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SharedService {

  url :string;

  private message :BehaviorSubject<string>;
  sharedMessage  :Observable<string>

  constructor() {
    this.message = new BehaviorSubject<string> ('First Message');
    this.sharedMessage = this.message.asObservable();
   }

  nextMessage(message: string) {
    this.message.next(message)
  }

}
