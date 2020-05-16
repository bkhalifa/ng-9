import { Component,  ChangeDetectionStrategy } from '@angular/core';

import { ProductService } from 'src/app/core/product.service';
import {  empty, combineLatest } from 'rxjs';
import {  catchError, map } from 'rxjs/operators';
import { ProductRXService } from 'src/app/core/productRx.service';


@Component({
  selector: 'product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent {

  constructor(private productRxService: ProductRXService) { }

 errorMessage:'';


  productsByCategory$ = combineLatest(
    this.productRxService.allProducts$,
    this.productRxService.productsCategoryAction$
  ).pipe(
      map(([products, selectedCategory])=>{
 return  products.filter(product =>
        // if(selectedCategory ===0){

        // }else{
          selectedCategory ? product.categoryId === selectedCategory : true)
        // }

      // }

      }),
    catchError(err => {
      this.errorMessage = err ;
      return empty;
    })
  )



}
