import { Component, OnInit } from "@angular/core";

@Component({
  template: `
 <div class ="row">
   <div class = "col-md-3">
   <category-shell> </category-shell>
</div>
<div class="col-md-9">
<product-shell> </product-shell>
</div>
</div>


 `
})
export class AcceuilComponent implements OnInit {

  ngOnInit(): void {

  }
}
