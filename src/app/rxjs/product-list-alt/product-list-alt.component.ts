import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'product-list-alt',
  templateUrl: './product-list-alt.component.html',
  styles:[`
  ul{cursor:pointer}
  `],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class ProductListAltComponent  {
  errorMessage ='';
  constructor(private sharedService:SharedService){}

  products$ = this.sharedService.productsWithCategory$.pipe(
    catchError(err=>{
      this.errorMessage = err;
      return EMPTY;
    }),

  )

  onSelected(productId:number){
    this.sharedService.selectedProductChange(productId);
  }
}
