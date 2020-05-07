import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription, EMPTY } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'category-shell',
  template: `
  <p> &nbsp; </p>
  <ul *ngIf="categories$ | async as categories ">
<li class="cat"
*ngFor="let category of categories  "
 (click)="refreshProduct(category.categoryId)">
  {{category.categoryName}}
</li>
  </ul>
  `,
  styles:[`
  .cat{cursor:pointer;font-family: 'Arial';color:#e5e5e5}

  `],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CategoryShellComponent {


  constructor(private categoryService: CategoryService,
              private producService:ProductService) { }


 errorMessage:'';
   categories$ = this.categoryService.categories$
   .pipe
   (
     catchError(err=>{
       this.errorMessage = err;
       return EMPTY;
     })
   )


  refreshProduct(categoryId:number){
    this.producService.findProductsByCategoryID(categoryId)
  }


}
