import { NgModule } from "@angular/core";
import { ProductShellComponent } from './product-shell/product-shell.component';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './Accueil.component';
import { CategoryShellComponent } from './product-shell/category-shell.component';
import { ProductTextComponent } from './product-shell/product-text.component';
import { RouterModule } from '@angular/router';
import { accueilRoute } from './route-accueil.module';

@NgModule({
  imports:[CommonModule,
    RouterModule.forChild(accueilRoute)],
  declarations:[
    ProductShellComponent,
     CategoryShellComponent,
     AcceuilComponent,
     ProductTextComponent,

    ],
  exports:[],
  providers:[]
})
export class AccueilModule{}
