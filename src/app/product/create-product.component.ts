import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
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

  prodcutForm: FormGroup
  modelName: FormControl
  modelNumber: FormControl
  imageModel: FormControl
  unitCost: FormControl
  description: FormControl
  ngOnInit(): void {
    this.modelName = new FormControl('')
    this.modelNumber = new FormControl('', Validators.required)
    this.imageModel = new FormControl('', Validators.required)
    this.unitCost = new FormControl('', Validators.required)
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
  }
  onFileChanged(file) {

  }


}
