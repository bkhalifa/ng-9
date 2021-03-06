import { Component, Input } from "@angular/core";
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector:'modal-detail-product',
  template:`
   <div id="detail-products"   class="modal fade" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">  {{title}} </h4>
        <button type="button" class="close"
        data-dismiss="modal"><span> &times;</span> </button>
        <span> </span>
     </div>
   <div class="modal.body">
   <ng-content> </ng-content>
   </div>
</div>
</div>
</div>`
})
export class DetailProductComponent{
  @Input() title:string
}
