import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from "rxjs";

@Injectable()
export class ApiService {
  private targetProduct = new Subject<any>();
  selectedProduct = this.targetProduct.asObservable();
  constructor(private http: HttpClient){

  }
  getProducts() {
    return this.http.get('http://localhost:3141/v1/product');
  }

  getProductById(id) {
    console.log(id);
    return this.http.get(`http://localhost:3141/v1/product/${id}`);
  }
  postProduct(product){
    this.http.post('http://localhost:3141/v1/product', product).subscribe(res => {
      console.log(res);
    });
  }
  updateProduct(product){
    this.http.put(`http://localhost:3141/v1/product/${product.id}`, product).subscribe(res => {
      console.log(res);
    });
  }

  deleteProduct(id){
    this.http.delete(`http://localhost:3141/v1/product/${id}`).subscribe(res =>{
      console.log(res);
    });
  }


}
