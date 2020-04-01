import { Component, Input, Output } from "@angular/core";

@Component({
  selector:'product-text',
  template:`
   <a href="#" (click)="toggleDescription()" > More </a>
    <div  class="text" *ngIf="isVisible">
          <span>
            {{description}}
          </span>
        </div>`
})
export class ProductTextComponent{

  isVisible : boolean = false
  @Input() description :string

  toggleDescription(){
    this.isVisible = !this.isVisible
  }
}
