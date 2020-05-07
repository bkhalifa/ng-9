import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from './category.service';
import { Category } from '../core/category';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent   {

errorMessage='';


  constructor(public _categoryService: CategoryService,
    private route: ActivatedRoute) { }

  message: string;

  categories$ = this._categoryService.categories$.pipe(
    catchError(err=>{
      this.errorMessage = err;
    return EMPTY;
    })
  )



}
