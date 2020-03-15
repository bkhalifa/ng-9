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



declare let toastr: Toastr
let jquery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PorductModule,
    ProfileModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    SimpleModalComponent,
    ModalTriggerComponent

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
    SharedService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
