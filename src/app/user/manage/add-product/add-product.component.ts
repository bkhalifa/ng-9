import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/core/product';
import { ProductResolveService } from 'src/app/product/product-resolve.service';
import { ProductService } from 'src/app/core/product.service';
import { JQ_TOKEN } from 'src/app/shared/jquery.service';
import { Toastr, TOASTR_TOKEN } from 'src/app/shared/toastr.service';
import { MProductsComponent } from '../m-products/m-products.component';
import { JwPaginationComponent } from 'src/app/shared/JwPaginationComponent';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService,
             @Inject(TOASTR_TOKEN) private toastr: Toastr,
             @Inject(JQ_TOKEN) private $:any){}

  categoryId :number = 14;
  selectedFiles: Array<File> = [];
  selectedFile: File ;

  prodcutForm: FormGroup
  modelName: FormControl
  modelNumber: FormControl
  imageModel: FormControl
  unitCost: FormControl
  description: FormControl
  @ViewChild(MProductsComponent) productComponent: MProductsComponent
  @ViewChild('JwPaginationComponent') jwPagination: JwPaginationComponent
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
  selectOption(event){
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
       this.productService.addProduct(formData,pr).subscribe(

         (ret)=>{
           if (ret > 0){
          //  this.jwPagination.items.push(pr);
             this.toastr.success("add porduct done !","prodcut");
             this.$('#addProduct').modal('hide');

           }
         }
       );
  }
}
