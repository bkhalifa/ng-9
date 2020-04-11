import { Directive, ElementRef, Inject, OnInit, Input } from "@angular/core";
import { JQ_TOKEN } from 'src/app/shared/jquery.service';

@Directive({
selector:'[user-detail]'
})
export class UserDetailTrigger implements OnInit {

  el:HTMLElement;

  constructor(private ref:ElementRef, @Inject(JQ_TOKEN) private $:any){
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
   this.el.addEventListener('click', e=>{
     this.$('#detail-user').modal({})
   })
  }

}
