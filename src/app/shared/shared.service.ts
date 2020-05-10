import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, combineLatest } from 'rxjs';
import { Product } from '../core/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Category } from '../core/category';

@Injectable()
export class SharedService {
  pager: object;
  prevPage: number
  url: string;
  private page: BehaviorSubject<number>;
  page$: Observable<number>;

  private message: BehaviorSubject<string>;
  sharedMessage: Observable<string>
  private productsUrl = 'http://localhost:8081/api';
  private productLocalUrl = 'http://localhost:8656/api';
  private categoryUrl: string = 'http://localhost:8081/api/Category';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
    this.message = new BehaviorSubject<string>('First Message');
    this.sharedMessage = this.message.asObservable();

    this.page = new BehaviorSubject<number>(null);
    this.page$ = this.page.asObservable()

    this.prevPage = null
  }


  categories$ = this.http.get<Category[]>(this.categoryUrl)
    .pipe(
      catchError(this.handleError)
    )

    products$ = this.http.get<Product[]>(`${this.productsUrl}/product`)
      .pipe(
        catchError(this.handleError)
      )

  productsWithCategory$ = combineLatest([
    this.products$,
    this.categories$,
  ]).pipe(
    map(([products,categories])=>
      products.map(product=>({
        ...product,
        unitCost :product.unitCost * 0.0,
        category:categories.find( c => product.categoryId === c.categoryId).categoryName,
        searchKey:[product.modelName]
      })as Product)
       )
  )

  // products$ = this.http.get<Product[]>(`${this.productsUrl}/product`)
  //   .pipe(
  //     tap(products => products.map(product =>
  //       ({
  //         ...product,
  //         unitCost: product.unitCost * 0,
  //         searchKey: [product.modelName],

  //       }) as Product)),
  //     tap(products => console.log(products)),
  //     catchError(this.handleError)
  //   )

  nextPage(page: number) {
    this.page.next(page);
  }

  nextMessage(message: string) {
    this.message.next(message)
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
