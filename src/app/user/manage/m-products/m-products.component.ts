import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'm-products',
  templateUrl: './m-products.component.html',

  styles:[`
img{cursor:pointer}
}

  `]
})
export class MProductsComponent implements OnInit {

  sub :Subscription;
  items: Array<any>;

  // current page of items
  pageOfItems: Array<any>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(
      data => {
        this.items = data
      },
      err => console.error(err),
      ()=>{

      }
    )
  }

  onChangePage(pageOfItems: Array<Product>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
