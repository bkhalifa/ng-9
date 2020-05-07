import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription, EMPTY } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'nav-catgegory',
  templateUrl: './nav-catgegory.component.html',
  styleUrls: ['./nav-catgegory.component.css']
})
export class NavCatgegoryComponent   {
  errorMessage=''
  categories: Category[]

  constructor(private categoryService: CategoryService,
              private prodcutService: ProductService) { }



categories$ = this.categoryService.categories$.pipe(
  catchError(err=>{
    this.errorMessage = err;
  return EMPTY;
  })
)




  fetchProducts(id: number) {
     this.prodcutService.findProductsByCategoryID(id)
  }
}
