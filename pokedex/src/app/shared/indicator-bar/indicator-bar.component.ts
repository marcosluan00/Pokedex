import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-bar',
  templateUrl: './indicator-bar.component.html',
  styleUrls: ['./indicator-bar.component.css']
})
export class IndicatorBarComponent implements OnInit {

  @Input() value: number = 0;

  corIndicator: string = 'red'


  constructor() { }

  ngOnInit(): void {
    this.changeColor()
  }

  changeColor(){
    if(this.value <= 30){
      this.corIndicator = '#d42000'
    }else if(this.value > 30 && this.value <= 70){
      this.corIndicator = '#f5e042'
    }else{
      this.corIndicator = 'green'
    }
  }
}
