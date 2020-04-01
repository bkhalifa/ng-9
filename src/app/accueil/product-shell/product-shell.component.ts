import { Component, OnInit, OnDestroy, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/core/product';
import { ProductService } from 'src/app/core/product.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductComponent } from 'src/app/product/product.component';
import { ProductTextComponent } from './product-text.component';

@Component({
  selector: 'product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }

  sub: Subscription
  products :Product[]
  text="Description"

  ngOnInit(): void {
 this.sub =   this.productService.productSource$.subscribe(
      selectdProducts => this.products =selectdProducts
    )
     this.productService.GetProducts().subscribe(
      data => this.products = data,

    )
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
