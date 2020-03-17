import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../core/product.service';

@Component({
  selector:'detail-product',
  template:`

  <p> detail product </p>
  <table class='table'>
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
</table>`
})
export class ProductDetailComponent {
  constructor(private route:ActivatedRoute){}
  productID:number;
  product:Product
 @Input() foundProduct :Product

}
