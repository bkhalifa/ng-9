import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { tap, retry, catchError } from 'rxjs/operators';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable()
export class ProductService {
  //  private productsUrl = 'api/products';
   private productsUrl = 'http://localhost:8081/api';
   private productLocalUrl = 'http://localhost:8656/api';
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

   values:any;
   products: Product[];
   selectdProducts :Product[] = null

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
      return of(this.products.sort((a,b)=>{
        const name1 = a.modelNumber.toLowerCase();
        const name2 = b.modelNumber.toLowerCase();
        if (name1 > name2) { return 1; }
        if (name1 < name2) { return -1; }
        return 0;
      }));
    }

    return this._http.get<Array<Product>>(`${this.productsUrl}/Product`)
      .pipe(

        // tap(data => {
        //   data.sort((a,b)=>{
        //     const name1 = a.modelNumber.toLowerCase();
        //     const name2 = b.modelNumber.toLowerCase();
        //     if (name1 > name2) { return 1; }
        //     if (name1 < name2) { return -1; }
        //     return 0;
        //   });
        //     this.products = data

        // }),
        tap(products => products.map(product =>({
          ...product,
          unitCost:product.unitCost * 1.5,
          searchKey:[product.modelName]
        }) as Product)),
        tap(data => this.changeProductSource(data)),
        catchError(this.handleError)
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
      return products => products
             .filter(proj => proj.modelName.toLowerCase() === searchElem.toLocaleLowerCase())
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

  addProduct(model:FormData, pr:Product){

   return this._http.post<any>(`${this.productsUrl}/Product/postproduct`, model)
   .pipe(

    catchError(err=> this.handleError(err))
   )
 }

  getValues(){
    let model={
      Login:"admim",
      Password:"password"
    }
   }

  deleteProduct(productId: number):Observable<any> {
    let model={
      Id:productId
    }
    return this._http.post<any>(`${this.productsUrl}/Product/deleteproduct`,JSON.stringify(model),this.httpOptions)
    .pipe(

      retry(1),
      catchError(this.handleError)
    )
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

//reactive rxjs
productsRx$ = this._http.get<Array<Product>>(`${this.productsUrl}/Product`).pipe
(
  catchError(this.handleError)
)

}


