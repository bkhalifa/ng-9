import { Component, OnInit, OnChanges } from '@angular/core';
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
  productArray :Product[]= new  Array<Product>()
  addMode :boolean = false
  filterBy:string =''
constructor(private _productService : ProductService, private route:ActivatedRoute){}


ngOnInit(): void {
  this.products = this.route.snapshot.data.products;
}

// ngOnChanges(): void {
// if(this.products){
//   this.filterProducts(this.filterBy)
// }
//}
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

}
