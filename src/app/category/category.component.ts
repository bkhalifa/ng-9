import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from './category.service';


@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  // public categories: Category[];

  constructor(public _categoryService: CategoryService,
    private route: ActivatedRoute) { }

  message: string;

  ngOnInit(): void {
    //  this.categories = this.route.snapshot.data.categories;
     this._categoryService
      .GetAllCategories()
      .subscribe(
        res => this._categoryService.categories = res,
        err => console.log(err.status)
      );

  }

}
