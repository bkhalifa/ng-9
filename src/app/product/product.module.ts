import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { ProductService } from '../core/product.service';
import { ProductResolveService } from './product-resolve.service';
import { RouterModule } from '@angular/router';
import { productRoutes } from './product.route';
import { CategoryService } from '../category/category.service';
import { CategoryResolverService } from '../category/category-resolver.service';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
imports:[
   CommonModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
   RouterModule.forChild(productRoutes)] ,

  declarations: [ProductComponent,
    CategoryComponent,
    CreateProductComponent
    ],

   exports:[],

   providers:[
     ProductService,
     ProductResolveService,
     CategoryService,
     CategoryResolverService
      ]
})

export class PorductModule{}
