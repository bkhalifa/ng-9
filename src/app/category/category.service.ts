import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../core/category';
import { of } from 'rxjs';
import {tap} from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';




@Injectable()
export class CategoryService {

  private categoryUrl: string = 'http://localhost:8081/api/Category';

  constructor(private _http: HttpClient,
             private route: ActivatedRoute) { }

  categories  : Category[]
  public searchText :string

  GetAllCategories = () => {
    if(this.categories){
      return of(this.categories);
    }

   return this._http
        .get<Array<Category>>(this.categoryUrl)
         .pipe(
            tap(res => this.categories =res)
            )

  }

}
