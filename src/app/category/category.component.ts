import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';
import { Product } from '../core/product';
import { CategoryService } from './category.service';
import { Category } from '../core/category';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import  { map } from 'rxjs/operators'


@Component({
  selector:'category',
  templateUrl:'./category.component.html'
})
export class CategoryComponent implements OnInit{

  categories : Category[];

constructor(private _categoryService : CategoryService,
  private route :ActivatedRoute){}

ngOnInit(): void {
  this.categories = this.route.snapshot.data.categories;
}



}
