import {Component, Input} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'productList',
  templateUrl: './productList.component.html'
})

export class ProductListComponent {
  productList: any = {};
  @Input() editMode: boolean;
  constructor(private api: ApiService){}

  ngOnInit() {
   this.api.getProducts().subscribe(res => {
     this.productList = res;
   });
  }
}
