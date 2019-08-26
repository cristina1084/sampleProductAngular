import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  add(x,y){
    return x+y;
  }

  diff(x,y){
    return x-y;
  }

  message(x){
    return {wmsg:"Welcome "+x.name};
  }
}
