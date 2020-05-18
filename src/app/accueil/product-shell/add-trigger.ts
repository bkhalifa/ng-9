import { Directive, OnInit, ElementRef, Inject, Input } from "@angular/core";
import { JQ_TOKEN } from 'src/app/shared/jquery.service';

@Directive({
  selector:'[trigger-add-product]'
})
export class TriggerModal implements OnInit{
  el:HTMLElement;
  @Input('trigger-add-product') elementId : string

  constructor(private ref:ElementRef,
             @Inject(JQ_TOKEN)private $:any){
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
   this.el.addEventListener('click',e =>{
     this.$(`#${this.elementId}`).modal();
   })
  }
}
