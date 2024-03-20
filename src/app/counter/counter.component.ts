import { Component } from "@angular/core";


@Component({
    selector: "app-contador",
    templateUrl: "./counter.component.html"
})
export class CounterComponent{
    contador: number = 0;

  handleCount(value: number){
    this.contador=value;
  } 
  
    
}