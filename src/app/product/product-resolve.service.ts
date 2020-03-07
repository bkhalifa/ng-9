import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ProductService } from '../core/product.service';
import {map} from 'rxjs/operators'


@Injectable()
export class ProductResolveService implements Resolve<any>{

  constructor(private prodcutService: ProductService){}
  resolve(route: import("@angular/router").ActivatedRouteSnapshot,
   state: import("@angular/router").RouterStateSnapshot) {

    return this.prodcutService.GetProducts().pipe(map(res => res))

  }

}
