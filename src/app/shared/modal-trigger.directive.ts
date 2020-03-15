import { Directive, ElementRef, Inject, OnInit } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector:'[modal-trigger]',

})
export class ModalTriggerComponent implements OnInit{
el:HTMLElement
constructor(private ref:ElementRef, @Inject(JQ_TOKEN)private $:any){
  this.el = ref.nativeElement
}
  ngOnInit(): void {
  this.el.addEventListener('click',e=>{
    this.$('#simple-modal').modal({})
  })
  }
}
