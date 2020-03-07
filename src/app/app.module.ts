import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavBarComponent } from './shared/nav-bar.component';
import { ProductResolveService } from './product/product-resolve.service';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category/category.service';
import { HttpClient } from '@angular/common/http';
import { PorductModule } from './product/product.module';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  PorductModule

  ],
  declarations: [
    AppComponent,
    NavBarComponent
  ],

  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/'
    },
    ProductResolveService,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
