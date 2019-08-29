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

  getDataById(a){
    return this.http.get("http://localhost:8080/getdata/"+a);
  }

  editData(a,b,c){
    this.data = {productId:a, productName:b, productPrice:c}
    return this.http.post("http://localhost:8080/editdata",this.data);
  }

  deleteData(a){
    return this.http.get("http://localhost:8080/deletedata/"+a);
  }
}
