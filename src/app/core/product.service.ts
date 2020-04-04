import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { tap, retry, catchError } from 'rxjs/operators';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable()
export class ProductService {
  //  private productsUrl = 'api/products';
   private productsUrl = 'http://localhost:8081/api';

   values:any;
   products: Product[];
   selectdProducts :Product[] =null

   private productSource = new Subject<Product[]>();
   productSource$ = this.productSource.asObservable();
   changeProductSource (selectdProducts : Product[]){
     this.productSource.next(selectdProducts);
   }


  constructor(private _http: HttpClient) { }

   foundProduct :Product | null ;

  GetProducts(): Observable<Product[]> {

    if (this.products) {
      this.changeProductSource(this.products)
      return of(this.products);
    }

    return this._http.get<Array<Product>>(`${this.productsUrl}/Product`)
      .pipe(
        tap(data => this.products = data),
        tap(data => this.changeProductSource(data)),
        tap(err => console.log(err))
      )

  }

findProductsByCategoryID(categoryID:number){
  let foundProducts = new Array<Product>();
  foundProducts  = this.products.filter(pro => pro.categoryId == categoryID )
   if(!!foundProducts){
    this.changeProductSource(foundProducts);
   }
  }

  searchProducts(searchElem) {
    if (!!searchElem && this.products) {
      return products => products.filter(proj => proj.modelName.toLowerCase() === searchElem.toLocaleLowerCase())
    }
  }

  searchData(searchText: string) {
    if (!!searchText && this.products) {
      return this.products.filter(p => p.modelName.toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()))
    }
  }

  detailProduct(productId: number): Product {
    if(!!productId){
        return   this.products.find(pr => pr.productId === productId)

    }
  }


  getValues(){
    let model={
      Login:"admim",
      Password:"password"
    }

    //  this.http.get<any>(`${this.profileUrl}/profile/all`)

  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const options = { headers: headers };
  //  return  this._http.post<any>(`${this.productsUrl}/profile/login`,
  //                              JSON.stringify(model),options)

   }



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


