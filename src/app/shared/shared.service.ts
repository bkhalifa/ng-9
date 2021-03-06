import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, combineLatest, Subject, merge, interval, from, of } from 'rxjs';
import { Product } from '../core/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, scan, shareReplay, take, mergeMap, toArray, switchMap, filter } from 'rxjs/operators';
import { Category } from '../core/category';
import { ShoppingCart } from '../core/shoppingCart';

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
  private shoppingUrl ='http://localhost:8081/api';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  //selected product
  private selectedProductSubject = new BehaviorSubject<number>(391);
  selectedProductAction$ = this.selectedProductSubject.asObservable();
  selectedProductChange(productId:number){
    this.selectedProductSubject.next(productId);
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
    tap(categories => console.log(categories)),
      catchError(this.handleError),
      shareReplay(1)
    )

    products$ = this.http.get<Product[]>(`${this.productsUrl}/product`)
      .pipe(
        catchError(this.handleError)
      )

//combine create a array of two  [products[], categories[]]
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
       ),
       //buffer size one one : replay the last value emitted
       shareReplay(1)
  )

  selectedProduct$ = combineLatest([
    this.productsWithCategory$,
    this.selectedProductAction$,
  ]).pipe(
    map(([products, selectedProductID]) =>{
     return products.find(product => product.productId === selectedProductID);
    }),
    shareReplay(1)
  )


  //add product
  private productInsertSubject = new Subject<Product>();
  productInsertAction$ = this.productInsertSubject.asObservable();

  AddProduct(newProduct? :Product){
  newProduct = newProduct || this.fakePorduct();
  this.productInsertSubject.next(newProduct);
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

  allProductsWithAdd$ = merge(
    this.productsWithCategory$,
    this.productInsertAction$,
  ).pipe(
    scan((acc :Product[], curr:Product) =>[...acc, curr]  )
  )
  //end add




//shopping carts
shoppingCarts$ = this.http.get<ShoppingCart[]>(`${this.shoppingUrl}/Shopping/carts`).pipe(
  tap(data => console.log('shopping',JSON.stringify(data))),
  shareReplay(1),
  catchError(this.handleError)
)

//get it all approach
selectproductCarts$ = combineLatest(
this.selectedProduct$,
this.shoppingCarts$
).pipe(
  map(([selectedProduct, shoppingCarts])=>
  shoppingCarts.filter(cart => selectedProduct.productId === cart.productId)
)
)

// just in time approach


  selectedprodcutCartsJit$ = this.selectedProduct$.pipe(
    filter(product => Boolean(product)),
    mergeMap(product =>
      from([product.productId])
        .pipe(
          mergeMap(productId =>
            this.http.get<any>(`${this.shoppingUrl}/Shopping/cartByProduct?productId=${productId}`)),
          toArray(),
          tap(data => console.log(JSON.stringify(data))),
        )));


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
