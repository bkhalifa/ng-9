import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit, InjectionToken, Inject } from "@angular/core";
import { ProfileSevice } from '../user/profile.service';
import { Product } from '../core/product';
import { CategoryService } from '../category/category.service';
import { SharedService } from './shared.service';
import { ProductService } from '../core/product.service';
import { JQ_TOKEN } from './jquery.service';

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
export class NavBarComponent {

  constructor(public profileService: ProfileSevice,
    private categoryService: CategoryService,
    private productService :ProductService,
    private sharedService: SharedService, @Inject(JQ_TOKEN)private $ :any) { }
    text="mathing produits"
    searchTerm: string = ""
    foundProducts : Product[] =[]

  @ViewChild('searchText') inputSearch: ElementRef;

  searchProducts() {
    this.categoryService.searchCategory(this.inputSearch.nativeElement.value)

  }

  searchData(searchTerm:string){
    this.productService.searchData(searchTerm).subscribe(
      res => this.foundProducts = res,

    )
    console.log(this.foundProducts)
  }
  onSearch(){
    this.$('#simple-modal').modal({})
  }
}
