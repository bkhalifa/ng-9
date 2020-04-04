import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/core/category';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'nav-catgegory',
  templateUrl: './nav-catgegory.component.html',
  styleUrls: ['./nav-catgegory.component.css']
})
export class NavCatgegoryComponent implements OnInit, OnDestroy {

  categories: Category[]
  sub: Subscription
  constructor(private categoryService: CategoryService,
              private prodcutService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.categoryService.GetAllCategories().subscribe(
      data => this.categories = data
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  fetchProducts(id: number) {
     this.prodcutService.findProductsByCategoryID(id)
  }
}
