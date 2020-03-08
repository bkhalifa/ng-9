import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavBarComponent } from './shared/nav-bar.component';
import { ProductResolveService } from './product/product-resolve.service';
import { PorductModule } from './product/product.module';
import { ProfileModule } from './user/profile.module';
import { ProfileSevice } from './user/profile.service';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PorductModule,
    ProfileModule

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
    ProfileSevice
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
