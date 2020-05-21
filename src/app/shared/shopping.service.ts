import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { concatMap, tap, mergeMap, switchMap, shareReplay, catchError } from 'rxjs/operators';
import { ShoppingCart } from '../core/shoppingCart';

@Injectable({
  providedIn:'root'
})
export class ShoppingService{
  private shoppingUrl ='http://localhost:8081/api';

  shoppingCarts$ = this.http.get<ShoppingCart[]>(`${this.shoppingUrl}/api/Shopping/carts`).pipe(
    tap(data => console.log('shopping',JSON.stringify(data))),
    shareReplay(1),
    catchError(this.handleError)
  )

  //1 - concatMap

 shoppingswWithConcatMap$ = of(355,360,377).pipe(
   tap(productId => console.log('contactMap source Observable', productId)),
   concatMap((productId) =>
   this.http.get<any>(`${this.shoppingUrl}/Shopping/cartByProduct?productId=${productId}`)

 ));

// 2 -mergeMap
shoppingswWithMergeMap$ = of(355,360,377).pipe(
  tap(productId => console.log('mergeMap source Observable', productId)),
  mergeMap((productId) =>  this.http.get<any>(`${this.shoppingUrl}/Shopping/cartByProduct?productId=${productId}`)

));

// 3- swithc map
shoppingswWithSwithMap$ = of(355,360,377).pipe(
  tap(productId => console.log('switchMap source Observable', productId)),
  switchMap((productId) =>  this.http.get<any>(`${this.shoppingUrl}/Shopping/cartByProduct?productId=${productId}`)

));

 constructor(private http: HttpClient){
  this.shoppingswWithConcatMap$.subscribe( res => console.log('concatMap result',res) );
  this.shoppingswWithMergeMap$.subscribe( res => console.log('mergeMap result',res) );
  this.shoppingswWithSwithMap$.subscribe( res => console.log('switchMap result',res) );
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



// shopping cart there are product
// 355
// 360
// 377
// 377
// 359
// 371
// 401
// 360
// 360
// 378
// 360
// 360
// 360
// 360
// 360
// 376
// 360
// 360
// 360
// 360
// 360
// 360
// 401
// 360
// 360
// 360
// 360
// 360
// 360
// 376
// 372
// 385
