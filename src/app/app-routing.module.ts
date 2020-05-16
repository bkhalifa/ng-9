import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

import { CategoryResolverService } from './category/category-resolver.service';

import { AcceuilComponent } from './accueil/Accueil.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProductListAltComponent } from './rxjs/product-list-alt/product-list-alt.component';



const routes: Routes = [
  {
    path:'',
    component:ProductListAltComponent,
    pathMatch: 'full'
   },

  { path: 'accueil', component:AcceuilComponent  },
  {
    path: 'categories',
    component: CategoryComponent,
    resolve:{categories: CategoryResolverService}
  },
  {
    path: 'products',
    loadChildren:() => import('./product/product.module').then(m => m.PorductModule),

  },
  {
   path:'user',
   loadChildren:() => import('./user/profile.module').then(m=>m.ProfileModule)
  },
  {
  path:'product',
  loadChildren:() => import('./product/product.module').then(m=>m.PorductModule)
  },
  { path: 'rxjs', component:RxjsComponent },
  { path: 'product-list', component:ProductListAltComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
