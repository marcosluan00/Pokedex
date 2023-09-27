import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-bar',
  templateUrl: './indicator-bar.component.html',
  styleUrls: ['./indicator-bar.component.css']
})
export class IndicatorBarComponent implements OnInit {

  @Input() value: number = 0;

  corIndicator: string = ''
  
  constructor() { }

  ngOnInit(): void {
    this.changeColor()
  }

  changeColor(){
    if(this.value <= 30){
      this.corIndicator = 'linear-gradient(to right, #ff2600, #ad1a00)'
    }else if(this.value > 30 && this.value <= 70){
      this.corIndicator = 'linear-gradient(to right, #ebf542, #ffdc3b)'
    }else{
      this.corIndicator = 'linear-gradient(to right, #01d700, #01b900)'
    }
  }

}
