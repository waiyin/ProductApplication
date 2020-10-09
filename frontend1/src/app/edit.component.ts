import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})

export class EditComponent {
  product: any = {};
  constructor(private api: ApiService, private  route: ActivatedRoute){
  }

  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.api.getProductById(productId).subscribe(res => this.product = res);
    }
    this.api.selectedProduct.subscribe( product => {this.product = product});
  }
  ngOnChanges(){
    this.api.getProducts().subscribe( res => this.product = res);
  }

  addNewProduct(product) {
    this.api.postProduct(product);
  }

  saveProduct(product){
    this.api.updateProduct(product);
  }

  deleteProduct(id){
    this.api.deleteProduct(id);
  }
}

