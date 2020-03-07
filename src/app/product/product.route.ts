import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductResolveService } from './product-resolve.service';


export const productRoutes :Routes =[
{
  path:'products' ,
  component:ProductComponent,
  resolve :{ products: ProductResolveService }
}
]
