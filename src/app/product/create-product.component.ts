import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from '../shared/toastr.service';

@Component({
  selector:'add-product',
  templateUrl: './create-product.component.html',
  styles:[`
    em {float:right; color:#e05c65; padding-left: 10px;}
  .error input {background-color:#E3C3C5}
  .error ::-webkit-input-placeholder {color:#999;}
  .error ::-moz-placeholder {color:#999;}
  .error :-moz-placeholder {color:#999;}
  .error :ms-input-placeholder {color:#999;}
  `]
})
export class CreateProductComponent implements OnInit {
 @Output() notifyCancelMode = new EventEmitter()
 constructor(@Inject(TOASTR_TOKEN)  private  toastr:Toastr){}
  prodcutForm: FormGroup
  modelName: FormControl
  modelNumber: FormControl
  imageModel: FormControl
  unitCost: FormControl
  description: FormControl

  get f() { return this.prodcutForm.controls; }

  ngOnInit(): void {
    this.modelName = new FormControl('')
    this.modelNumber = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.imageModel = new FormControl('', Validators.required)
    this.unitCost = new FormControl('', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    this.description = new FormControl('', Validators.required)

    this.prodcutForm = new FormGroup({
      modelName: this.modelName,
      modelNumber: this.modelNumber,
      imageModel: this.imageModel,
      unitCost: this.unitCost,
      description: this.description

    })
  }

  PostProduit(formValue) {
    console.log(formValue)
    this.toastr.success("saved ok ,","product")
  }
  onFileChanged(file) {

  }
  cancel(){
   this.notifyCancelMode.emit(false)

  }

}
