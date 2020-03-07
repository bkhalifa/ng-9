import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../core/category';



@Injectable()
export class CategoryService {

  private urlgetcategories: string = 'http://localhost:8081/api/Category';

  constructor(private _http: HttpClient) { }

  GetAllCategories = () => {
    return this._http
      .get<Array<Category>>(this.urlgetcategories);
  }

}
