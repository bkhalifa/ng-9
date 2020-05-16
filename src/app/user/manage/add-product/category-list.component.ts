import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription, empty, Subject } from 'rxjs';
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
  errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  categories: Category[];


  @Output() emitCategoryId = new EventEmitter<number>();

  categories$ = this.categoryService.categories$.pipe(
    catchError(err=>{
      this.errorMessageSubject.next(err);
      return empty;
    })
  )


  onSelectedOption(event){
    this.emitCategoryId.emit(event.target.value)

  }



}
