import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { CategoryService } from 'src/app/category/category.service';
import { catchError, tap } from 'rxjs/operators';
import { ProductRXService } from 'src/app/core/productRx.service';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'category-shell',
  templateUrl:'./categroy-shell.component.html',
  styles:[`
  .cat{cursor:pointer;font-family: 'Arial';color:#e5e5e5}
  `],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CategoryShellComponent {

  errorMessage:'';
  selectedCategoryID ;
  constructor(private categoryService: CategoryService,
              private productRxService:ProductRXService) { }



   selectedCategoryID$ =  this.productRxService.productsByCategoryAction$;


   categories$ = this.categoryService.categories$.pipe
   (
     catchError(err=>{
       this.errorMessage = err;
       return EMPTY;
     })
   )

  refreshProduct(categoryId:number){
    this.productRxService.selectedCategoryIdStore(categoryId);
  }


}
