import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';

import { CategoryService } from './category.service';


@Injectable()
export class CategoryResolverService implements Resolve<any>{
  constructor(private _categoryService: CategoryService){}

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {

    return this._categoryService.categories$;
  }


}
