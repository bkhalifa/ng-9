import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SharedService } from 'src/app/shared/shared.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Component({
 selector:'pl-product-detail',
 templateUrl:'./product-detail-alt.component.html',
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailAltComponent{
  constructor(private sharedService:SharedService ){}

private errorMessageSubject = new Subject<string>();
errorMessageAction$ = this.errorMessageSubject.asObservable();

product$ = this.sharedService.selectedProduct$.pipe(
  catchError(err => {
   this.errorMessageSubject.next(err);
    return EMPTY;
  })
)

}
