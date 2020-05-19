import { Component,  ChangeDetectionStrategy } from '@angular/core';

import {  empty, combineLatest, Subject, merge } from 'rxjs';
import {  catchError, map, scan, tap } from 'rxjs/operators';
import { ProductRXService } from 'src/app/core/productRx.service';
import { Product } from 'src/app/core/product';
import { SharedService } from 'src/app/shared/shared.service';
import { ShoppingService } from 'src/app/shared/shopping.service';


@Component({
  selector: 'product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent {

  constructor(private productRxService: ProductRXService,
             private shoppingService:ShoppingService) {

             }


   productsCategory$ = this.productRxService.productsCategory$.pipe(
     catchError(err=>{
       console.log(err);
       return empty;
     })
   )






}
