import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  getpid;
  pid;
  pname;
  pprice;
  constructor(private ps: ProductService, private route: ActivatedRoute, private router: Router) {
    this.getpid=this.route.snapshot.paramMap.get('pid');
    this.ps.getDataById(this.getpid).subscribe(data=>{
      this.pid = data[0].productId;
      this.pname = data[0].productName;
      this.pprice = data[0].productPrice;
    })
   }

  
  ngOnInit() {
    
  }

  editData(){
    //console.log(this.getpid);
    this.ps.editData(this.pid,this.pname,this.pprice).subscribe();
    this.router.navigateByUrl("/home/view");
  }

}
