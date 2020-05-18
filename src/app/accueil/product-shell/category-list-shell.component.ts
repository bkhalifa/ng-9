import { Component, Output, EventEmitter } from "@angular/core";
import { ProductRXService } from 'src/app/core/productRx.service';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector:'category-list-shell',
  template:`
<select class="browser-default custom-select"
 (change)="onSelectedOption($event)"
 *ngIf=" categories$ | async as categories" >

  <option *ngFor="let cat of categories "
  value= "{{cat.categoryId}}"
  [selected] = "cat.categoryId ===  (selectedCategoryID$ | async)"
  >{{cat.categoryName}}</option>
</select>
  `
})
export class CategoryListShellComponent {
  @Output() emitCategory = new EventEmitter<number>();
   categoryID :number;
  constructor(private categoryService: CategoryService, private productRxService : ProductRXService){}

  selectedCategoryID$ =  this.productRxService.productsByCategoryAction$.pipe
  (
    tap(res => this.categoryID = res)
  )

  categories$ = this.categoryService.categories$.pipe(
    catchError(err => {
      console.log(err);
      return EMPTY;

    } )
  )

  onSelectedOption(event){
    this.categoryID = +event.target.value;
    this.emitCategory.emit(this.categoryID);
  }

}
