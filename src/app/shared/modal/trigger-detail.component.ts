import { Component, Directive, Output, OnInit, ElementRef, Inject, Input, EventEmitter, ViewChild } from "@angular/core";
import { Product } from 'src/app/core/product';
import { JQ_TOKEN } from '../jquery.service';

@Directive({
  selector:'[trigger-detail-product-modal]'
})
export class TriggerDetailProductDirective implements  OnInit{
  el: HTMLElement
notifyProductID = new EventEmitter();
@Input() productID : number

  constructor(private ref : ElementRef,
    @Inject(JQ_TOKEN)private $: any){
      this.el = ref.nativeElement
    }

  ngOnInit(): void {

     this.el.addEventListener('click',e => {
      this.notifyProductID.emit(this.productID)
      this.$('#detail-products').modal()
    })
  }
}
