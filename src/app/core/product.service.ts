import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import {map} from 'rxjs/operators';
import { find} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService{

  private products :Observable<Product[]>

  private _urlApiGetProduct :string ='http://localhost:8081/api/product';

   constructor(private _http :HttpClient){}


  GetProducts():Observable<Product[]>{
   this.products = this._http
                  .get<Array<Product>>(this._urlApiGetProduct)

       return this.products
  }

  searchProducts(searchElem){
    if(!!searchElem){
      let pr = this._http
          .get<Array<Product>>(this._urlApiGetProduct)
      return pr.pipe(
      map(projects => projects.filter(proj => proj.modelName.toLowerCase() === searchElem))
      )



    }
  }
}


