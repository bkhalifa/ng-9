import { Component, ViewChild, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/core/product';
import { ProductRXService } from 'src/app/core/productRx.service';

@Component({
  selector:'create-product-shell',
template:` <div class="container">
 <div class="panel-group">
<div class="panel panel-default">
  <div class="panel-heading"></div>
  <div class="panel-body">

    <form [formGroup]="prodcutForm" (submit)="PostProduit(prodcutForm.value)" autocomplete="off" >
      <!-- <em *ngIf="prodcutForm.controls.modelNumber?.invalid &&
       (prodcutForm.controls.modelNumber?.touched)">Required</em> -->
       <!-- <em *ngIf="!prodcutForm.controls.modelNumber.errors.required">required</em> -->
       <em *ngIf="f.modelNumber.invalid &&  (f.modelNumber.dirty || f.modelNumber.touched)"> required</em>
      <div class="form-group">
        <label for="ModelNumber">Model Number</label>
        <input type="text" class="form-control" id="ModelNumber"
        formControlName="modelNumber"
        [ngClass]="{'error': prodcutForm.controls.modelNumber?.invalid
            && prodcutForm.controls.modelNumber?.dirty}"    />

      </div>

      <div class="form-group">
        <label for="Category">Category</label>
         <category-list-shell (emitCategory)="onOptionSelected($event)"> </category-list-shell>
      </div>

      <div class="form-group">
        <label for="ImageModel">Image</label>
        <em *ngIf=" f.imageModel.invalid &&(f.imageModel.dirty || f.imageModel.touched)">
          required </em>
        <input type="file"  class="form-control"  (change)="onFileChanged($event)"
        formControlName="imageModel" />

      </div>

      <div class="form-group">
        <label for="ModelName">Model Name</label>
        <em *ngIf="f.modelName?.invalid &&(f.modelName?.touched || f.modelName?.dirty)"> required </em>
        <input type="text" class="form-control" required id="ModelName"
        formControlName="modelName"
        [ngClass]="{'error': prodcutForm.controls.modelName?.invalid
        && prodcutForm.controls.modelName?.dirty}">

      </div>

      <div class="form-group">
        <label for="unitcost">unit Cost </label>
        <em *ngIf="f.uniCost?.invalid
        && (f.uniCost.touched || f.uniCost.dirty)"> pattern money</em>
        <input  type="number" class="form-control"
         id="unitcost"  name="uniCost"
          step="0.01"
          formControlName="unitCost" >

      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control"
        id="description" rows="3"
        name="description"
        formControlName="description"
        > </textarea>
      </div>


        <button type="submit"  class="btn btn-success">envoyer</button>
        &nbsp;
        <button  class="btn btn-secondary">Annuler</button>
    </form>
  </div>
</div>

</div>
</div>
`
})
export class CreateProductShellComponent{

constructor(private productRxService:ProductRXService ){}

  categoryId :number = 14;
  selectedFiles: Array<File> = [];
  selectedFile: File ;

  prodcutForm: FormGroup
  modelName: FormControl
  modelNumber: FormControl
  imageModel: FormControl
  unitCost: FormControl
  description: FormControl

  @Output() emitProduct = new EventEmitter<Product>();
  get f() { return this.prodcutForm.controls; }

  ngOnInit(): void {
    this.modelName = new FormControl('')
    this.modelNumber = new FormControl('',
    [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.imageModel = new FormControl('',
    Validators.required)
    this.unitCost = new FormControl('',
    [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    this.description = new FormControl('',
    Validators.required)

    this.prodcutForm = new FormGroup({
      modelName: this.modelName,
      modelNumber: this.modelNumber,
      imageModel: this.imageModel,
      unitCost: this.unitCost,
      description: this.description

    })
  }


  onFileChanged(event:any) {
    if(event.target.files.length > 0){
     this.selectedFiles = <Array<File>>event.target.files;;
    }
  }

  onOptionSelected(event){
   this.categoryId = event;
  }

  PostProduit(prodcutForm){
    let pr = new Product();
      pr.categoryId = this.categoryId;
      pr.description = prodcutForm.description;
      pr.modelName =prodcutForm.modelName;
      pr.modelNumber = prodcutForm.modelNumber;
      pr.unitCost = prodcutForm.unitCost;

      let formData: FormData = new FormData();

      for(let i =0; i <  this.selectedFiles.length; i++){
        formData.append("files", this.selectedFiles[i]);
      }

       formData.append('model', JSON.stringify(pr));


    //  //  this.productService.addProduct(formData,pr).subscribe(

    //      (ret)=>{
    //        if (ret > 0){

    //          this.emitProduct.emit(pr);
    //         //  this.toastr.success("add porduct done !","prodcut");
    //         //  this.$('#addProduct').modal('hide');

    //        }
    //      }
    //   //  );
  }
}
