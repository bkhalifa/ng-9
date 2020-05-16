import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../core/category';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';




@Injectable()
export class CategoryService {

   private categoryUrl: string = 'http://localhost:8081/api/Category';

  constructor(private _http: HttpClient,
             private route: ActivatedRoute) { }

  categories$  = this._http.get<Category[]>(this.categoryUrl)
   .pipe(
     catchError(this.handleError)
      )

  public searchText :string



  // GetAllCategories = () => {

  //  return this._http
  //       .get<Array<Category>>(this.categoryUrl)
  //        .pipe(
  //          catchError(this.handleError)
  //           )

  // }

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
