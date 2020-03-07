import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { ProductService } from '../core/product.service';
import { ProductResolveService } from './product-resolve.service';
import { RouterModule } from '@angular/router';
import { productRoutes } from './product.route';
import { CategoryService } from '../category/category.service';
import { CategoryResolverService } from '../category/category-resolver.service';


@NgModule({
imports:[
   CommonModule,
   HttpClientModule,
   RouterModule.forChild(productRoutes)] ,

   declarations:[ProductComponent,CategoryComponent ],

   exports:[],

   providers:[
     ProductService,
     ProductResolveService,
     CategoryService,
     CategoryResolverService
      ]
})

export class PorductModule{}
