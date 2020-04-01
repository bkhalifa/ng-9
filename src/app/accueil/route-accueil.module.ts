import { Routes } from '@angular/router';
import { ProductDetailComponent } from '../shared/product-detail.component';

export const accueilRoute :Routes =[
  {
    path:'detail/:productID',
    component:ProductDetailComponent
  }
]
