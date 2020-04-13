import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductResolveService } from './product-resolve.service';
import { CreateProductComponent } from './create-product.component';
import { ProductDetailComponent } from '../shared/product-detail.component';
import { AuthGuard } from '../core/auth-guard';


export const productRoutes :Routes =[
{
  path:'all' ,
  component:ProductComponent,
  resolve :{ products: ProductResolveService },
  canActivate:[AuthGuard]
},
{
  path:'new',
  component:CreateProductComponent,
  canActivate:[AuthGuard]
},
{
  path:'details/:productID',
  component:ProductDetailComponent
}
]
