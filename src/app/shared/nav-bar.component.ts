import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit, InjectionToken, Inject, OnDestroy } from "@angular/core";
import { ProfileSevice } from '../user/profile.service';
import { Product } from '../core/product';
import { CategoryService } from '../category/category.service';
import { SharedService } from './shared.service';
import { ProductService } from '../core/product.service';
import { JQ_TOKEN } from './jquery.service';
import { IUser } from '../user/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15 px;}
  .navbar-nav {background-color: #485563;}
  #searchForm {margin-right: 100px}
  @media (max-width: 120px) {#searchForm{display:none}}
   a{color:#bbb}
  li > a.active {color: #F97924}
  `]
})
export class NavBarComponent implements OnInit {


  constructor(public profileService: ProfileSevice,
    private productService: ProductService,
    private router: Router,
    @Inject(JQ_TOKEN) private $: any) { }


  text = "mathing produits"
  searchTerm: string = ""
  foundProducts: Product[] = []
  currentUser: IUser
  sub: Subscription



  ngOnInit(): void {
    this.sub = this.profileService.currentUser$.subscribe(
      u => this.currentUser = u
    )

  }
  @ViewChild('searchText') inputSearch: ElementRef;



  searchData(searchTerm: string) {
    this.foundProducts = this.productService.searchData(searchTerm)
    //  console.log(this.foundProducts)
  }
  onSearch() {
    this.$('#simple-modal').modal({})
  }



  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  manage() {

  }
}
