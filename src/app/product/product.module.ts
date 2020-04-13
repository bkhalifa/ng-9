import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { ProductResolveService } from './product-resolve.service';
import { RouterModule } from '@angular/router';
import { productRoutes } from './product.route';
import { CategoryService } from '../category/category.service';
import { CategoryResolverService } from '../category/category-resolver.service';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleComponent } from '../shared/collapsible.component';
import { ProductDetailComponent } from '../shared/product-detail.component';
import { DetailProductComponent } from '../shared/modal/detail-modal.component';
import { TriggerDetailProductDirective } from '../shared/modal/trigger-detail.component';
import {  AuthGuardService } from '../core/auth-guard';






@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(productRoutes),

  ],
  declarations: [
    ProductComponent,
    CategoryComponent,
    CreateProductComponent,
    CollapsibleComponent,
    ProductDetailComponent,
    DetailProductComponent,
    TriggerDetailProductDirective

  ],

  exports: [

  ],

  providers: [

    ProductResolveService,
    CategoryService,
    CategoryResolverService,
    AuthGuardService
  ]
})

export class PorductModule { }
