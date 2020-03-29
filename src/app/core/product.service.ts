import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService{

  private products :Observable<Product[]>

  private productsUrl = 'api/products';

  foundProduct : Product

   constructor(private _http :HttpClient){}


  GetProducts():Observable<Product[]>{
   this.products = this._http
                  .get<Array<Product>>(this.productsUrl)

       return this.products
  }

  searchProducts(searchElem){
    if(!!searchElem){
      let pr = this._http
          .get<Array<Product>>(this.productsUrl)
      return pr.pipe(
      map(projects => projects.filter(proj => proj.modelName.toLowerCase() === searchElem))
      )

    }
  }


  searchData(searchText:string){
    if(!!searchText){
      let datas = this._http.get<Array<Product>>(this.productsUrl)
      return datas.pipe(
        map(produits => produits.filter(p =>p.modelName.toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()))
        ))
      }
  }

  detailProduct(productId:number):any{
    return this._http
    .get<Array<Product>>(this.productsUrl)
   .pipe(
     map(p=>p.find(pr=>pr.productId===productId))
   )

  }
}


