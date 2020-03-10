import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ProfileSevice } from '../user/profile.service';
import { Product } from '../core/product';
import { CategoryService } from '../category/category.service';
import { CategoryComponent } from '../category/category.component';
import { SharedService } from './shared.service';

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
    private sharedService: SharedService) { }

  @ViewChild('searchText') inputSearch: ElementRef;

  searchProducts() {
    this.categoryService.searchCategory(this.inputSearch.nativeElement.value)

  }

}
