import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'category-list',
  template: `
<select class="browser-default custom-select" (change)="onSelectedOption($event)"
 *ngIf=" categories$ | async as categories" >
  <option *ngFor="let cat of categories " value={{cat.categoryId}}>{{cat.categoryName}}</option>
</select>
  `
  })
export class MCategoryListComponent {
  constructor(private categoryService: CategoryService) { }
  errorMessage:'';
  categories: Category[];


  @Output() emitCategoryId = new EventEmitter<number>();

  categories$ = this.categoryService.categories$.pipe(
    catchError(err=>{
      this.errorMessage=err;
      return empty;
    })
  )


  onSelectedOption(event){
    this.emitCategoryId.emit(event.target.value)

  }



}
