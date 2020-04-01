import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { timingSafeEqual } from 'crypto';


@Injectable()
export class ProductService {
  // private productsUrl = 'api/products';
  private productsUrl = 'http://localhost:8081/api';

   products: Product[];
   selectdProducts :Product[] =null

   private productSource = new Subject<Product[]>();
   productSource$ = this.productSource.asObservable();
    changeProductSource (selectdProducts : Product[]){
     this.productSource.next(selectdProducts);
   }


  constructor(private _http: HttpClient) { }

   foundProduct :Product | null ;

  GetProducts(): Observable<Product[]> {
    if (this.products) {
      this.changeProductSource(this.products)
      return of(this.products);
    }

    return this._http.get<Array<Product>>(`${this.productsUrl}/Product`)
      .pipe(
        tap(data => this.products = data),
        tap(data => this.changeProductSource(data)),
        tap(err => console.log(err))
      )

  }

findProductsByCategoryID(categoryID:number){
  let foundProducts = new Array<Product>();
  foundProducts  = this.products.filter(pro => pro.categoryId == categoryID )
   if(!!foundProducts){
    this.changeProductSource(foundProducts);
   }
  }

  searchProducts(searchElem) {
    if (!!searchElem && this.products) {
      return products => products.filter(proj => proj.modelName.toLowerCase() === searchElem.toLocaleLowerCase())
    }
  }

  searchData(searchText: string) {
    if (!!searchText && this.products) {
      return this.products.filter(p => p.modelName.toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()))
    }
  }

  detailProduct(productId: number): Product {
    if(!!productId){
        return   this.products.find(pr => pr.productId === productId)

    }
  }


}


