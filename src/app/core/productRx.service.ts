import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { throwError,  Subject, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductRXService{
  private productsUrl = 'http://localhost:8081/api';

  private productsByCategorySubject : BehaviorSubject<number>;
  productsCategoryAction$ : Observable<number>;


  constructor(private http :HttpClient){
    this.productsByCategorySubject =
         new BehaviorSubject<number>(JSON.parse(sessionStorage.getItem('categoryID')));

   this.productsCategoryAction$ = this.productsByCategorySubject.asObservable();
  }


  allProducts$ = this.http.get<Product[]>(`${this.productsUrl}/Product`).pipe(
    catchError(this.handleError)
  )

//product by category



  selectedCategoryIdStore(categoryId:number):void{
    sessionStorage.setItem('categoryID', JSON.stringify(categoryId));
    this.productsByCategorySubject.next(categoryId);

  }

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
