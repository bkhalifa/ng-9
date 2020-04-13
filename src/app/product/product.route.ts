import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductResolveService } from './product-resolve.service';
import { CreateProductComponent } from './create-product.component';
import { ProductDetailComponent } from '../shared/product-detail.component';
import { AuthGuardService } from '../core/auth-guard';


export const productRoutes :Routes =[
{
  path:'all' ,
  component:ProductComponent,
  resolve :{ products: ProductResolveService },
  canActivate:[AuthGuardService]
},
{
  path:'new',
  component:CreateProductComponent
},
{
  path:'details/:productID',
  component:ProductDetailComponent
}
]
