import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Category } from '../core/category';
import { CategoryService } from './category.service';
import {map}  from 'rxjs/operators'

@Injectable()
export class CategoryResolverService implements Resolve<any>{
  constructor(private _categoryService: CategoryService){}

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {

    return this._categoryService.GetAllCategories().pipe(map(res=>res))
  }


}
