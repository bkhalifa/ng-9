import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'category-shell',
  template: `
  <p> category- shell </p>
  <ul>
<li class="cat"
*ngFor="let category of categories"
 (click)="refreshProduct(category.categoryId)">
  {{category.categoryName}}
</li>
  </ul>
  `,
  styles:[`
  .cat{cursor:pointer}
  `]
})
export class CategoryShellComponent implements OnInit, OnDestroy {
  categories: Category[]
  sub: Subscription
  constructor(private categoryService: CategoryService,
              private producService:ProductService) { }

  ngOnInit(): void {
    this.sub = this.categoryService.GetAllCategories().subscribe(
      data => this.categories = data
    )
  }

  refreshProduct(categoryId:number){
    this.producService.findProductsByCategoryID(categoryId)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
