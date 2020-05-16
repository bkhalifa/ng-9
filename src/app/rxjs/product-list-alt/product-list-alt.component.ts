import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'product-list-alt',
  templateUrl: './product-list-alt.component.html',
  styles:[`
  ul{cursor:pointer}
  `],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class ProductListAltComponent  {
  private errorMessageSubject = new Subject<string>();
  errorMessageAction$ = this.errorMessageSubject.asObservable();
  constructor(private sharedService:SharedService){}

  selectProduct$ = this.sharedService.selectedProduct$;

  products$ = this.sharedService.productsWithCategory$.pipe(
    catchError(err=>{
      this.errorMessageSubject.next(err);
      return EMPTY;
    }),

  )

  onSelected(productId:number){
    this.sharedService.selectedProductChange(productId);
  }
}
