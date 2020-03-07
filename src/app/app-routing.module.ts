import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category/category.service';
import { CategoryResolverService } from './category/category-resolver.service';



const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  {
    path: 'categories',
    component: CategoryComponent,
    resolve:{categories:CategoryResolverService}
  },
  {
    path: 'all',
    loadChildren: () => import('./product/product.module').then(m => m.PorductModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
