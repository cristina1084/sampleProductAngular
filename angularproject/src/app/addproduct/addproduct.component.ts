import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private ps: ProductService, private router: Router) { }

  pid;
  pname;
  pprice;
  ngOnInit() {
  }

  submitData(){
    
    this.ps.postData(this.pid, this.pname, this.pprice).subscribe(data=>{

    })
    this.router.navigateByUrl("")
  }
}
