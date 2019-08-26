import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private ms: MessageService) { }

  pid;
  pname;
  pprice;
  ngOnInit() {
  }

  submitData(){
    
    this.ms.postData(this.pid, this.pname, this.pprice).subscribe(data=>{

    })
  }
}
