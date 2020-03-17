import { Component, OnInit,Inject, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../core/product.service';
import { ActivatedRoute } from '@angular/router';
import { JQ_TOKEN } from '../shared/jquery.service';





@Component({
  selector:'product',
  templateUrl:'./product.component.html',
  styles:[`
  a {cursor:pointer;color:#999;}

  `]

})
export class ProductComponent implements OnInit{

  products :Product[]
  productArray :Product[]= new  Array<Product>()
  addMode :boolean = false
  filterBy:string = ""

  foundProduct :Product
  @ViewChild('prid') prid:ElementRef;

constructor(private _productService : ProductService,
            private route:ActivatedRoute,

            @Inject(JQ_TOKEN) private $:any){

            }


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

filterProducts(filter){
if(filter ==='all'){
  this.products = this.productArray
}else{
 this.productArray = this.products
 this.products = this.products.filter(pr =>  pr.modelName.toLocaleLowerCase().includes(filter) )

}
}


diplayDetail(pid:number){

  this._productService.detailProduct(pid).subscribe(
    res => this.foundProduct = res
   )
   this.$('#detail-products').modal({})
}


}
