import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import {map} from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';


@Injectable()
export class ProductService{

  private _urlApiGetProduct :string ='http://localhost:8081/api/product';

   constructor(private _http :HttpClient){}


  GetProducts(){
  return this._http
                  .get<Array<Product>>(this._urlApiGetProduct)
  }
}


