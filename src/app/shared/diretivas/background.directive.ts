import { Directive, HostBinding, Input } from '@angular/core';
import { typesColors } from 'src/app/shared/TypesColors';

@Directive({
  selector: '[background]'
})
export class BackgroundDirective {

  @Input('background') colorCard: string = '';

  @HostBinding('style.background-image') background: string ='';

  //linear gradient

  constructor() { }

  ngOnInit() {
    this.background = typesColors[this.colorCard];
  }
    
}

