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
import { SharedService } from './shared/shared.service';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { JQ_TOKEN } from './shared/jquery.service';
import { FormsModule } from '@angular/forms';
import { SimpleModalComponent } from './shared/simple-modal.component';
import { ModalTriggerComponent } from './shared/modal-trigger.directive';
import { ProductService } from './core/product.service';
import { AccueilModule } from './accueil/accueil.module';
import { NavCatgegoryComponent } from './shared/nav-catgegory/nav-catgegory.component';
import { BasketComponent } from './basket/basket.component';
import { NavAuthComponent } from './shared/nav-auth/nav-auth.component';
import { RxjsComponent } from './rxjs/rxjs.component';


declare let toastr: Toastr
let jquery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PorductModule,
    ProfileModule,
    FormsModule,
    AccueilModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    SimpleModalComponent,
    ModalTriggerComponent,
    NavCatgegoryComponent,
    BasketComponent,
    NavAuthComponent,
    RxjsComponent


  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide:JQ_TOKEN,
      useValue:jquery
    },
    ProductResolveService,
    ProfileSevice,
    ProductService,
    SharedService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
