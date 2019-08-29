import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ps: ProductService) { }

  sdata;
  ngOnInit() {
    this.ps.getData().subscribe(data=>{
      this.sdata = data;
    })
  }


  deleteData(pid){
    this.ps.deleteData(pid).subscribe();
    this.ps.getData().subscribe(data=>{
      this.sdata = data;
    })
  }
}
