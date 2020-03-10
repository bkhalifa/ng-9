import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../core/product.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector:'product',
  templateUrl:'./product.component.html',
  styles:[`
  a {cursor:pointer;color:#999;}

  `]

})
export class ProductComponent implements OnInit{

  products :Product[]
  addMode :boolean = false
constructor(private _productService : ProductService, private route:ActivatedRoute){}

ngOnInit(): void {
  this.products = this.route.snapshot.data.products;
}

addModeSession(){
this.addMode = true
}
addModeProduct(){
  this.addMode = false
}
cancelMode(flag:any){
this.addMode = flag;
}
}
