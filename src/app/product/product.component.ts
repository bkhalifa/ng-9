import { Component, OnInit, Inject, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../core/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JQ_TOKEN } from '../shared/jquery.service';
import { ProfileSevice } from '../user/profile.service';
import { IUser } from '../user/user.model';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: [`
  a {cursor:pointer;color:#999;}

  `]

})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[]
  productArray: Product[] = new Array<Product>()
  addMode: boolean = false
  filterBy: string = ""

  currentUser:IUser
  sub :Subscription

  foundProduct: Product
  @ViewChild('prid') prid: ElementRef;

  constructor(private _productService: ProductService,
              private route: ActivatedRoute,
              private profileService:ProfileSevice,
              private router : Router,
              private sharedService:SharedService,
              @Inject(JQ_TOKEN) private $: any) { }


  ngOnInit(): void {
    this.sub = this.profileService.currentUser$.subscribe(
    user => this.currentUser = user,
    err => console.error(err),
    ()=>{}
    )
     this.products = this.route.snapshot.data.products;
     this.sharedService.url='products/all';
  }


  addModeSession() {
    if (this.currentUser?.role === 'admin') {
      this.addMode = true
    } else {
      this.router.navigate(['user/login'])

}

  }
  addModeProduct() {
    this.addMode = false
  }
  cancelMode(flag: any) {
    this.addMode = flag;
  }

  filterProducts(filter) {
    if (filter === 'all') {
      this.products = this.productArray
    } else {
      this.productArray = this.products
      this.products = this.products.filter(pr => pr.modelName.toLocaleLowerCase().includes(filter))

    }
  }


  diplayDetail(pid: number) {

    this.foundProduct = this._productService.detailProduct(pid)

    this.$('#detail-products').modal({})
  }

  ngOnDestroy(): void {
  this.sub.unsubscribe()
  }

}
