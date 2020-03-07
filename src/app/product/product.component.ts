import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../core/product.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';



@Component({
  selector:'product',
  templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit{

  products :Product[];

constructor(private _productService : ProductService, private route:ActivatedRoute){}

ngOnInit(): void {

  this.products = this.route.snapshot.data.products;
}

}
