import { Component, Input } from "@angular/core";

@Component({
  selector:'collapsible-well',
  template:`
  <div (click)="toggleContent()" class="well pointable">
     <h4 class="well-title">{{title}} </h4>
    <ng-content *ngIf="isVisible"></ng-content>
</div>
  `
})
export class CollapsibleComponent{
  isVisible:boolean
@Input() title:string

toggleContent(){
  this.isVisible = !this.isVisible
}
}
