import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  data;
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("http://localhost:8080/getdata");
  }

  postData(x,y,z){
    this.data = {productId:x, productName:y, productPrice:z}
    return this.http.post("http://localhost:8080/postdata", this.data);    
  }
}
