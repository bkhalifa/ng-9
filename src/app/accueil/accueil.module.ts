import { NgModule } from "@angular/core";
import { ProductShellComponent } from './product-shell/product-shell.component';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './Accueil.component';
import { CategoryShellComponent } from './product-shell/category-shell.component';

@NgModule({
  imports:[CommonModule],
  declarations:[
    ProductShellComponent,
     CategoryShellComponent,
     AcceuilComponent
    ],
  exports:[],
  providers:[]
})
export class AccueilModule{}
