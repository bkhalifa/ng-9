import { Directive, OnInit, ElementRef, Inject, Input } from "@angular/core";
import { JQ_TOKEN } from 'src/app/shared/jquery.service';

@Directive({
  selector:'[tiggrer-m-product]'
})
export class TriggerProductDetailDirective implements OnInit{
el :HTMLElement
@Input('tiggrer-m-product') modalId:string
constructor(private ref:ElementRef,@Inject(JQ_TOKEN)private $ :any){
  this.el = ref.nativeElement;
}
ngOnInit(){
this.el.addEventListener('click',e=>{
  this.$(`#${this.modalId}`).modal();
})
}
}
