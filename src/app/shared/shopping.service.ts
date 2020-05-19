import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { concatMap, tap, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ShoppingService{
  private shoppingUrl ='http://localhost:8081/api';


  //1 - concatMap

 shoppingswWithConcatMap$ = of(355,360,377).pipe(
   tap(productId => console.log('contactMap source Observable', productId)),
   concatMap((productId) =>  this.http.get<any>(`${this.shoppingUrl}/Shopping/cartByProduct?productId=${productId}`)

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
