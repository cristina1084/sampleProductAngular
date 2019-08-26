import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ms: MessageService) { }

  sdata;
  ngOnInit() {
    this.ms.getData().subscribe(data=>{
      this.sdata = data;
    })
  }

}
