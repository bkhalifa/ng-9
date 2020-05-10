import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Product } from '../core/product';
import { Observable, empty, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RxjsComponent  {
  errorMessage:'';
  constructor(private sharedService :SharedService) { }

  productsWithCategory$ = this.sharedService. productsWithCategory$.pipe(
   catchError(err=>{
     this.errorMessage=err;
     return EMPTY;

   }

   )
 )

}
