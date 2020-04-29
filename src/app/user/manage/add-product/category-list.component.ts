import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'category-list',
  template: `
<select class="browser-default custom-select" (change)="onSelectedOption($event)" >
  <option *ngFor="let cat of categories " value={{cat.categoryId}}>{{cat.categoryName}}</option>
</select>
  `
  })
export class MCategoryListComponent implements OnInit, OnDestroy {
  constructor(private categoryService: CategoryService) { }

  categories: Category[];
  sub: Subscription;

  @Output() emitCategoryId = new EventEmitter<number>();

  ngOnInit(): void {
    this.sub = this.categoryService.GetAllCategories().subscribe(
      res => this.categories = res,
      err => console.error(err),
      () => { }
    )
  }

  onSelectedOption(event){
    this.emitCategoryId.emit(event.target.value)

  }


  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
