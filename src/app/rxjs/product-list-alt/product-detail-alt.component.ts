import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SharedService } from 'src/app/shared/shared.service';
import { catchError, map, filter } from 'rxjs/operators';
import { EMPTY, Subject, empty, combineLatest } from 'rxjs';
import { Product } from 'src/app/core/product';

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

pageTitle$ = this.product$.pipe(
  map((p:Product)=> p.modelName)
)

// selectedprodcutCartsJit
productShoppingCarts$ = this.sharedService.selectproductCarts$.pipe(
  catchError( err =>{
    this.errorMessageSubject.next(err);
    return empty;
  })
)

vm$ = combineLatest([
  this.product$,
  this.productShoppingCarts$,
  this.pageTitle$
]).pipe(
  // filter(([product])=>Boolean(product)),
  map(([product, productSuppliers, pageTitle]) =>
      ({product, productSuppliers , pageTitle}))
)

}
