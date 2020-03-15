import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../core/category';
import { from, Observable, of } from 'rxjs';
import {map} from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';




@Injectable()
export class CategoryService {

  private urlgetcategories: string = 'http://localhost:8081/api/Category';

  constructor(private _http: HttpClient,
             private route: ActivatedRoute) { }

  categories$ : Observable<any>
  categories  : Category[]
  public searchText :string

  GetAllCategories = () => {
    this.categories$  = this._http
        .get<Array<Category>>(this.urlgetcategories)
   return this.categories$.pipe( map(res => this.categories =res))

  }


  searchCategory(seatchTerm){
   // it's work but not initialised :

  //  let result = of([this.categories.find(x=>x.categoryName.toLowerCase().includes(seatchTerm))])
  //  result.subscribe(
  //      result => this.categories = result,
  //       err =>  console.log(err.status)
  //         );

    this.categories$ = this._http
    .get<Array<Category>>(this.urlgetcategories)
    .pipe(
    map(response => {
       this.categories = response
      return this.categories;
    })
  )
    this.categories$
      .pipe(
         map(categories => categories
        .filter(c=>c.categoryName.toLowerCase().includes(seatchTerm)))
      ) .subscribe(
        res =>this.categories = res,
        err =>  console.log(err.status)
          );



  }

}
