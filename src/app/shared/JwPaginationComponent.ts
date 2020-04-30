import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../core/product.service';
import { SharedService } from './shared.service';

const paginate = require('jw-paginate');

@Component({
  selector: 'jw-pagination',
  template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
      <a (click)="setPage(1)" class="page-link">First</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
      <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
  </li>
  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
      <a (click)="setPage(page)" class="page-link">{{page}}</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
      <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
      <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
  </li>
</ul>`,
  styles: [`
  a { cursor: pointer; }
.pagination {
 justify-content: center;
 flex-wrap: wrap;
 background-color:#454d55;
}
.page-item{
  color:#454d55
}
`]
})
export class JwPaginationComponent implements OnInit, OnChanges {

  constructor(private prodcuctservice: ProductService, private sharedService: SharedService) { }
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 100;
  @Output() emitPage = new EventEmitter<number>();

  pager: any = {};

  ngOnInit() {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.prodcuctservice.products = this.items;

      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  setPage(page: number) {
    this.sharedService.page$.subscribe(
      (res) => {
        if (res != null) {
          page = res
        }
      }
    )
    // get new pager object for specified page
    this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);
    this.emitPage.emit(page);
    // get new page of items from items array
    var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // call change page function in parent component
    this.changePage.emit(pageOfItems);
    this.sharedService.nextPage(null)
  }
}
