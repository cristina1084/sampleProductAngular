import { Component, OnInit } from '@angular/core';
// import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
// import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
//@Inject(LOCAL_STORAGE) private wss: WebStorageService
// @Injectable()
export class DeleteproductComponent implements OnInit {

  uname;
  user;
  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem("Username")
  }

  set(){
    localStorage.setItem("Username",this.uname)
  }

  add(){
    
  }
}
