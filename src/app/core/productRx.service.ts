import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { throwError,  Subject, BehaviorSubject, Observable, combineLatest, merge, pipe, empty } from 'rxjs';
import { catchError, map, scan, tap } from 'rxjs/operators';

import { Category } from './category';

@Injectable()
export class ProductRXService{
  private productsUrl = 'http://localhost:8081/api';
  private categoryUrl = 'http://localhost:8081/api';

  // products by catgory
  private productsByCategorySubject = new BehaviorSubject<number>(0);
  productsByCategoryAction$ = this.productsByCategorySubject.asObservable();

  //add product
 private productInsertSubject = new Subject<Product>();
 productInsertAction$ = this.productInsertSubject.asObservable();

  constructor(private http :HttpClient){ }


  allCategories$  = this.http.get<Category[]>(`${this.categoryUrl}/Category`)
  .pipe(
    catchError(this.handleError)
     )

  allProducts$ = this.http.get<Product[]>(`${this.productsUrl}/Product`).pipe(
    catchError(this.handleError)
  )

//products by category
  productsCategory$ = combineLatest(
    this.allProducts$,
    this.productsByCategoryAction$.pipe(
      tap(r => console.log(`tap combine last component ${r}`))
    )
  ).pipe(
      map(([products, selectedCategory])=>{
      return  products.filter(product =>
         selectedCategory ? product.categoryId === selectedCategory : true)

      }),
    catchError(err => {
      console.log(err) ;
      return empty;
    })
  )

  selectedCategoryIdStore(categoryId:number):void{
    //sessionStorage.setItem('categoryID', JSON.stringify(categoryId));
    this.productsByCategorySubject.next(categoryId);

  }


  //add product

AddProduct(newProduct? :Product){
  newProduct = newProduct || this.fakePorduct();
  this.productAddSubject.next(newProduct);
 }
 private fakePorduct(){
  return {
  productId : 1,
  categoryId: 17,
  description: "hello this is fake",
  modelName: "fake model",
  productImage: "fake image",
  modelNumber: "fake model number",
  unitCost: 12
  }
}

  private productAddSubject = new Subject<Product>();
  productAddAction$ = this.productInsertSubject.asObservable();
  //merge with scan
allproductsWithAdd$ = merge(
  this.productsCategory$,
  this.productAddAction$
).pipe(
  scan((acc:Product[], curr:Product) =>[...acc, curr])
)




  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}

