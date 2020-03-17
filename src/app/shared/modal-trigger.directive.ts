import { Directive, ElementRef, Inject, OnInit, Input } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';


@Directive({
  selector:'[modal-trigger]',

})
export class ModalTriggerComponent implements OnInit{
  @Input('modal-trigger') moduleId:string
el:HTMLElement
constructor(private ref:ElementRef, @Inject(JQ_TOKEN)private $:any){
  this.el = ref.nativeElement
}
  ngOnInit(): void {
  this.el.addEventListener('click',e=>{
    this.$(`#${this.moduleId}`).modal({})
  })
  }
}
