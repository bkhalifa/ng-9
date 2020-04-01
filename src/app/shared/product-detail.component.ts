import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../core/product.service';
import {Location} from '@angular/common';

@Component({
  selector:'detail-product',
  template:`

  <p> detail product </p>
  <table class='table' *ngIf="foundProduct?.productId > 0">
    <thead>
    <th> model number </th>
    <th> model name  </th>
    <th> Description </th>
    <th> Price </th>
</thead>

<tbody>
  <td>{{foundProduct?.modelNumber}} </td>
  <td> {{foundProduct?.modelName}}</td>
  <td>{{foundProduct?.description}} </td>
  <td>{{foundProduct?.unitCost}} </td>
</tbody>
</table>

<div class="card" *ngIf="!!product" >
  <div class="card-header">
  {{product?.modelName}}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{product?.modelNumber}}</h5>
    <p class="card-text">
      {{product?.description }}
    </p>
    <a href="#" class="btn btn-primary" (click)="goBack()">back</a>
  </div>
</div>
`
})
export class ProductDetailComponent  implements OnInit{
  constructor(private route:ActivatedRoute,
             private productService:ProductService,
             private location :Location ){}

 @Input()  foundProduct : Product
  product :Product

 ngOnInit(): void {
 let id  = +this.route.snapshot.paramMap.get('productID')
 this.product = this.productService.detailProduct(id);

}
goBack(){
  this.location.go('/')
}
}
