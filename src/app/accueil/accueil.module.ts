import { NgModule } from "@angular/core";
import { ProductShellComponent } from './product-shell/product-shell.component';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './Accueil.component';
import { CategoryShellComponent } from './product-shell/category-shell.component';
import { ProductTextComponent } from './product-shell/product-text.component';
import { RouterModule } from '@angular/router';
import { accueilRoute } from './route-accueil.module';
import { TriggerModal } from './product-shell/add-trigger';
import { AddModalProductShell } from './product-shell/add-modal';
import { CreateProductShellComponent } from './product-shell/add-product-shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryListShellComponent } from './product-shell/category-list-shell.component';

@NgModule({
  imports:[CommonModule,
    RouterModule.forChild(accueilRoute), FormsModule,ReactiveFormsModule],
  declarations:[
    ProductShellComponent,
     CategoryShellComponent,
     AcceuilComponent,
     ProductTextComponent,
     TriggerModal,
     AddModalProductShell,
     CreateProductShellComponent,
     CategoryListShellComponent
    ],
  exports:[],
  providers:[]
})
export class AccueilModule{}
