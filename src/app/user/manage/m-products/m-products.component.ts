import { Component, OnInit, Inject, OnDestroy, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/product';
import { Subscription, pipe, empty, EMPTY, BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';
import { JQ_TOKEN } from 'src/app/shared/jquery.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/shared/toastr.service';

import { SharedService } from 'src/app/shared/shared.service';
import { catchError } from 'rxjs/operators';
const paginate = require('jw-paginate');
@Component({
  selector: 'm-products',
  templateUrl: './m-products.component.html',

  styles: [`
img{cursor:pointer}
}

  `]
})
export class MProductsComponent implements OnInit, OnDestroy {

  sub: Subscription;
  items: Array<any>;
  selectedProductID: number;
  produtEmitted :Product;
  errorMessage:'';
private selectedCategorySubject = new BehaviorSubject<number>(0);
selectedCategoryAction$ = this.selectedCategorySubject.asObservable();
  // current page of items
  pageOfItems: Array<any>;
  constructor(private productService: ProductService,
    @Inject(JQ_TOKEN) private $: any,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private sharedService: SharedService) { }
    private page: number;

  getPage($event) {
    this.page = $event
  }

  categories$ = this.sharedService.categories$.pipe(
    catchError(err=> {
      this.errorMessage =err;
      return EMPTY
    })
      )

  ngOnInit(): void {
    this.productService.productSource$.subscribe(
      res =>{
        this.items = res
        this.items.sort((a,b)=>{
          const name1 = a.modelNumber.toLowerCase();
          const name2 = b.modelNumber.toLowerCase();
          if (name1 > name2) { return 1; }
          if (name1 < name2) { return -1; }
          return 0;
        });
      }

    )
    this.sub = this.productService.GetProducts().subscribe(
      data => {
        if(this.items?.length >=0){
          this.items =null;
          this.items=data
          this.items.sort((a,b)=>{
            const name1 = a.modelNumber.toLowerCase();
            const name2 = b.modelNumber.toLowerCase();
            if (name1 > name2) { return 1; }
            if (name1 < name2) { return -1; }
            return 0;
          });
        }

      },
      err => console.error(err),
      () => {

      }
    )
  }

  onChangePage(pageOfItems: Array<Product>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  trigerDelete(productId) {
    this.$('#deleteProduct').modal()
    this.selectedProductID = productId;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.selectedProductID).subscribe(
      (ret) => {
        if (!!ret) {
          this.toastr.success("delete done", "product");
          this.$('#deleteProduct').modal('hide');
          const index = this.pageOfItems.findIndex(p => p.productId == this.selectedProductID);
          const intemIndex = this.items.findIndex(p => p.productId == this.selectedProductID);
          if (index > -1) {
            this.pageOfItems.splice(index, 1);
            this.items.splice(intemIndex, 1);
          }
          this.productService.products = this.pageOfItems;
          this.sharedService.nextPage(this.page)
        } else {
          this.toastr.error("delete not ok", "product");
          this.$('#deleteProduct').modal('hide')
        }
      }
    )
  }



  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  getProduct($event) {
    this.produtEmitted = $event
   // this.pageOfItems.unshift($event);
    console.log(this.items.length);
    this.items.unshift($event);
    this.productService.changeProductSource(this.items)
    console.log(this.items.length);
    this.items.sort((a,b)=>{
      const name1 = a.modelNumber.toLowerCase();
      const name2 = b.modelNumber.toLowerCase();
      if (name1 > name2) { return 1; }
      if (name1 < name2) { return -1; }
      return 0;
    })

  }


  onSelected(categoryId) {
    this.selectedCategorySubject.next(+categoryId);
  }
}
