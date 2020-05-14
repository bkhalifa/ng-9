import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SharedService } from 'src/app/shared/shared.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
 selector:'pl-product-detail',
 templateUrl:'./product-detail-alt.component.html',
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailAltComponent{
  constructor(private sharedService:SharedService ){}
 errorMessage = '';


product$ = this.sharedService.selectedProduct$.pipe(
  catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  })
)

}
