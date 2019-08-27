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
  pdata;
  constructor(private ps: ProductService, private route: ActivatedRoute, private router: Router) {
    this.getpid=this.route.snapshot.paramMap.get('pid');
    this.ps.getDataById(this.getpid).subscribe(data=>{
      this.pdata = data;
    })
   }

  
  ngOnInit() {
    
  }

  editData(){
    //console.log(this.getpid);
    
    this.router.navigateByUrl("");
  }

}
