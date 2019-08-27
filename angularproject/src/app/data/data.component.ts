import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  /* result;
  number1;
  number2;
  msg={};
  msg1={}; */
  sdata;
  constructor(private calc:CalcService) { }

  ngOnInit() {
    
  }

  /* addnum(){
    this.result = this.calc.add(this.number1,this.number2);
  }

  diffnum(){
    this.result = this.calc.diff(this.number1,this.number2);
  }

  showMsg(){
    this.msg = this.calc.message({name:"Arun"});
  } */

  /* callServer(){
    this.ms.getData().subscribe(data=>{
      //this.msg1 = data;
      console.log(data);
      this.sdata = data;
      
      
    });
  } */
}
