import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("http://localhost:8080/getdata");
  }

  postData(x,y,z){
    return this.http.post("http://localhost:8080/postdata", {productId:x, productName:y, productPrice:z});    
  }

  /* setData(uname:string){
    return this.http.post("http://localhost:8080/data",{name:uname});
  } */
}
