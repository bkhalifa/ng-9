import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import {  empty, combineLatest, BehaviorSubject, Subject, interval } from 'rxjs';
import { catchError, map, startWith, take, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsComponent {
  errorMessage: '';


  //create an action stream
  private categorySelectedSubject = // new BehaviorSubject<number>(0);
   new Subject<number>();
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();


  constructor(private sharedService: SharedService) { }

  products$ = combineLatest([
    this.sharedService.allProductsWithAdd$,
    this.categorySelectedAction$.pipe(
      startWith(0)
      ),
  ]).pipe(
    map(([products, selectedCategoryId]) =>
      products.filter(product =>
        selectedCategoryId ? product.categoryId === selectedCategoryId : true)
    ),
    catchError(err => {
      this.errorMessage = err;
      return empty;
    })
  )

  categories$ = this.sharedService.categories$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return empty;
      })
    )


    addProduct(){
      this.sharedService.AddProduct();
    }

  onSelected(selectedCategoryId: number) {
    //emit a value to action stream
    this.categorySelectedSubject.next(+selectedCategoryId);
  }


}
